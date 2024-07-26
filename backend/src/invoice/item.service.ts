import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { ItemDto } from "./dto/item.dto";

Injectable()
export class ItemService {
    constructor(private prisma: PrismaService) {}

    async create(invoiceId: number, createItemDto: ItemDto): Promise <ItemDto> {  
        const itemExist = await this.findOne(createItemDto.id);
        if(itemExist) {
          throw new Error("Item already exists");
        }

        createItemDto.invoice_id = invoiceId;
        const item = await this.prisma.item.create({
          data: createItemDto
        }); 

        return item;
    }

    async findOne(itemId: number): Promise <ItemDto>{
      return await this.prisma.item.findUnique({
        where: {
          id: itemId
        }
      })
    }

    async findAllOfInvoicer(invoiceId: number): Promise <ItemDto[]>{
      return await this.prisma.item.findMany({
        where: {
          invoice_id: invoiceId
        }
      })
    }

    async update(itemId: number, ItemDto: ItemDto): Promise <ItemDto>{
      const itemExist = await this.findOne(itemId)
      if(!itemExist) {
        throw new Error("Item does not exist");
      }

      return await this.prisma.item.update({
        data: ItemDto,
        where: {
          id: itemId
        }
      });
    }

    async remove(itemId: number): Promise<ItemDto>{
      const itemExist = await this.findOne(itemId);
      
      if(!itemExist) {
        throw new Error("Item does not exist");
      }
        
      return await this.prisma.item.delete({
        where: {
          id: itemId
        }
      });
    }  
}