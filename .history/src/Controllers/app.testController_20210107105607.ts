import { Controller, Get , Post , Query , Param , Body} from '@nestjs/common';
import { AppTestService } from '../Services/app.testService';
import Test from '../interface/test'
interface A {
    key
}

@Controller()
export class AppTestController {
    constructor(private readonly appTestService: AppTestService) {}

    @Get('/testget')
    testget(@Query() Query : Test) {
        console.log("Query",Query);
    //   return this.appTestService.getHello();
    }
    
    @Post('/testpost')
    testpost(@Body() params : Test , @Query() query) {
        console.log("params",params);
        console.log("query",query);
        return this.appTestService.getHello();
    }
}