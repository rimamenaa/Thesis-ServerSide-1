import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { BicycleModule } from './bicycle/bicycle.module';
import { StationModule } from './station/station.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin/entities/admin.entity';
import { User } from './user/entities/user.entity';
import { Station } from './station/entities/station.entity';
import { Bicycle } from './bicycle/entities/bicycle.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rima',
      database: 'bycycle',
      entities: [Admin, User, Station, Bicycle],
      synchronize: true,
    }),
    UserModule,
    AdminModule,
    BicycleModule,
    StationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
