import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { product } from './viewproducts';
import { wish } from './wish';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }
  wishlistitems:wish[]=[];
 
  addtowishlist(product:product){
    let ind=this.wishlistitems.findIndex(p=>p.id==product.id);
    if(ind==-1){
      this.wishlistitems.push(product);
      return "added to wishlist successfully"
    }
    else{
      return "already exists"
    }
  }
  getwishlistitems(){
    return of (this.wishlistitems);
  }
  getwishlistlength(){
    return this.wishlistitems.length;
  }
  remove(id:any){
    this.wishlistitems=this.wishlistitems.filter((pro)=>{pro.id!=id})

  }
}
