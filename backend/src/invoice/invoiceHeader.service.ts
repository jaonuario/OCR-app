import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { InvoiceHeaderDto } from "./dto/invoiceHeader.dto";

Injectable()
export class InvoiceHeaderService {
    constructor(private prisma: PrismaService) {}

    async create(invoiceHeaderDto: InvoiceHeaderDto): Promise<InvoiceHeaderDto> {  
        const invoiceExist = await this.findOne(invoiceHeaderDto.id);
        if(invoiceExist) {
          throw new Error("Invoice already exists");
        }

        const invoice = await this.prisma.invoice.create({
          data: invoiceHeaderDto
        });

        return invoice;
    }

    async findOne(invoiceId: number): Promise<InvoiceHeaderDto>{
      return await this.prisma.invoice.findUnique({
        where: {
          id: invoiceId
        }
      })
    }

    async findAllOfUser(userId: number): Promise<InvoiceHeaderDto[]> {
      return await this.prisma.invoice.findMany({
        where: {
          user_id: userId
        }
      })
    }

    async update(invoiceId: number, invoiceDto: InvoiceHeaderDto): Promise<InvoiceHeaderDto> {
      const invoiceExist = await this.findOne(invoiceId)
      if(!invoiceExist) {
        throw new Error("Invoice does not exist");
      }

      return await this.prisma.invoice.update({
        data: invoiceDto,
        where: {
          id: invoiceId
        }
      });
    }

    async remove(invoiceId: number): Promise<InvoiceHeaderDto>{
      const invoiceExist = await this.findOne(invoiceId);
      
      if(!invoiceExist) {
        throw new Error("Invoice does not exist");
      }
        
      return await this.prisma.invoice.delete({
        where: {
          id: invoiceId
        }
      });
    } 
}