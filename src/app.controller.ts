import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
