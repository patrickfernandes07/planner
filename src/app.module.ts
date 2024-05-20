import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [PrismaModule, ExpensesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
