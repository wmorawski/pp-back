import { ApiModelProperty } from '@nestjs/swagger';
import { User, SocialMediaType } from '../prisma/prisma.binding';

export interface JwtPayload {
  userId: string;
  exp: number;
}

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
