import { Component } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { wish } from '../services/wish';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { ViewproductsService } from '../services/viewproducts.service';
import { product } from '../services/viewproducts';
import { OrdersService } from '../services/orders.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  wishlistitems:wish[]=[]
  orderproducts:any;
  loggedinuser:any;
  username:any;
  pid:any;ptitle:any;
  address:any;
msg:any;
myord1:any;uname:any;
payment:any;
pprice:any;
  constructor(private wish:WishlistService,private cart:CartService,private route:Router,private product:ViewproductsService,private order:OrdersService){}
  ngOnInit(){
    this.loggedinuser=localStorage.getItem('user')
    this.loggedinuser=JSON.parse(this.loggedinuser)
    this.username=this.loggedinuser.username
    this.wish.getwishlistitems().subscribe((additem:any)=>{
      this.wishlistitems=additem    
    })
  }
  addtocart(pro:product){
    this.cart.addtocart(pro);
    alert("product added to cart")  
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
     price:this.pprice
   }
   this.msg =this.order.getorders(this.myord1)

   console.log(this.myord1);
   
   Swal.fire({
     title:'Good Job',
     text:this.msg,
     icon:'success'
   })
 }
 removewishlist(id:any){
  this.wish.remove(id);
  alert("Product removed from wishlist")

 }
}
