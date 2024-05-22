import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { MovementsService } from './movements.service';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MovementEntity } from './entities/movement.entity';

@Controller('movements')
@ApiTags('movements')
export class MovementsController {
  constructor(private readonly movementsService: MovementsService) {}

  @Post()
  @ApiCreatedResponse({ type: MovementEntity })
  create(@Body() createMovementDto: CreateMovementDto) {
    return this.movementsService.create(createMovementDto);
  }

  @Get()
  @ApiOkResponse({ type: MovementEntity, isArray: true })
  findAll() {
    return this.movementsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: MovementEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.movementsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: MovementEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMovementDto: UpdateMovementDto,
  ) {
    return this.movementsService.update(id, updateMovementDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: MovementEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.movementsService.remove(id);
  }
}
