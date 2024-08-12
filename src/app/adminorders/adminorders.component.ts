import { Component } from '@angular/core';
import { AdminordersService } from '../services/adminorders.service';
import { adminorder } from '../services/adminorders';

@Component({
  selector: 'app-adminorders',
  templateUrl: './adminorders.component.html',
  styleUrl: './adminorders.component.css'
})
export class AdminordersComponent {
  constructor(private order:AdminordersService){}
    allorders:adminorder[]=[]
    ngOnInit(){
      this.order.getadminorders().subscribe((res:any)=>{
        this.allorders=res;
      })
    }


}
