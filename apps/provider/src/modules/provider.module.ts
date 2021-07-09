import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/auth.controller';
import { AuthProviders } from '../providers/auth.providers';
import { AuthService } from '../services/auth.service';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService,
    ...AuthProviders],
})
export class ProviderModule {}
