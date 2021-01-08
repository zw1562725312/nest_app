import { Injectable } from '@nestjs/common';

@Injectable()
export class AppTestService {
  getHello(): string {
    return 'test!';
  }
}