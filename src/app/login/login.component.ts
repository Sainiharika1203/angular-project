import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:any;
  password:any;
  checkuser:any;
reqpwd:any;
loggedinuser:any;

loginForm:FormGroup=new FormGroup({})
constructor(private route:Router ,private fb:FormBuilder){
  this.loginForm=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })

}
ngOnInit(){
  if(localStorage.getItem('admin')!=null){
    this.checkuser=localStorage.getItem('admin')
    this.checkuser=JSON.parse(this.checkuser)
  }
  else{
    if(localStorage.getItem('user')!=null){
      this.checkuser=localStorage.getItem('user')
      this.checkuser=JSON.parse(this.checkuser)
    }
  else{
    this.route.navigateByUrl('')
  }
  }
}
checklogin(){
  if(this.loginForm.value.username=="admin" && this.loginForm.value.password=="admin123"){
    this.route.navigateByUrl('/admin')   
  }
  else{
    this.reqpwd=this.loginForm.value.username.slice(0,4);
    this.reqpwd=this.reqpwd+"123";
    if(this.reqpwd==this.loginForm.value.password){
      this.route.navigateByUrl('/user')
    }
    else{
      alert("invalid details")
      
    }
  }
}

}
