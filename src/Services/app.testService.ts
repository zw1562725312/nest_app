import { Injectable } from '@nestjs/common';
import Test from '../Interface/test'

@Injectable()
export class AppTestService {
  getHello(args : Test): Test {
    return args
  }
}