import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('session')
  getHello(@Body() login: any ): any {
    return this.appService.session(login);
  }
}
