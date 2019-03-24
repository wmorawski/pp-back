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
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
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
  ],
  controllers: [
    AppController,
    PartiesController,
    UsersController,
    ChatsController,
  ],
  providers: [
    AppService,
    PartiesService,
    ChatsService,
    UsersService,
    {
      provide: ConfigService,
      useValue: new ConfigService(
        `${process.env.NODE_ENV ? process.env.NODE_ENV : 'development'}.env`,
      ),
    },
    AuthService,
    PrismaService,
  ],
})
export class AppModule {}
