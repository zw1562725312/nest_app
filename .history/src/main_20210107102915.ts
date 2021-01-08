import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

!async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(9991);
  console.log(`服务已启动 http://192.168.200.152:9999`);
}();
