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
}
