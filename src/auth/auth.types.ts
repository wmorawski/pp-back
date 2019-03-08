import { User } from 'generated/prisma-client';

export interface JwtPayload {
  userId: string;
}

export interface SignupPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthPayload {
  token: string;
  user: User;
}
