import { Injectable } from '@angular/core';
import { product } from './viewproducts';
import { cart } from './cart';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartitems:cart[]=[];
  constructor() { }
  addtocart(product:product){
    let ind=this.cartitems.findIndex(p=>p.id==product.id);
    if(ind==-1){
      this.cartitems.push(product);
      return "added to cart successfully"
    }
    else{
      return "already exists"
    }
  }
  getcartitems(){
    return of (this.cartitems);
  }
  getcartlength(){
    return this.cartitems.length;
  }
  totalcart(){
    return this.cartitems.length;

  }
  totalpriceofcart(){
    const totalcartprice=this.cartitems.reduce((acc:any,ele:any)=>acc+ele.price,0);
    return totalcartprice;
  }
}
