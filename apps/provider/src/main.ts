import { NestFactory } from '@nestjs/core';
import { ProviderModule } from './modules/provider.module';

async function bootstrap() {
  const app = await NestFactory.create(ProviderModule);
  await app.listen(3002);
}
bootstrap();
