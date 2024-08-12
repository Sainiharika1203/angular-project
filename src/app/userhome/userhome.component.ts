import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent {
  totalcartlen:any;
  totalcartprice:any;
  testimonials: any[] = [
    { text: 'The cakes are delicious and the service is fantastic!', author: 'Alla Kundana Priya' },
    { text: 'I love the cookies! Will definitely order again.', author: 'Sravani Varma' },
    { text: 'Best Brownies I have ever tasted!', author: 'B.Dhanya Sri Veni ' },
    { text: 'The chocolate cake is a must-try!', author: 'M.Abhiroop' },
    { text: 'Every item is baked to perfection. Highly recommended!', author: 'K.Raju' },
    { text: 'The customer service is top-notch, and the baked goods are heavenly.', author: 'K LalithKumar' },
    { text: 'I always order from SS HomeBakes for every special occasion. They never disappoint!', author: 'L.Varshini' },
    { text: 'The pastries are always fresh and incredibly tasty.', author: 'K.Divya Deekshitha' },
    { text: 'A delightful experience from ordering to the last bite. Kudos to SS HomeBakes!', author: 'A.Pavan Kumar' }
  ];
  constructor(private service:CartService){}
  ngOnInit(){
    this.totalcartlen=this.service.totalcart();
    this.totalcartprice=this.service.totalpriceofcart();
  }
}
