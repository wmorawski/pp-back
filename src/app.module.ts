import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PartiesController } from './parties/parties.controller';
import { UsersController } from './users/users.controller';
import { ChatsController } from './chats/chats.controller';
import { UsersService } from './users/users.service';
import { ChatsService } from './chats/chats.service';
import { PartiesService } from './parties/parties.service';
import { PartiesModule } from './parties/parties.module';
import { UsersModule } from './users/users.module';
import { ChatsModule } from './chats/chats.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
    PartiesModule,
    UsersModule,
    ChatsModule,
  ],
  controllers: [AppController, PartiesController, UsersController, ChatsController],
  providers: [AppService, PartiesService, ChatsService, UsersService],
})
export class AppModule {}
