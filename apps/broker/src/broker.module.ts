import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BrokerController } from './broker.controller';
import { BrokerService } from './broker.service';

@Module({
  imports: [HttpModule],
  controllers: [BrokerController],
  providers: [BrokerService],
})
export class BrokerModule {}
