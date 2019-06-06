import { Injectable } from '@angular/core';
import { VatCategory, VatCategoriesService } from './vat-categories.service';

export interface InvoiceLine {
  product: string;
  vatCategory: VatCategory;
  priceInclusiveVat: number;
}

export interface InvoiceLineComplete extends InvoiceLine {
  priceExclusiveVat: number;
}

export interface Invoice {
  invoiceLines: InvoiceLineComplete[];
  totalPriceInclusiveVat: number;
  totalPriceExclusiveVat: number;
  totalVat: number;
}

@Injectable({
  providedIn: 'root'
})
export class InvoiceCalculatorService {

  constructor(private vatCategoriesService: VatCategoriesService) { }

  public CalculatePriceExclusiveVat(priceInclusiveVat: number, vatPercentage: number): number {
    // tslint:disable-next-line:use-isnan
    if (priceInclusiveVat !== NaN && vatPercentage !== NaN) {
      return priceInclusiveVat / (1 + (vatPercentage / 100));
    } else {
      return NaN;
    }
  }

  public CalculateInvoice(invoiceLines: InvoiceLine[]): Invoice {
    return undefined;
  }
}
