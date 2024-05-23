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
  async create(@Body() createMovementDto: CreateMovementDto) {
    return new MovementEntity(
      await this.movementsService.create(createMovementDto),
    );
  }

  @Get()
  @ApiOkResponse({ type: MovementEntity, isArray: true })
  async findAll() {
    const movements = await this.movementsService.findAll();
    return movements.map((movement) => new MovementEntity(movement));
  }

  @Get(':id')
  @ApiOkResponse({ type: MovementEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new MovementEntity(await this.movementsService.findOne(id));
  }

  @Patch(':id')
  @ApiOkResponse({ type: MovementEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMovementDto: UpdateMovementDto,
  ) {
    return new MovementEntity(
      await this.movementsService.update(id, updateMovementDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: MovementEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new MovementEntity(await this.movementsService.remove(id));
  }
}
