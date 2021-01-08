import { Controller, Get } from '@nestjs/common';
import { AppTestService } from '../Services/app.testService';
import Test from '../interface/test'

@Controller()
export class AppTestController {
    constructor(private readonly appTestService: AppTestService) {}

    @Get('/test')
    getHello(@Param() params): Test {
    //   return this.appTestService.getHello();
    }
}