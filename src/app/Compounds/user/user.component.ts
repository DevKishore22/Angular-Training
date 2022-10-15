import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnChanges {
  @Input() userProductList: any;
  @Input() serachInput: any;
  @Output() purchaseID: EventEmitter<any> = new EventEmitter<any>();
  availableProductList: any[] = [];
  constructor() {}
  ngOnChanges(): void {
    this.availableProductList = this.userProductList.filter((item: any) => {
      return item.availability === 'yes';
    });
  }
  ngOnInit(): void {}
  userWantToBuy(prdouctID: any) {
    this.purchaseID.emit(prdouctID);
  }
}
