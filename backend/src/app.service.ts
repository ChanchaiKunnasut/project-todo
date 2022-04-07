import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'CAPCO TODO API HAS BEEN STARTED!!';
  }
}
