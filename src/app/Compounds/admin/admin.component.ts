import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, OnChanges {
  @Input() adminProductList: any;
  @Input() productID: any;
  @Input() searchedList: any;
  constructor() {}
  itemCount: any;
  ngOnChanges(changes: SimpleChanges): void {
    this.adminProductList.map((item: any) => {
      if (item.id === this.productID) {
        this.itemCount = --item.quantity;
      }
    });
    if (this.searchedList.length > 0) {
      this.adminProductList = this.searchedList;
    }
  }
  ngOnInit(): void {}
}
