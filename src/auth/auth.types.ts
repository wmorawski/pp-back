import { ApiModelProperty } from '@nestjs/swagger';
import { User } from 'src/prisma/prisma.binding';

export interface JwtPayload {
  userId: string;
  exp: number;
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
