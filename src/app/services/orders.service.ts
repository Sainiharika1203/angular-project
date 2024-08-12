import { Injectable } from '@angular/core';
import { order } from './order';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }
  myorders:order[]=[]
    getorders(pro:any){
        this.myorders.push(pro);
        return "Your Order is Placed!!"
    }
    takeorders(){
      return of(this.myorders)
    }
}
