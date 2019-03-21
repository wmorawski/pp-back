import { Get, Controller, Render, Req, Post } from '@nestjs/common';
import { AuthService } from './auth/auth.service';


@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  @Render('app/index')
  root() {
    return { message: 'Hello world!' };
  }
}
