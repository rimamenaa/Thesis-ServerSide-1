import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return ' Deployment yemchi mriguel after Auth of wissem merged';
  }
}
