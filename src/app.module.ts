import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MovementsModule } from './movements/movements.module';
import { EntitiesModule } from './entities/entities.module';
import { ContactsModule } from './contacts/contacts.module';
import { AccountsModule } from './accounts/accounts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PrismaModule,
    MovementsModule,
    EntitiesModule,
    ContactsModule,
    AccountsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
