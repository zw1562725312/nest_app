import { Injectable } from '@nestjs/common';

@Injectable()
export class AppTestService {
  getHello(): number {
    return 9999;
  }
}