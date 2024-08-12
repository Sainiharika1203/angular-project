import { Component } from '@angular/core';
import { AdminproductsService } from '../services/adminproducts.service';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrl: './manageproducts.component.css'
})
export class ManageproductsComponent {
  productlist:any;
  constructor(private service:AdminproductsService){}
    deleteme(pid:any){
  let res=this.service.deleteproduct(pid)
  alert(res);
    }
    editcontent(p:any){
      p.pflag=true;
    }
    updateme(p:any){
      p.pflag=false;
      let res=this.service.updateproduct(p);
    }
    ngOnInit(){
      this.service.getproducts().subscribe((res)=>{
        this.productlist=res;
      })
    }
  
}
