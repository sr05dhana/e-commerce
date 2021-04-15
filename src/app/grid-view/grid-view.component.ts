import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  @Input() products: Array<any> = [];
  @Input() isAllProductsFetched: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getDate(date: string) {
    let dt = new Date(date);
    let oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    if (dt < oneWeekAgo) {
      return dt.setDate(dt.getDate() - 3);
    }
    return dt;
  }
}
