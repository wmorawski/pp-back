[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Installation

```bash
$ npm install
```

## Useful commands

```bash
$ npm install -g prisma # installs prisma globally
$ npm install -g graphql-cli # installs graphql-cli globally
$ npm install -g ts-node # needed for seeder
$ prisma init # initialize prisma service
$ prisma deploy # deploy prisma model to remote server
$ prisma token # create JWT from secret
$ prisma generate # generates prisma client with secret
$ graphql get-schema --project database # downloads schema from prisma servers
$ graphql codegen --project database # generates prisma-bindings
$ source development.env
$ export $(cut -d= -f1 development.env)
```

## Neccessary .env:
```bash
$ PRISMA_ENDPOINT=
$ PRISMA_SECRET=
$ PRISMA_TOKEN=
$ GOOGLE_CLIENT_ID=""
$ GOOGLE_SECRET=""
$ FACEBOOK_APP_ID=""
$ FACEBOOK_APP_SECRET=""
$ SPOTIFY_CLIENT_ID=""
$ SPOTIFY_SECRET=""
$ TWITTER_API_KEY=""
$ TWITTER_API_SECRET=""
$ WEB_URL=""
$ MAILTRAP_USER=""
$ MAILTRAP_PASSWORD=""
$ MAILTRAP_HOST=""
```
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

