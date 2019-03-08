import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './services/product';
import { LazyLoadEvent } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private productService: ProductService) { }
  products: Product[];
  datasource: Product[];
  totalRecords: number;

  loadComments(event) {
    console.log(event)
    return this.productService.getProducts(event.first,event.rows)
      .subscribe( products => {
         this.datasource = products;
         this.totalRecords = this.datasource.length;
         this.products = this.datasource.slice(0,10);
        }
      );
  }
  loadProductsLazy(event: LazyLoadEvent) {
    setTimeout(() => {
        if(this.datasource) {
            this.products = this.datasource.slice(event.first, (event.first + event.rows));
        }
    }, 250);
}
}
