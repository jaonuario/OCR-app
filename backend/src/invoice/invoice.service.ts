import { Injectable } from "@nestjs/common";
import { InvoiceHeaderService } from "./invoiceHeader.service";
import { InvoiceDto } from "./dto/invoice.dto";
import { ItemDto } from "./dto/item.dto";
import { ItemService } from "./item.service";
import { InvoiceHeaderDto } from "./dto/invoiceHeader.dto";


@Injectable()
export class InvoiceService {
    constructor(
        private invoiceHeaderService: InvoiceHeaderService,
        private itemService: ItemService
    ) {}

    create(createInvoiceDto: InvoiceDto) {
        const newHeader = this.invoiceHeaderService.create( createInvoiceDto.header );

        newHeader
        .then(
            (header) => {
                const itemList = createInvoiceDto.itemList;   

                for(let i = 0; i < itemList.length; i++) {
                    this.addItem(header.id, itemList[i])
                }
            }
        )
        .catch()

        return;
    }
    
    async findOne(invoiceId: number): Promise<InvoiceHeaderDto> {
        return await this.invoiceHeaderService.findOne(invoiceId)
    }

    async updateHeader(invoiceId: number, UpadateInvoiceDto: InvoiceDto) {
        
    }

    delete(invoiceId: number) {

    }

    addItem(invoiceId: number, itemDto: ItemDto) {

    }

    removeItem(invoiceId: number, index: number) {

    }
    
    updateItem(invoiceId: number, index: number, itemDto: ItemDto) {

    } 
}