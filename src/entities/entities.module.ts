import { Module } from '@nestjs/common';
import { EntitiesService } from './entities.service';
import { EntitiesController } from './entities.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EntitiesController],
  providers: [EntitiesService, PrismaService],
})
export class EntitiesModule {}
