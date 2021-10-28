import { PartialType } from '@nestjs/mapped-types';
import { CreateStationDto } from './create-station.dto';

export class UpdateStationDto extends PartialType(CreateStationDto) {
  name: string;
  location: string;
  numberOfBicycles: Number;
}
