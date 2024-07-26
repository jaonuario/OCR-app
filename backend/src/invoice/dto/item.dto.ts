import { IsNumber, IsNumberString, IsString } from "class-validator";

export class ItemDto {
    @IsNumberString()
    id: number;
    
    @IsNumber()
    invoice_id: number;

    @IsNumber()
    index: number;

    @IsString()
    name: string;

    @IsNumber()
    amount: number;

    @IsNumber()
    unit_price: number

}