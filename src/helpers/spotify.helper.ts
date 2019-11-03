import {
  SPOTIFY_API_URL,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_ENCRYPTION_SECRET,
} from './../server.constants';
import * as CryptoJS from 'crypto-js';
import * as request from 'request';

export const encrypt = text => {
  return CryptoJS.AES.encrypt(text, SPOTIFY_ENCRYPTION_SECRET).toString();
};

export const decrypt = text => {
  const bytes = CryptoJS.AES.decrypt(text, SPOTIFY_ENCRYPTION_SECRET);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const spotifyRequest = params => {
  return new Promise((resolve, reject) => {
    request.post(
      SPOTIFY_API_URL,
      {
        form: params,
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(
              SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET,
            ).toString('base64'),
        },
        json: true,
      },
      (err, resp) => (err ? reject(err) : resolve(resp)),
    );
  })
    .then((resp: any) => {
      if (resp.statusCode !== 200) {
        return Promise.reject({
          statusCode: resp.statusCode,
          body: resp.body,
        });
      }
      return Promise.resolve(resp.body);
    })
    .catch(err => {
      return Promise.reject({
        statusCode: 500,
        body: JSON.stringify({}),
      });
    });
};
