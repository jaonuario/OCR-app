import { IsArray, IsObject, ValidateNested } from "class-validator";
import { InvoiceHeaderDto } from "./invoiceHeader.dto";
import { ItemDto } from "./item.dto";
import { Type } from "class-transformer";

export class InvoiceDto {
    @ValidateNested()
    header: InvoiceHeaderDto;
    @ValidateNested({each: true})
    @Type(() => ItemDto)
    itemList: ItemDto[];
}
