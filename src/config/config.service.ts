import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import { IFacebookConfig } from '../auth/interfaces/facebook-config.interface';

const TOKEN_EXPIRATION = '2 days';
@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
  }

  getFromEnv(key: string): string {
    return this.envConfig[key];
  }

  public static getJwtExpiration() {
    return TOKEN_EXPIRATION;
  }

  public static facebookConfig: IFacebookConfig = {
    login_dialog_uri: 'https://www.facebook.com/v2.12/dialog/oauth',
    access_token_uri: 'https://graph.facebook.com/v2.12/oauth/access_token',
    client_id: 'YOUR CLIENT ID HERE',
    client_secret: 'YOUR CLIENT SECRET HERE',
    oauth_redirect_uri: 'YOUR REDIRECT URI',
    state: '{fbstate}',
  };
}
