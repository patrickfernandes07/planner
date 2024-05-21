import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ExpenseEntity } from './entities/expense.entity';

@Controller('expenses')
@ApiTags('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  @ApiCreatedResponse({ type: ExpenseEntity })
  create(@Body() createExpenseDto: CreateExpenseDto) {
    return this.expensesService.create(createExpenseDto);
  }

  @Get()
  @ApiOkResponse({ type: ExpenseEntity, isArray: true })
  findAll() {
    return this.expensesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ExpenseEntity })
  findOne(@Param('id') id: string) {
    return this.expensesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ExpenseEntity })
  update(@Param('id') id: string, @Body() updateExpenseDto: UpdateExpenseDto) {
    return this.expensesService.update(+id, updateExpenseDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ExpenseEntity })
  remove(@Param('id') id: string) {
    return this.expensesService.remove(+id);
  }
}
