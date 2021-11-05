import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Deployment bycycle project ! yaani 7ootou lien deployment fel front whenever you need data from DB';
  }
}
