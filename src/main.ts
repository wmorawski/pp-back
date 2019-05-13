// tslint:disable-next-line: no-var-requires
require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { join } from 'path';
import { initialize, serializeUser, deserializeUser } from 'passport';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 4000;
  const options = new DocumentBuilder()
    .setTitle('Party Planner Documentation')
    .setDescription('Documentation of the engineering project API')
    .setVersion('0.1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.enableCors();
  app.use(
    session({
      secret: '5ed909234ed04409ba2c0034664815b3',
      resave: true,
      saveUninitialized: true,
    }),
  );
  app.use(initialize());
  serializeUser((user, done) => {
    done(null, user);
  });
  deserializeUser((user, done) => {
    done(null, user);
  });
  await app.listen(port);
}
bootstrap();
