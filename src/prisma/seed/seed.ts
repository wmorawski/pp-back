import * as uuid from 'uuid/v4';
import { prisma } from './../../../generated/prisma-client/index';
import * as faker from 'faker';
import * as bcrypt from 'bcrypt';
import { compose, filter } from 'ramda';
import { parse, addHours } from 'date-fns';
import { PartyCreateInput, UserCreateInput } from '../prisma.binding';

const USERS_NUM = 2500;
const PARTIES_NUM = 1250;

const calendarTintsHexArray = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#795548',
  '#607d8b',
];

const createFakeUser = (): UserCreateInput => ({
  email: faker.internet.email(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  avatar: faker.image.avatar(),
  // same password is better you can always log in on this account :)
  password: bcrypt.hashSync('password', 10),
});
const createFakeParty = (author: any, members: any[]): PartyCreateInput => {
  const partyStartDate = faker.date.recent();
  // date-fns please write functions that allow curring or composition :C
  const partyEndDate = addHours(parse(partyStartDate), 6);
  const partyTitle = faker.lorem.slug();
  return {
    title: partyTitle,
    normalizedTitle: partyTitle.toLowerCase(),
    author: {
      connect: {
        id: author.id,
      },
    },
    members: {
      connect: members.map(member => ({ id: member.id })),
    },
    description: faker.lorem.paragraphs(),
    location: {
      create: {
        placeName: faker.address.streetName(),
        latitude: parseFloat(faker.address.latitude()),
        longitude: parseFloat(faker.address.longitude()),
      },
    },
    start: partyStartDate,
    end: partyEndDate,
    colorTint: faker.random.arrayElement(calendarTintsHexArray),
    inviteSecret: uuid(),
  };
};
const getRandomElementsFromArray = (arr: any[]) => {
  const shuffled = arr.sort(() => {
    return 0.5 - Math.random();
  });

  return shuffled.slice(
    0,
    faker.random.number({ min: 1, max: arr.length - 1 }),
  );
};

const getUserFriendsConnectionUpdater = (user, userFriendsConnections) => ({
  where: {
    id: user.id,
  },
  data: {
    friends: {
      connect: userFriendsConnections.map(id => ({ id })),
    },
  },
});

const getRandomPartyAuthor = (arr: any[]): any =>
  faker.random.arrayElement(arr);

const createFakeChat = (party: any) => ({
  members: party.members,
  messages: {
    create: Array.from({
      length: faker.random.number({ min: 20, max: 50 }),
    }).map(() => ({
      author: {
        connect: faker.random.arrayElement(party.members.connect) as any,
      },
      content: faker.lorem.sentences(),
    })),
  },
  party: {
    create: party,
  },
});

const getFriendsConnectionFromUsers = users => users.map(user => user.id);

async function main() {
  // users
  const savedUsers = [];
  const createUserPromise = async userData => {
    const savedUser = await prisma.createUser(userData);
    savedUsers.push(savedUser);
  };
  const usersPromises = Array.from(
    { length: USERS_NUM },
    compose(
      createUserPromise,
      createFakeUser,
    ),
  );
  await Promise.all(usersPromises);

  // this function creates random friendship relations between saved users
  const usersConnections = savedUsers.reduce(
    (acc: any, currentFakeUser: any) => {
      const filteredFriendsToConnect = compose(
        getRandomElementsFromArray,
        compose(
          filter((fakeUser: any) => fakeUser.id !== currentFakeUser.id),
          filter(
            (fakeUser: any) =>
              !(acc[currentFakeUser.id] || []).includes(fakeUser.id),
          ),
        ),
      )(savedUsers);

      filteredFriendsToConnect.forEach(currentFriendToConnectTo => {
        acc[currentFriendToConnectTo.id] = [
          ...(acc[currentFriendToConnectTo.id] || []),
          currentFakeUser.id,
        ];
      });
      acc[currentFakeUser.id] = [
        ...(acc[currentFakeUser.id] || []),
        ...(getFriendsConnectionFromUsers(filteredFriendsToConnect) || []),
      ];
      return acc;
    },
    {},
  );

  for (const savedUser of savedUsers) {
    try {
      await prisma.updateUser(
        getUserFriendsConnectionUpdater(
          savedUser,
          usersConnections[savedUser.id],
        ),
      );
    } catch (e) {
      console.log(e);
    }
  }

  // parties & chats
  const getPartyMembers = partyAuthor => [
    partyAuthor,
    ...getRandomElementsFromArray(savedUsers).filter(partyMember => {
      return partyMember.id !== partyAuthor.id;
    }),
  ];
  const createParty = () => {
    const partyAuthor = getRandomPartyAuthor(savedUsers);
    const partyMembers = getPartyMembers(partyAuthor);
    return createFakeParty(partyAuthor, partyMembers);
  };
  const parties = Array.from({ length: PARTIES_NUM }, createParty);

  // arr.forEach doesn't respect async/await (it's just like for(i,i<len,i++){callback(arr[i])})
  for (const party of parties) {
    try {
      await prisma.createChat(createFakeChat(party));
    } catch (e) {
      console.log(e);
    }
  }
}
main();
