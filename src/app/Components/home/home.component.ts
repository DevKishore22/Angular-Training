import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonMethodService } from 'src/app/service/common-method-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges {
  constructor(private service: CommonMethodService) {}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}
  productName: string = '';
  productType: string = '';
  productPrice: string = '';
  productQuantity: number = 1;
  productAvailability: string = '';
  productDate: any;
  productDesc: any;
  productsList: any[] = [];

  addProductsDetails() {
    this.productsList.push({
      id: this.productsList.length,
      name: this.productName,
      type: this.productType,
      price: this.productPrice,
      availability: this.productAvailability,
      quantity: this.productQuantity,
      date: this.productDate,
      descripiton: this.productDesc,
    });
    this.service.sendProdctsToservice(this.productsList);
  }
}
