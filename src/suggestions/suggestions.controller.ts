
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateSuggestionsDto } from './dto/create-suggestion.dto';
import { UpdateSuggestionsDto } from './dto/update-suggestion.dto';
import { SuggestionsService } from './suggestions.service';

@Controller('suggestion')
export class SuggestionsController {
  constructor(private readonly service: SuggestionsService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() suggestion: CreateSuggestionsDto) {
    return await this.service.create(suggestion);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSuggestionsDto: UpdateSuggestionsDto,
  ) {
    return await this.service.update(id, updateSuggestionsDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
