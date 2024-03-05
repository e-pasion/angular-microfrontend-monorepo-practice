import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CommonsLibService } from 'projects/commons-lib/src/public-api';

@Component({
  standalone:true,
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [CommonModule],
})
export class ProductCardComponent {
  @Input() card:any;
  showCard:boolean=false;
  constructor(private _commonsLibService: CommonsLibService){}

  clickCard():void{
    this._commonsLibService.sendData({
      name:this.card.title,
      price:this.card.price
    })
  }

}
