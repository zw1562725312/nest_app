import { Injectable } from '@nestjs/common';
import Test from '../Interface/test'

@Injectable()
export class AppTestService {
  getHello(): Test {
    return {
        name:'lisi',
        age:66,
        sex:1
    };
  }
}