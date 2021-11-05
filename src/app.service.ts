import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'I know you don t feel good , i wish i could be there for you ! I miss you';
  }
}
