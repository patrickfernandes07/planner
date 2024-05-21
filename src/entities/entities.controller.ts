import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EntitiesService } from './entities.service';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EntityEntity } from './entities/entity.entity';

@Controller('entities')
@ApiTags('entities')
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Post()
  @ApiCreatedResponse({ type: EntityEntity })
  create(@Body() createEntityDto: CreateEntityDto) {
    return this.entitiesService.create(createEntityDto);
  }

  @Get()
  @ApiOkResponse({ type: EntityEntity, isArray: true })
  findAll() {
    return this.entitiesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: EntityEntity })
  findOne(@Param('id') id: string) {
    return this.entitiesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: EntityEntity })
  update(@Param('id') id: string, @Body() updateEntityDto: UpdateEntityDto) {
    return this.entitiesService.update(+id, updateEntityDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: EntityEntity })
  remove(@Param('id') id: string) {
    return this.entitiesService.remove(+id);
  }
}
