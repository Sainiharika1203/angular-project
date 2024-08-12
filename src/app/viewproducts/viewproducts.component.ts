import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';
import { product } from '../services/viewproducts';
import { ViewproductsService } from '../services/viewproducts.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrl: './viewproducts.component.css'
})
export class ViewproductsComponent {
  productlist:product[]=[];res:any;
  constructor( private route:Router, private service:ViewproductsService,private cart:CartService,private wish:WishlistService){}
  ngOnInit(){
    this.service.getproduct().subscribe((data:any)=>{
      this.productlist=data;
    });
  }
  addtocart(addto:any){
   this.res= this.cart.addtocart(addto);  
    if(this.res=="already exists")
    {
      Swal.fire({
        title:'sorry',
        text:this.res,
        icon:'error'
      })
    }
    else{
      Swal.fire({
        title:'Good Job',
        text:this.res,
        icon:'success'
      })
    }

  }
  addwishlist(addto:any){
    this.wish.addtowishlist(addto)
    
    Swal.fire({
      title:'Good Job',
      text:'product added to wishlist',
      icon:'success'
    })
  }
  details(pid:any){
    this.route.navigateByUrl('/user/details/'+pid);
  }
}
