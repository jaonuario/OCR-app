export class InvoiceHeaderDto {
    id: number;
   
    user_id: number; 
    
    company_address: string;
    invoice_number: number;
    issue_date: Date;
    due_date: Date;
    customer_name: string;
    customer_address: string;
    customer_id_number: string;
    itens_amount: number;
    total_value: number;
    subtotal: number;
    taxes: number;
    discounts: number;
    total_amount_due: number;
}