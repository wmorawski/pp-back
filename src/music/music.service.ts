import { Injectable, HttpService } from '@nestjs/common';
const headers = {
  Authorization:
    'Bearer BQAPzvLNAKOiY0QjIyWnUpPdbcSDqIuEfnhuTx40OsSBfrPOmvHsUUYsDU-SUJGNgXfoDA3ZiC0aMrPdKWiuj3puH3LsxP2FT3u6qIJS5rysl6iYtFQUWCNVknT-izcBT8Ful8uWyAwiylc_1LHCqUGzTWSyflYFhcMjtfxYGUBpDTLEk2-5tCUEtSnt8QDdOdgZJot1WnBhl3ZEOzm99wW3aUgGothYb40CXzQeG2-I3y-VEibOn1LMCYs9vggi_s3KDs659Shl2cO9zio',
};
@Injectable()
export class MusicService {
  constructor(private readonly http: HttpService) {}
  async testApi(query: string) {
    const res = (await this.http
      .get(
        `https://api.spotify.com/v1/search?q=${encodeURI(query)}&type=track`,
        {
          headers,
        },
      )
      .toPromise()).data;
    return res;
  }
}
