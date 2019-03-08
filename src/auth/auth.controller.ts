import { LoginUserDto } from './../users/login-user.dto';
import { UsersService } from 'src/users/users.service';
import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/create-user.dto';
import { User } from 'dist/generated/prisma-client';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly usersService: UsersService) {}

  @Post('signup')
  @ApiOperation({ title: 'Create user' })
  @ApiResponse({
    status: 201,
    description: 'User has benn successfully created.',
  })
  @ApiResponse({
    status: 409,
    description: 'A unique constraint would be violated. Check error messages.',
  })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User[]> {
    try {
      const user = await this.usersService.createUser(createUserDto);
      return {
        ...user,
        password: null,
      };
    } catch (e) {
      const err = (e.result.errors.filter(e => e.code === 3010)[0] || e.result.errors[0]).message;
      throw new HttpException({
        status: HttpStatus.CONFLICT,
        error: err,
      }, 409);
    }
  }

  @Post('signin')
  @ApiOperation({ title: 'Login user' })
  async signinUser(@Body() body: LoginUserDto) {
    if (!(body && body.email && body.password)) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Username and password are required',
      }, 403);
    }
    const user = await this.usersService.findOneByEmail(body.email);
    if (user) {
      if (await this.usersService.compareHash(body.password, user.password)) {
        return await this.authService.createToken(user.id, user.email);
      }
    }
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'Username or password wrong!',
    }, 403);
  }
}
