import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { Station } from './entities/station.entity';

@Injectable()
export class StationService {
  constructor(
    @InjectRepository(Station)
    private station: Repository<Station>,
  ) {}
  create(createStationDto: CreateStationDto) {
    return this.station.save(createStationDto);
  }

  findAll() {
    return this.station.find();
  }

  findOne(id: number) {
    return this.station.findOne(id);
  }

  update(id: number, updateStationDto: UpdateStationDto) {
    return this.station.update(id, updateStationDto);
  }

  remove(id: number) {
    return this.station.delete(id);
  }
}
