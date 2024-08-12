import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  checkuser:any;
  imglink="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg";
  constructor(private route:Router){}
  logout(){
    localStorage.removeItem('admin')
    this.route.navigateByUrl('')
  }
  ngOnInit(){
    if(localStorage.getItem('admin')!=null){
      this.checkuser=localStorage.getItem('admin')
      this.checkuser=JSON.parse(this.checkuser)
    }
    else{
      this.route.navigateByUrl('')
    }
  }
}
