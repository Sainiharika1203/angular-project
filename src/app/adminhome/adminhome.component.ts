import { Component } from '@angular/core';
import { AdminproductsService } from '../services/adminproducts.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent {
  totalproductlen:any;
  totalprice:any;
  constructor(private service:AdminproductsService){}
  ngOnInit(){
    this.totalproductlen=this.service.totalproducts();
    this.totalprice=this.service.totalpriceofproducts();
  }
}
