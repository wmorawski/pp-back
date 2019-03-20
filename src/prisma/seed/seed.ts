import * as faker from 'faker';
import * as bcrypt from 'bcrypt';
import { prisma } from '../../../generated/prisma-client';
import { compose } from 'ramda';

const USERS_NUM = 50;
const PARTIES_NUM = 10;

const createFakeUser = () => ({
  email: faker.internet.email(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  // same password is better you can always log in on this account :)
  password: bcrypt.hashSync('password', 10),
});
const createFakeParty = (author: any, members: any[]) => ({
  title: faker.lorem.slug(),
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
});
const getRandomElementsFromArray = (arr: any[]) => {
  const shuffled = arr.sort(() => {
    return 0.5 - Math.random();
  });
  return shuffled.slice(
    0,
    faker.random.number({ min: 0, max: arr.length - 1 }),
  );
};
const getRandomPartyAuthor = (arr: any[]): any =>
  faker.random.arrayElement(arr);

const createFakeChat = (party: any) => ({
  members: party.members,
  messages: {
    create: Array.from({ length: faker.random.number({ min: 1, max: 3 }) }).map(
      () => ({
        author: {
          connect: faker.random.arrayElement(party.members.connect) as any,
        },
        content: faker.lorem.sentences(),
      }),
    ),
  },
  party: {
    create: {
      title: faker.lorem.slug(),
      author: party.author,
      members: party.members,
      description: faker.lorem.paragraphs(),
      location: {
        create: {
          placeName: faker.address.streetName(),
          latitude: parseFloat(faker.address.latitude()),
          longitude: parseFloat(faker.address.longitude()),
        },
      },
    },
  },
});

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

  // parties & chats
  const savedParties = [];
  const getPartMembers = partyAuthor => [
    partyAuthor,
    ...getRandomElementsFromArray(savedUsers).filter(partyMember => {
      return partyMember.id !== partyAuthor.id;
    }),
  ];
  const createParty = () => {
    const partyAuthor = getRandomPartyAuthor(savedUsers);
    const partyMembers = getPartMembers(partyAuthor);
    return createFakeParty(partyAuthor, partyMembers);
  };
  const parties = Array.from({ length: PARTIES_NUM }, createParty);

  parties.forEach(
    async party => await prisma.createChat(createFakeChat(party)),
  );
}
main();
