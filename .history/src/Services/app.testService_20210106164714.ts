import { Injectable } from '@nestjs/common';
import Test from '../Interface/test'

@Injectable()
export class AppTestService {
  getHello(): Test {
    return {
        name:'zhangsan',
        // age:23,
        // sex:0
    };
  }
}