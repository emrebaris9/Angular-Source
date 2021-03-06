import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';


@Injectable()
export class ProductService {
  path = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) { }

  getProducts(skip, limit): Observable<Product[]> {
    return this.http.get<Product[]>(this.path)
      .pipe();
  }
}
