import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrypage',
  templateUrl: './entrypage.component.html',
  styleUrl: './entrypage.component.css'
})
export class EntrypageComponent {
 
  constructor(private route:Router){
    }
  addpage(){
      this.route.navigateByUrl('/signup')
  }
}
