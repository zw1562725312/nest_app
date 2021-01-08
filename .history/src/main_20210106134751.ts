import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`nest 服务已启动 http://192.168.200.152:3000`);
  await app.listen(3000);
}
bootstrap();
