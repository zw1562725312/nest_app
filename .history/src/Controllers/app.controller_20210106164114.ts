import { Controller, Get } from '@nestjs/common';
import { AppService } from '../Services/app.service';
import { AppTestService } from '../Services/app.testService';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private readonly appTestService: AppTestService,) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}