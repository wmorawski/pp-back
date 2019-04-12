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

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ req }),
    }),
    PrismaModule,
    PartiesModule,
    UsersModule,
    ChatsModule,
    ConfigModule,
    AuthModule,
    MessagesModule,
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
export class AppModule {}
