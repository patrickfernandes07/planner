import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IncomesService } from './incomes.service';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { IncomeEntity } from './entities/income.entity';

@Controller('incomes')
@ApiTags('incomes')
export class IncomesController {
  constructor(private readonly incomesService: IncomesService) {}

  @Post()
  @ApiCreatedResponse({ type: IncomeEntity })
  create(@Body() createIncomeDto: CreateIncomeDto) {
    return this.incomesService.create(createIncomeDto);
  }

  @Get()
  @ApiOkResponse({ type: IncomeEntity, isArray: true })
  findAll() {
    return this.incomesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: IncomeEntity })
  findOne(@Param('id') id: string) {
    return this.incomesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: IncomeEntity })
  update(@Param('id') id: string, @Body() updateIncomeDto: UpdateIncomeDto) {
    return this.incomesService.update(+id, updateIncomeDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: IncomeEntity })
  remove(@Param('id') id: string) {
    return this.incomesService.remove(+id);
  }
}
