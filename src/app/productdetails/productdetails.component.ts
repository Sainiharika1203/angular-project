import { Component } from '@angular/core';
import { product } from '../services/viewproducts';
import { ActivatedRoute } from '@angular/router';
import { ViewproductsService } from '../services/viewproducts.service';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  constructor(private bs:ActivatedRoute,private service:ViewproductsService,private cart:CartService,private wish:WishlistService){}
  pid:any;
  product:any;
  addtocart(pro:product){
    this.cart.addtocart(pro);
    alert("product added to cart")
   
  }
  addtowishlist(pro:product){
    this.wish.addtowishlist(pro);
    alert("product added to wishlist")
    console.log(pro)
  }
  ngOnInit(){
    this.pid=this.bs.snapshot.paramMap.get('id');
    this.product=this.service.getproductbyid(this.pid);
  }
}
