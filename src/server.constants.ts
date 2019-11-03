export const env = process.env.NODE_ENV || 'development';

export const SPOTIFY_API_URL = 'https://accounts.spotify.com/api/token';
export const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
export const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_SECRET;
export const SPOTIFY_CLIENT_CALLBACK_URL = 'partyplanner://callback';
export const SPOTIFY_ENCRYPTION_SECRET = process.env.PRISMA_SECRET;

export const DB_CONNECTION_TOKEN: string = 'DbConnectionToken';
export const SERVER_CONFIG_TOKEN: string = 'ServerConfigToken';
export const USER_MODEL_TOKEN: string = 'UserModelToken';
export const FACEBOOK_CONFIG_TOKEN: string = 'FacebookConfigToken';
export const TWITTER_CONFIG_TOKEN: string = 'TwitterConfigToken';
export const GOOGLE_CONFIG_TOKEN: string = 'GoogleConfigToken';

export const MESSAGES = {
  UNAUTHORIZED_EMAIL_IN_USE: 'The email already exists',
  UNAUTHORIZED_INVALID_PASSWORD: 'Invalid password',
  UNAUTHORIZED_INVALID_EMAIL: 'The email does not exist',
  UNAUTHORIZED_UNRECOGNIZED_BEARER: 'Unrecognized bearer of the token',
};
