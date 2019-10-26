import { GetNewSpotifyTokenDto } from './dto/get-new-spotify-token.dto';
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
  Header,
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
import * as qs from 'qs';

import axios from 'axios';
import { GqlAuthGuard } from 'src/guards/GqlAuthGuard.guard';
import { spotifyRequest, decrypt, encrypt } from 'src/helpers/spotify.helper';
import { SPOTIFY_CLIENT_CALLBACK_URL } from 'src/server.constants';

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
    private readonly configService: ConfigService,
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

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleLoginCallback(@Req() req, @Res() res) {
    res.redirect(getSuccessSocialCallbackUrl(req.user));
  }

  @Get('spotify/callback')
  @UseFilters(SocialAuthAccessDeniedFilter)
  @UseGuards(AuthGuard('spotify'))
  async spotifyLoginCallback(@Req() req, @Res() res) {
    res.redirect(getSuccessSocialCallbackUrl(req.user));
  }

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
      callbackURL: `${
        process.env.NODE_ENV === 'production'
          ? 'https://partyplannerio.herokuapp.com'
          : ''
      }/auth/facebook/callback`,
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

  @Post('spotify/new-token')
  @UseGuards(AuthGuard('jwt'))
  async TestSomething(@Body() { refreshToken }: GetNewSpotifyTokenDto) {
    const postPayload = {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    };
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(postPayload),
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          // tslint:disable-next-line
          Authorization: `Basic ${Buffer.from(
            `${this.configService.getFromEnv(
              'SPOTIFY_CLIENT_ID',
            )}:${this.configService.getFromEnv('SPOTIFY_SECRET')}`,
          ).toString('base64')}`,
        },
      },
    );
    return response.data;
  }

  @Post('spotify/exchange')
  async spotifyExchange(@Body() body, @Res() res) {
    const params = body;
    if (!params.code) {
      return res.json({
        error: 'Parameter missing',
      });
    }

    spotifyRequest({
      grant_type: 'authorization_code',
      redirect_uri: SPOTIFY_CLIENT_CALLBACK_URL,
      code: params.code,
    })
      .then(session => {
        const result = {
          access_token: session.access_token,
          expires_in: session.expires_in,
          refresh_token: session.refresh_token,
        };
        return res.send(result);
      })
      .catch(response => {
        return res.json(response);
      });
  }
  @Post('spotify/refresh')
  async spotifyRefresh(@Body() body, @Res() res) {
    const params = body;
    if (!params.refresh_token) {
      return res.json({
        error: 'Parameter missing',
      });
    }

    spotifyRequest({
      grant_type: 'refresh_token',
      refresh_token: params.refresh_token,
    })
      .then(session => {
        return res.send({
          access_token: session.access_token,
          expires_in: session.expires_in,
        });
      })
      .catch(response => {
        return res.json(response);
      });
  }
}
