import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePiDto } from './dto/create-pi.dto';
import { UpdatePiDto } from './dto/update-pi.dto';
import { PiService } from './pi.service';

@Controller('pi')
export class PiController {
  constructor(private readonly service: PiService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() pi: CreatePiDto) {
    return await this.service.create(pi);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePiDto: UpdatePiDto,
  ) {
    return await this.service.update(id, updatePiDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
