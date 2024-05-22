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
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ContactEntity } from './entities/contact.entity';

@Controller('contacts')
@ApiTags('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  @ApiCreatedResponse({ type: ContactEntity })
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }

  @Get()
  @ApiOkResponse({ type: ContactEntity, isArray: true })
  findAll() {
    return this.contactsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ContactEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.contactsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ContactEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    return this.contactsService.update(+id, updateContactDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ContactEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.contactsService.remove(+id);
  }
}
