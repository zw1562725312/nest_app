import { Controller, Get } from '@nestjs/common';
import { AppTestService } from '../Services/app.testService';

@Controller()
export class AppTestController {
    constructor(private readonly appTestService: AppTestService) {}

    @Get()
    getHello(): string {
      return this.appTestService.getHello();
    }
}