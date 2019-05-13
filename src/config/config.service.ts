import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';

const TOKEN_EXPIRATION = '2 days';
@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };
  private readonly filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
    this.envConfig = fs.existsSync(this.filePath)
      ? dotenv.parse(fs.readFileSync(filePath))
      : process.env;
  }

  getFromEnv(key: string): string {
    return fs.existsSync(this.filePath)
      ? this.envConfig[key]
      : process.env[key];
  }

  public static getJwtExpiration() {
    return TOKEN_EXPIRATION;
  }
}
