import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private client:HttpClient) { }

  getProducts(): Observable<any>{
    return this.client.get('https://fakestoreapi.com/products');
  }

}
