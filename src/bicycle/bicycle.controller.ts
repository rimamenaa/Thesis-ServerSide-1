import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateBicycleDto } from '../bicycle/dto/create-bicycle.dto';
import { UpdateBicycleDto } from '../bicycle/dto/update-bicycle.dto';
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
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: Express.Multer.File) {
    return await this.service.uploadImage(file);
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
