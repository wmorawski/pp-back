import { Injectable, HttpService } from '@nestjs/common';
const token =
  'BQDrX2OvDaeno-Kvw-FKT3uwRAUVUU17kt7Idyx3DZrF97YbCX6wVk2i3-BPLz13lvKXka4PpY2g6zi1YAT3ni390saCpRsuskMlpSyui_drPGl0dJoUZoggY9Tfl8u2v_29tGEEfm4nnbVWOKA3dWwu-QFKCXko77HYpShXMWEIxXDG5DA7qBUjm9Tqe2dnDowNp_16Rv2KrdONIjRYVOT_rEEBBRkn8Wsa40h0p9zcbQNl908ZP-D-WODmW3AlJu2qIBYC2pUyr4b68hI';
const headers = {
  Authorization: `Bearer ${token}`,
};
@Injectable()
export class MusicService {
  constructor(private readonly http: HttpService) {}
  async testApi(query: string) {
    try {
      const res = (await this.http
        .get(
          `https://api.spotify.com/v1/search?q=${encodeURI(query)}&type=track`,
          {
            headers,
          },
        )
        .toPromise()).data;
      return res;
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
