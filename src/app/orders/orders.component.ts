import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { order } from '../services/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  constructor(private myord:OrdersService){}
  mypro:order[]=[]
  ngOnInit(){
    this.myord.takeorders().subscribe((data)=>{
      this.mypro=data
      console.log(this.mypro)
    })
  }
}
