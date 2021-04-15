import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sortBy: string = 'id';
  constructor() { }

  ngOnInit(): void {
  }

  sortProducts(sortBy: string) {
    if (this.sortBy !== sortBy) {
      window.location.href = './home?sortBy=' + sortBy;
    }
  }
}
