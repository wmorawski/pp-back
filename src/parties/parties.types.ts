import { Party, Location, User } from './../prisma/prisma.binding';

export interface CreatePartyPayload {
  title: string;
  description: string;
  author: User;
  location: Location;
  members: [User];
}

export interface PartyUserInviteInput {
  inviteSecret: string;
  user: User;
}

export interface CanJoinPartyArgs {
  userId: string;
  inviteSecret: string;
  partyId: string;
}

export interface JoinPartyWhereInput {
  userId: string;
  partyId: string;
}
