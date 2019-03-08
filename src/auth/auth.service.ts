import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as jwt from 'jsonwebtoken';
import { User } from 'generated/prisma-client';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async createToken(id: string, email: string) {
    const expiresIn = 60 * 60;
    const secretOrKey = 'secret';
    const user = { email };
    const token = jwt.sign(user, secretOrKey, { expiresIn });

    return { expires_in: expiresIn, token };
  }

  async validateUser(signedUser: User): Promise<boolean> {
    if (signedUser && signedUser.email) {
      return Boolean(this.usersService.findOneByEmail(signedUser.email));
    }

    return false;
  }
}
