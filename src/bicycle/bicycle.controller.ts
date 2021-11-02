import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateBicycleDto } from './dto/create-bicycle.dto';
import { UpdateBicycleDto } from './dto/update-bicycle.dto';
import { BicycleService } from './bicycle.service';

@Controller('bicycle')
export class BicycleController {
  constructor(private readonly service: BicycleService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() bicycle: CreateBicycleDto) {
    return await this.service.create(bicycle);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBicycleDto: UpdateBicycleDto,
  ) {
    return await this.service.update(id, updateBicycleDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
