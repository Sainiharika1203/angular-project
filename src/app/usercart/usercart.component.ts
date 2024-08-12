import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { OrdersService } from '../services/orders.service';
import { ViewproductsService } from '../services/viewproducts.service';
import { cart } from '../services/cart';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrl: './usercart.component.css'
})
export class UsercartComponent {
  cartitems:cart[]=[]
  orderproducts:any;
  loggedinuser:any;
  username:any;
  pid:any;ptitle:any;
  address:any;
msg:any;
myord1:any;uname:any;
payment:any;
pprice:any;
cardNumber: any;
  expiryDate: any;
  cvv: any;
  upiId: any;


  constructor(private cart:CartService,private user:OrdersService){}
  ngOnInit(){
    this.loggedinuser=localStorage.getItem('user')
    this.loggedinuser=JSON.parse(this.loggedinuser)
    this.username=this.loggedinuser.username
    this.cart.getcartitems().subscribe((additem:any)=>{
      this.cartitems=additem
     
    })
  } 
  ordernow(p:any){
    
       this.pid=p.id,
        this.ptitle=p.title,
        this.uname=this.username,
        this.pprice=p.price

      }
    placeorder(){

      this.myord1={
        id:this.pid,
        title:this.ptitle,
        username:this.uname,
        address:this.address,
        payment:this.payment,
        price:this.pprice,
        ...this.payment === 'Credit Card' || this.payment=== 'Debit Card' ? { cardNumber: this.cardNumber, expiryDate: this.expiryDate, cvv: this.cvv } : {},
        ...this.payment === 'UPI' ? { upiId: this.upiId } : {}
      }
      this.msg =this.user.getorders(this.myord1)

      console.log(this.myord1);
      
      Swal.fire({
        title:'Good Job',
        text:this.msg,
        icon:'success'
      })
    }
}
