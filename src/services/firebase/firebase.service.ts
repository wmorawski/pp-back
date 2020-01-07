import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { compose, flatten, map, props } from 'ramda';
import { PrismaService } from 'src/prisma/prisma.service';

import { PushNotificationScope, User } from './../../prisma/prisma.binding';

const DEFAULT_NOTIFICATION_IMAGE = 'https://i.imgur.com/tjOPkh4.png';

function getTokensFromUser(user: User): string[] {
  const pluckedKeys = props([
    'webPushNotificationToken',
    'appPushNotificationToken',
  ])(user as any) as string[];

  return pluckedKeys.filter(Boolean);
}

interface NotificationPayload {
  title: string;
  body: string;
  image?: string;
}

@Injectable()
export class FirebaseService {
  constructor(private readonly prisma: PrismaService) {}

  private async getDevices(userIds: string[], scopes: PushNotificationScope[]) {
    try {
      const users = await this.prisma.query.users(
        {
          where: { id_in: userIds },
        },
        `
        {
          webPushNotificationToken
          appPushNotificationToken
          pushNotificationsScopes
        }
      `,
      );

      const scopedUsers = users.filter(user =>
        user.pushNotificationsScopes.some(scope => scopes.includes(scope)),
      );

      return compose(
        flatten,
        map(getTokensFromUser),
      )(scopedUsers);
    } catch (e) {
      return [];
    }
  }

  public async send(
    userIds: string[],
    notificationPayload: NotificationPayload,
    scopes: PushNotificationScope[],
  ) {
    const tokens = await this.getDevices(userIds, scopes);
    if (tokens.length === 0) {
      return;
    }

    const message: any = {
      notification: {
        ...notificationPayload,
        image: DEFAULT_NOTIFICATION_IMAGE,
      },
      android: {
        notification: {
          sound: 'default',
          vibrate_timings: ['0.5s', '2.1s', '3.2s', '4.1s'],
        },
        image: notificationPayload.image,
      },
      tokens,
    };

    try {
      await admin.messaging().sendMulticast(message);
    } catch (e) {
      // tslint:disable-next-line: no-console
      console.log('could not fire notification!', e);
    }
  }
}
