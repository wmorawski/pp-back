import { SocialAuthAccessDeniedFilter } from './../filters/social-auth.filter';
import { ConfigService } from '../config/config.service';
import { LoginUserDto } from './../users/login-user.dto';
import { UsersService } from '../users/users.service';
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
  Next,
  UseFilters,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiOperation,
  ApiResponse,
  ApiUseTags,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { CreateUserDto } from '../users/create-user.dto';
import { User } from 'generated/prisma-client';

import { AuthGuard } from '@nestjs/passport';
import { authenticate } from 'passport';

import { SocialAuthPayload, SocialReAuthPayload } from './auth.types';

function getSuccessSocialCallbackUrl({
  provider,
  jwt,
  providerToken,
  providerRefreshToken,
}: SocialAuthPayload) {
  return `${
    process.env.WEB_URL
  }/auth/social/success?provider=${provider}&jwt=${jwt}&providerToken=${providerToken}&providerRefreshToken=${providerRefreshToken}`;
}

function getSuccessReAuthCallbackUrl({
  providerToken,
  providerRefreshToken,
  provider,
}: SocialReAuthPayload) {
  return `${
    process.env.WEB_URL
  }/auth/social/reauth/success?provider=${provider}&providerToken=${providerToken}&providerRefreshToken=${providerRefreshToken}`;
}

export function getErrorSocialCallbackUrl() {
  return `${process.env.WEB_URL}/auth/social/error`;
}

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
  @ApiCreatedResponse({
    description: 'User has been signed in and token has been returned.',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Invalid email or password',
  })
  async signinUser(
    @Body()
    body: LoginUserDto /* Potrzebuje tutaj tego DTO zeby Swagger dobrze robil docsy */,
  ) {
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
  async googleLogin() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleLoginCallback(@Req() req, @Res() res) {
    res.redirect(getSuccessSocialCallbackUrl(req.user));
  }

  @Get('spotify')
  @UseGuards(AuthGuard('spotify'))
  async spotifyLogin() {}

  @Get('spotify/callback')
  @UseFilters(SocialAuthAccessDeniedFilter)
  @UseGuards(AuthGuard('spotify'))
  async spotifyLoginCallback(@Req() req, @Res() res) {
    res.redirect(getSuccessSocialCallbackUrl(req.user));
  }

  @Get('spotify/reAuth')
  @UseGuards(AuthGuard('spotify-reauth'))
  async spotifyReAuth() {}

  @Get('spotify/reAuth/callback')
  @UseFilters(SocialAuthAccessDeniedFilter)
  @UseGuards(AuthGuard('spotify-reauth'))
  async spotifyReAuthCallback(@Req() req, @Res() res) {
    res.redirect(getSuccessReAuthCallbackUrl(req.user));
  }

  @Get('facebook')
  async handleOauthRequest(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next,
  ) {
    const params = {
      session: false,
      scope: ['email'],
      callbackURL: `/auth/facebook/callback`,
    };
    authenticate('facebook', params)(req, res, next);
  }

  @Get('facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  facebookLoginCallback(@Req() req, @Res() res) {
    res.redirect(getSuccessSocialCallbackUrl(req.user));
  }

  @Get('twitter')
  async handleOauthTwitterRequest(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next,
  ) {
    const params = {
      session: true,
    };
    authenticate('twitter', params)(req, res, next);
  }

  @Get('twitter/callback')
  @UseGuards(AuthGuard('twitter'))
  async twitterLoginCallback(@Req() req, @Res() res) {
    res.redirect(getSuccessSocialCallbackUrl(req.user));
  }
}
