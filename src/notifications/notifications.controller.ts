import { FirebaseService } from './../services/firebase/firebase.service';
import { Controller, Post, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('notifications')
export class NotificationsController {
  constructor(private firebaseService: FirebaseService) {}

  @Post('send')
  @UseGuards(AuthGuard('jwt'))
  async sendPushNotification(@Req() req) {
    const {
      body: { ids, scopes, payload },
    } = req;
    await this.firebaseService.send(ids, payload, scopes);
  }
}
