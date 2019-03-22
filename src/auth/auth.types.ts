import { ApiModelProperty } from '@nestjs/swagger';
import { User, SocialMediaType } from 'src/prisma/prisma.binding';

export interface JwtPayload {
  userId: string;
  exp: number;
}

export interface SignupPayload {
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
