import { UsersService } from './users.service';
import { Get, Controller, UseGuards, Post, Body, HttpException, HttpStatus} from '@nestjs/common';
import { User } from '../../generated/prisma-client';
import { ApiUseTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './create-user.dto';

@ApiUseTags('users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard())
  @ApiOperation({ title: 'Return paginated list of users' })
  @ApiResponse({
    status: 200,
    description: 'The list of users has been returned.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized. Please check your Bearer Token.' })
  async getUsers(): Promise<User[]> {
    return await this.usersService.getUsers();
  }
}
