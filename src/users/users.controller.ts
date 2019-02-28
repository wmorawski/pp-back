import { UsersService } from './users.service';
import { Get, Controller } from '@nestjs/common';
import { User } from '../../generated/prisma-client';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/')
  async getUsers(): Promise<User[]> {
    return await this.usersService.getUsers();
  }
}
