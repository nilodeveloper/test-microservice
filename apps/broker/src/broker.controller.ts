import { Body, Controller, Post } from '@nestjs/common';
import { BrokerService } from './broker.service';

@Controller()
export class BrokerController {
  constructor(private readonly brokerService: BrokerService) {}

  @Post('session')
  login(@Body() login: any): any {
    return this.brokerService.login(login);
  }
}
