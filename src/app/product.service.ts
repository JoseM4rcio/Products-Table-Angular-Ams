import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient ) {}

  getProducts(): Observable<Product[]> {
    let url = 'http://localhost:3000/products';
    return this.http.get<Product[]>(url);
  }
}