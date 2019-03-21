import { LoginUserDto } from './../users/login-user.dto';
import { UsersService } from 'src/users/users.service';
import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UseGuards,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiUseTags, ApiCreatedResponse } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/create-user.dto';
import { User } from 'generated/prisma-client';
import { LoginPayload } from './auth.types';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

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
      const err = (
        e.result.errors.filter(e => e.code === 3010)[0] || e.result.errors[0]
      ).message;
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: err,
        },
        409,
      );
    }
  }

  @Post('signin')
  @ApiOperation({ title: 'Login user' })
  @ApiCreatedResponse({ description: 'User has been signed in and token has been returned.' })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Invalid email or password'
  })
  async signinUser(@Body() body: LoginUserDto /* Potrzebuje tutaj tego DTO zeby Swagger dobrze robil docsy */) {
    if (!(body && body.email && body.password)) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'Username and password are required',
        },
        401,
      );
    }
    try {
      const user = await this.authService.login(body);
      return await this.authService.createAuthPayload(user);
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: e.message.message,
        },
        401,
      );
    }
  }
  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin() {
    // initiates the Google OAuth2 login flow
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Req() req, @Res() res) {
      // handles the Google OAuth2 callback
      const jwt: string = req.user.jwt;
      if (jwt) {
          res.redirect('http://localhost:3000/login/succes/' + jwt);
      } else {
          res.redirect('http://localhost:3000/login/failure');
      }
  }

  @Get('spotify')
  @UseGuards(AuthGuard('spotify'))
  spotifyLogin() {
    // initiates the Google OAuth2 login flow
  }

  @Get('spotify/callback')
  @UseGuards(AuthGuard('spotify'))
  spotifyLoginCallback(@Req() req, @Res() res) {
      // handles the Google OAuth2 callback
      const jwt: string = req.user.jwt;
      if (jwt) {
          res.redirect('http://localhost:3000/login/succes/' + jwt);
      } else {
          res.redirect('http://localhost:3000/login/failure');
      }
  }

  @Get('facebook')
  facebookLogin() {
    // initiates the Google OAuth2 login flow
  }

  @Get('facebook/callback')
  facebookLoginCallback(@Req() req, @Res() res) {
      // handles the Google OAuth2 callback
      const jwt: string = req.user.jwt;
      if (jwt) {
          res.redirect('http://localhost:3000/login/succes/' + jwt);
      } else {
          res.redirect('http://localhost:3000/login/failure');
      }
  }
}
