import { Component,ChangeDetectorRef } from '@angular/core';
import { CommonsLibService } from 'projects/commons-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(public commonsLibService: CommonsLibService){
    this.commonsLibService.channelPayment$.subscribe(value=>{
      console.log(value)
    })
  }

  ngOnInit():void{
    console.log(this.commonsLibService.channelPayment$)
    this.commonsLibService.channelPayment$.subscribe(value=>{
      console.log(value)
    })
  }
  
}
