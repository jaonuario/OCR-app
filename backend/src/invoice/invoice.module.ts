import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import { InvoiceService } from './invoice.service';
import { InvoiceHeaderService } from './invoiceHeader.service';
import { ItemService } from './item.service';

@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService, InvoiceHeaderService, ItemService],
  exports: [InvoiceService]
})

export class InvoiceModule {}
