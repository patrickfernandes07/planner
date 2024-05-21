import { Injectable } from '@nestjs/common';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EntitiesService {
  constructor(private prisma: PrismaService) {}

  create(createEntityDto: CreateEntityDto) {
    return this.prisma.entity.create({ data: createEntityDto });
  }

  findAll() {
    return this.prisma.entity.findMany();
  }

  findOne(id: number) {
    return this.prisma.entity.findUnique({ where: { id } });
  }

  update(id: number, updateEntityDto: UpdateEntityDto) {
    return this.prisma.entity.update({
      where: { id },
      data: updateEntityDto,
    });
  }

  remove(id: number) {
    return this.prisma.entity.delete({ where: { id } });
  }
}
