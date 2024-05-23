import { Injectable } from '@nestjs/common';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MovementsService {
  constructor(private prisma: PrismaService) {}

  create(createMovementDto: CreateMovementDto) {
    return this.prisma.movement.create({ data: createMovementDto });
  }

  findAll() {
    return this.prisma.movement.findMany();
  }

  findOne(id: number) {
    return this.prisma.movement.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  update(id: number, updateMovementDto: UpdateMovementDto) {
    return this.prisma.movement.update({
      where: { id },
      data: updateMovementDto,
    });
  }

  remove(id: number) {
    return this.prisma.movement.delete({ where: { id } });
  }
}
