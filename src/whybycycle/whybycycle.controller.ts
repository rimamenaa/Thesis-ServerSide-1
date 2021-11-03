import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateWhybycycleDto } from './dto/create-whybycycle.dto';
import { UpdateWhybycycleDto } from './dto/update-whybycycle.dto';
import { WhybycycleService } from './whybycycle.service';

@Controller('whybycycle')
export class WhybycycleController {
  constructor(private readonly service: WhybycycleService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() whybycycle: CreateWhybycycleDto) {
    return await this.service.create(whybycycle);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWhybycycleDto: UpdateWhybycycleDto,
  ) {
    return await this.service.update(id, updateWhybycycleDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}





















// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { WhybycycleService } from './whybycycle.service';
// import { CreateWhybycycleDto } from './dto/create-whybycycle.dto';
// import { UpdateWhybycycleDto } from './dto/update-whybycycle.dto';

// @Controller('whybycycle')
// export class WhybycycleController {
//   constructor(private readonly whybycycleService: WhybycycleService) {}

//   @Post()
//   create(@Body() createWhybycycleDto: CreateWhybycycleDto) {
//     return this.whybycycleService.create(createWhybycycleDto);
//   }

//   @Get()
//   findAll() {
//     return this.whybycycleService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.whybycycleService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateWhybycycleDto: UpdateWhybycycleDto) {
//     return this.whybycycleService.update(+id, updateWhybycycleDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.whybycycleService.remove(+id);
//   }
// }
