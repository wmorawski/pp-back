import { User } from './../../prisma/prisma.binding';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { PrismaService } from 'src/prisma/prisma.service';
import { props, compose, flatten, map, filter } from 'ramda';

function getTokensFromUser(user: User): string[] {
  const pluckedKeys = props([
    'webPushNotificationToken',
    'appPushNotificationToken',
  ])(user as any) as string[];
  return pluckedKeys.filter(Boolean);
}

@Injectable()
export class FirebaseService {
  constructor(private readonly prisma: PrismaService) {}

  private async getDevices(userIds: string[]) {
    try {
      const users = await this.prisma.query.users({
        where: { id_in: userIds },
      });

      return compose(
        flatten,
        map(getTokensFromUser),
      )(users);
    } catch (e) {
      return [];
    }
  }

  public async send(
    userIds: string[],
    title: string,
    body: string,
    image: string = null,
  ) {
    const tokens = await this.getDevices(userIds);

    if (tokens.length === 0) {
      return;
    }

    const message: any = {
      notification: {
        title,
        body,
      },
      android: {
        notification: {
          sound: 'default',
          vibrate_timings: ['0.5s', '2.1s', '3.2s', '4.1s'],
        },
      },
      tokens,
    };

    if (image) {
      message.android.notification.image = image;
    }

    return admin.messaging().sendMulticast(message);
  }
}
