import { prisma } from '../../../generated/prisma-client';
import * as faker from 'faker';
import * as bcrypt from 'bcrypt';

async function main() {
  const users = [];
  const chats = [];
  await Array.apply(null, Array(50)).map(async () => {
    const data = {
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      password: bcrypt.hashSync(faker.internet.password(), 10),
    };
    const user = await prisma.createUser(data);
    users.push(user);
  });
  Array.apply(null, Array(10)).map(async () => {
    const author = faker.random.arrayElement(users);
    const members = [author.id];
    Array.apply(null, Array(faker.random.number(users.length - 2))).map(async () => {
      const member = faker.random.arrayElement(users);
      if (member.id !== author.id) { members.push(member.id); }
    });
    const chat = await prisma.createChat({
      members: {
        connect: members,
      },
      messages: {
        create: Array.apply(null, Array(faker.random.number())).map(() => ({
          author: faker.random.arrayElement(users).id,
          content: faker.lorem.sentences(),
        })),
      },
      party: {
        create: {
          title: faker.lorem.slug(),
          author: author.id,
          members: {
            connect: members,
          },
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
    chats.push(chat);
  });
}
main();
