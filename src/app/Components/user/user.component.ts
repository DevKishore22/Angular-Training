import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonMethodService } from 'src/app/service/common-method-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  searchInput: any;
  constructor(private service: CommonMethodService) {}
  @Output() purchaseID: EventEmitter<any> = new EventEmitter<any>();
  availableProductList: any[] = [];
  ngOnChanges(): void {}
  ngOnInit(): void {
    this.availableProductList = this.service.allProducts.filter((item: any) => {
      return item.availability === 'yes';
    });
  }
  getSearch() {
    this.service.getUserSearch(this.searchInput);
    this.availableProductList = this.service.userSearchRestantList;
  }

  userWantToBuy(prdouctID: any) {
    this.service.userWantToBuy(prdouctID);
  }
}
