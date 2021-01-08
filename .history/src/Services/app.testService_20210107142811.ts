import { Injectable } from '@nestjs/common';
import Test from '../Interface/test'

@Injectable()
export class AppTestService {
  getHello(): Test {
    let result = {
      name:'lisi',
      age:66,
      sex:1
    }
    return result
  }
}