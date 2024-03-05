import { Injectable, OnInit } from '@angular/core';
import { ICommonProduct } from './models/product.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonsLibService implements OnInit {

  private _products:ICommonProduct[] = [];

  private _channelSource= new BehaviorSubject<number>(1);
  channelPayment$= this._channelSource.asObservable();

  ngOnInit(): void {
    this._channelSource.subscribe(value=>{
      console.log(value + 'c')
    })

    this.channelPayment$.subscribe(value=>{
      console.log(value + 'hola hola hola')
    })
  }
  
  sendData(product: ICommonProduct): void {
    this._products.push(product);
    localStorage.setItem('products',JSON.stringify(this._products));
    console.log(this._products.length)
    this._channelSource.next(this._products.length);
  }
}
