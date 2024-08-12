import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminproductsService } from '../services/adminproducts.service';

@Component({
  selector: 'app-adminaddproducts',
  templateUrl: './adminaddproducts.component.html',
  styleUrl: './adminaddproducts.component.css'
})
export class AdminaddproductsComponent {
  productForm:FormGroup=new FormGroup({})
  constructor(private route:Router ,private fb:FormBuilder, private service:AdminproductsService){
  this.productForm=this.fb.group({
    id:['',Validators.required],
    title:['',Validators.required],
    price:['',Validators.required],
    description:['',Validators.required],
    category:['',Validators.required],
    image:['',Validators.required],
    
  
  })
  }
  addme(){
    let res=this.service.addproduct(this.productForm.value)
   alert("product added successfully")
    
  }
}
