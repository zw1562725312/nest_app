import { Controller, Get } from '@nestjs/common';
import { AppTestService } from '../Services/app.testService';

@Controller()
export class AppTestController {
    constructor(private readonly appService: AppSAppTestServiceervice) {}

    @Get()
    getHello(): string {
      return this.appService.getHello();
    }
}