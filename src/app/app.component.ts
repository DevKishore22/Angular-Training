import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'Product_management';
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
    this.productsList = [...this.productsList];
  }
}
