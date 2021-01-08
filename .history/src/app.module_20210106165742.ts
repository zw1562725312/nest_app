import { Module } from '@nestjs/common';
import { AppController } from './Controllers/app.controller';
import { AppService } from './Services/app.service';
import { AppTestController } from './Controllers/app.testController';
import { AppTestService } from './Services/app.testService';

@Module({
  imports: [],
  controllers: [AppController,AppTestController],
  providers: [AppService],
})
export class AppModule {}
