import { PrismaService } from './../prisma/prisma.service';
import { UsersService } from './users.service';
import {
  Get,
  Controller,
  UseGuards,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Req,
} from '@nestjs/common';
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './create-user.dto';
import { User } from '../prisma/prisma.binding';

@ApiUseTags('users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @UseGuards(AuthGuard())
  @ApiOperation({ title: 'Return paginated list of users' })
  @ApiResponse({
    status: 200,
    description: 'The list of users has been returned.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. Please check your Bearer Token.',
  })
  async getUsers(): Promise<User[]> {
    return [];
    // return await this.usersService.getUsers();
  }

  @Post('patchMissingLastName')
  @UseGuards(AuthGuard('jwt'))
  async patchMissingLastName(@Req() req, res) {
    const {
      user: { userId },
      body,
    } = req;

    return await this.prisma.mutation.updateUser({
      where: { id: userId },
      data: { lastName: body.lastName },
    });
  }
}
