import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit, OnChanges {
  @Input() productArray: any;
  @Input() searchInput: any;
  @Input() searchUserInput: any;
  constructor() {}
  resultantSearch: any[] = [];
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}
  purchaseID: any;
  getPurchaseID(event: any) {
    this.purchaseID = event;
    this.productArray = [...this.productArray];
  }
  getSearch() {
    if (this.searchInput) {
      this.resultantSearch = this.productArray.filter((item: any) => {
        return this.searchInput === item.name;
      });
    }
    console.log(this.resultantSearch);
  }
}
