/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongoProviders } from '../providers/mongo.providers';

@Module({
  providers: [...MongoProviders],
  exports:[...MongoProviders]

})
export class DatabaseModule {}
