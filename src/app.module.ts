import { MessagesModule } from './messages/messages.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PartiesModule } from './parties/parties.module';
import { UsersModule } from './users/users.module';
import { ChatsModule } from './chats/chats.module';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';

import { AuthModule } from './auth/auth.module';

import { PrismaModule } from './prisma/prisma.module';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ req }),
      installSubscriptionHandlers: true,
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
    }),
    PrismaModule,
    PartiesModule,
    UsersModule,
    ChatsModule,
    ConfigModule,
    AuthModule,
    MessagesModule,
    MailerModule.forRoot({
      transport: `smtp://${process.env.MAILTRAP_USER}:${process.env.MAILTRAP_PASSWORD}@${process.env.MAILTRAP_HOST}`,
      defaults: {
        from: '"PartyPlanner" <noreply@partyplanner.io>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new HandlebarsAdapter(), // or new PugAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: ConfigService,
      useValue: new ConfigService(
        `${process.env.NODE_ENV ? process.env.NODE_ENV : 'development'}.env`,
      ),
    },
  ],
})
export class AppModule { }
