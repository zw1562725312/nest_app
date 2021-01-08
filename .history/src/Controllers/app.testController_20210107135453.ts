import { Controller, Get , Post , Query , Param , Body} from '@nestjs/common';
import { AppTestService } from '../Services/app.testService';
import Test from '../interface/test'
interface A {
    key:number,
    id:number
}

@Controller()
export class AppTestController {
    constructor(private readonly appTestService: AppTestService) {}

    @Get('/testget')
    testget(@Query() Query : Test) {
        console.log("Query",Query);
      return this.appTestService.getHello();
    }
    
    @Post('/testpost')
    testpost(@Body() Body : Test ,  @Query('key') key:number, @Query('id') id:number) {
        console.log("Body",Body);
        console.log("key",key);
        console.log("id",id);
        return this.appTestService.getHello();
    }
}