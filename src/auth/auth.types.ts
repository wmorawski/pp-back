import { ApiModelProperty } from '@nestjs/swagger';
import { User, SocialMediaType } from '../prisma/prisma.binding';
import { Omit } from 'ramda';

export interface JwtPayload {
  userId: string;
  exp: number;
}

export type SocialReAuthPayload = Omit<SocialAuthPayload, 'jwt'>;

export interface SocialAuthPayload {
  provider: SocialMediaType;
  jwt: string;
  providerToken: string;
  providerRefreshToken: string;
}

export type SocialAuthDoneFn = (
  error: Error,
  user: SocialAuthPayload | SocialReAuthPayload | null,
) => void;

export interface SignupPayload {
  id?: string;
  avatar?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  thirdPartyId?: string;
  provider?: SocialMediaType;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthPayload {
  token: string;
  user: User;
}
