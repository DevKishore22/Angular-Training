import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonMethodService {
  constructor() {}
  //General
  allProducts: any;
  //admin
  searchedList: any;
  resultantSearchList: any;
  //user
  availableProductList: any;
  userSearchInput: any;
  userSearchList: any;
  userSearchRestantList: any;
  //emit
  productID: any = new EventEmitter();
  sendProdctsToservice(products: any) {
    this.allProducts = products;
    console.log(this.allProducts);
  }
  getSearch(input: any) {
    if (input) {
      this.searchedList = this.allProducts.filter((product: any) => {
        return input === product.name;
      });
    }
    if (this.searchedList.length > 0) {
      this.resultantSearchList = this.searchedList;
    }
  }

  getUserSearch(userSearch: any) {
    this.availableProductList = this.allProducts.filter((item: any) => {
      return item.availability === 'yes';
    });
    if (userSearch) {
      this.userSearchList = this.availableProductList.filter((product: any) => {
        return userSearch === product.name;
      });
    }
    if (this.userSearchList.length > 0) {
      this.userSearchRestantList = this.userSearchList;
    }
  }
  userWantToBuy(BuyId: any) {
    console.log(BuyId);
    this.productID.emit(BuyId);
  }
}
