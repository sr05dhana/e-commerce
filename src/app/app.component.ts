import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e-commerce';
  products = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getAllProduct().subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }
}
