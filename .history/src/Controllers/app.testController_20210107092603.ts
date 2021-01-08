import { Controller, Get , Query , Param , Body} from '@nestjs/common';
import { AppTestService } from '../Services/app.testService';
import Test from '../interface/test'

@Controller()
export class AppTestController {
    constructor(private readonly appTestService: AppTestService) {}

    @Get('/test')
    getHello(@Query() Params ) {
        console.log("Params",Params);
    //   return this.appTestService.getHello();
    }
}