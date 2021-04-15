import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AppService } from './app.service';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e-commerce';
  products: Array<any> = [];
  lastPage = 0;
  isAllProductsFetched = false;
  lastPageApiCall = 1;
  sortBy: string = 'id';

  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router) { }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.isAllProductsFetched && this.lastPage === this.lastPageApiCall) {
      this.lastPageApiCall = this.lastPage + 1;
      this.getProducts();
    }
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.queryParams.subscribe(param => {
      console.log(this.router.url)
      if (this.router.url !== '/') {
        this.sortBy = param.sortBy;
        this.getProducts();
      }
    });
  }

  getProducts() {
    Swal.fire({
      title: 'Loading...'
    });
    Swal.showLoading();
    this.appService.getSetProducts(this.lastPage + 1, 96, this.sortBy).subscribe((products: Array<any>) => {
      if (!!products.length) {
        ++this.lastPage;
        this.products = [...this.products, ...products];
        Swal.close();
      } else {
        this.isAllProductsFetched = true;
        Swal.close();
      }
    });
  }
}
