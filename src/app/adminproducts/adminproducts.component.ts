import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { adminproduct } from '../services/adminproduct';
import { AdminproductsService } from '../services/adminproducts.service';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrl: './adminproducts.component.css'
})
export class AdminproductsComponent {
product:any;
productlist:adminproduct[]=[];
constructor(private service:AdminproductsService,private route:Router){}
ngOnInit(){
  this.service.getproducts().subscribe((data:any)=>{
    this.productlist=data;
  })
}
}