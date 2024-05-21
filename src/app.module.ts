import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ExpensesModule } from './expenses/expenses.module';
import { IncomesModule } from './incomes/incomes.module';
import { MovementsModule } from './movements/movements.module';
import { EntitiesModule } from './entities/entities.module';
import { ContactsModule } from './contacts/contacts.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [PrismaModule, ExpensesModule, IncomesModule, MovementsModule, EntitiesModule, ContactsModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
