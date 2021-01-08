import { Controller, Get , Query , Param} from '@nestjs/common';
import { AppTestService } from '../Services/app.testService';
import Test from '../interface/test'

@Controller()
export class AppTestController {
    constructor(private readonly appTestService: AppTestService) {}

    @Get('/test')
    getHello(@Param() name : string) {
        console.log("name",name);
    //   return this.appTestService.getHello();
    }
}