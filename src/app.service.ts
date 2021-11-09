import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return ' the new deploy of server after forking again ! ';
  }
}
