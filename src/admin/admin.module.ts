import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Admin } from './entities/admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthorisationModule } from '../authorisation/authorisation.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthorisationModule,
    TypeOrmModule.forFeature([Admin]),
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
