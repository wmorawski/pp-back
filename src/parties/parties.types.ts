import { Party, Location, User } from './../prisma/prisma.binding';

export interface CreatePartyPayload {
  title: string;
  description: string;
  author: User;
  location: Location;
  members: [User];
}
