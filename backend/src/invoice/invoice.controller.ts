import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceDto } from './dto/invoice.dto';
import { ItemDto } from './dto/item.dto';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  create(@Body() CreateInvoiceDto: InvoiceDto): InvoiceDto {
    return;
  }

  @Get('id:')
  findOne(@Param('id') invoiceId: number): InvoiceDto {
    return;
  }

  @Patch('id:')
  updateHeader(@Param('id') invoiceId: number, @Body() UpadateInvoiceDto: InvoiceDto): InvoiceDto {
    return;
  }
  
  @Delete('id:')
  delete(invoiceId: number): boolean {
    return;
  }

  @Post(':id')
  addItem(@Param('id') invoiceID: number, @Body() itemDto: ItemDto) : ItemDto {
    return;
  }

  //TODO: Create a controller for Item
  @Delete()
  removeItem(invoiceId: number, index: number) : boolean {
    return;
  }

  @Patch()
  updateItem(itemId: number, ItemDto: ItemDto): ItemDto {
    return;
  }
}
