import { Controller, Get , Post , Query , Param , Body} from '@nestjs/common';
import { AppTestService } from '../Services/app.testService';
import Test from '../interface/test'

@Controller()
export class AppTestController {
    constructor(private readonly appTestService: AppTestService) {}

    @Get('/testget')
    testget(@Query() Query : Test) {
        console.log("Query",Query);
    //   return this.appTestService.getHello();
    }
    
    @Post('/testpost')
    testpost(@Query() Params : Test) {
        let a : number = 1
        console.log("Params",Params);
    //   return this.appTestService.getHello();
    }
}