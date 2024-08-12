import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from '../services/wishlist.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  checkuser:any;
  cartlen:any;
  wishlen:any;
  imglink:any;
  
  constructor(private route:Router,private cart:CartService,private wish:WishlistService){}
  logout(){
    localStorage.removeItem('admin')
    this.route.navigateByUrl('')
  }
  ngDoCheck(){
    this.cartlen=this.cart.getcartlength();
   
    this.wishlen=this.wish.getwishlistlength();
   
  }
  

  ngOnInit(){

    if(localStorage.getItem('user')!=null){
      this.checkuser=localStorage.getItem('user')
      this.checkuser=JSON.parse(this.checkuser)
    }
    else{
      this.route.navigateByUrl('')
    }
    if(this.checkuser.username.endsWith('i')||this.checkuser.username.endsWith('a')){
      this.imglink="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"
    }
    else{
      this.imglink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoVYK9gVqDWkfv3blKuxWEO0t9JrH6XSjxg&s"
    }
  }
}
