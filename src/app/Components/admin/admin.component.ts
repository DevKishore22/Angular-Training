import {
  Component,
  OnChanges,
  Input,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { CommonMethodService } from 'src/app/service/common-method-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnChanges, OnInit {
  @Input() searchInput: any;
  adminProductList: any[] = [];
  searchedList: any[] = [];
  constructor(private service: CommonMethodService) {}

  ngOnInit(): void {
    this.adminProductList = this.service.allProducts;
    this.service.productID.subscribe((id: any) => {
      this.adminProductList.map((item: any) => {
        if (item.id === id) {
          this.itemCount = --item.quantity;
        }
      });
    });
  }
  itemCount: any;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('cehfsd');
  }
  getSearch() {
    this.service.getSearch(this.searchInput);
    this.adminProductList = this.service.resultantSearchList;
    // console.log(this.searchInput);
    // this.adminProductList= this.adminProductList.filter((product) => {
    //   return this.searchInput === product.name;
    // }); if (this.searchedList.length > 0) {
    // this.adminProductList = this.searchedList;
    // }
  }
}
