import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FirebaseService {
  constructor(private readonly prisma: PrismaService) {}
  private devices: any[];
  private async getDevices(userId: string | string[]) {
    // return (await this.prisma.query.users({
    //     where: {
    //         id_in: userId,
    //     },
    // })).map(user => user.pushNotificationsTokens);
    return (await admin
      .firestore()
      .collection('devices')
      .where('userId', Array.isArray(userId) ? 'array-contains' : '==', userId)
      .get()).docs.map(doc => doc.data().token);
  }

  public async send(
    userId: string | string[],
    title: string,
    body: string,
    image: string = null,
  ) {
    const message: any = {
      notification: {
        title,
        body,
      },
      topic: 'notifications',
      android: {
        notification: {
          sound: 'default',
          vibrate_timings: ['0.5s', '2.1s', '3.2s', '4.1s'],
        },
      },
      tokens: await this.getDevices(userId),
    };
    if (image) {
      message.android.notification.image = image;
    }
    return admin.messaging().sendMulticast(message);
  }
}
