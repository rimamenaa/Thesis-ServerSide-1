import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return ' Deployment yemchi jawou a7la jaw';
  }
}
