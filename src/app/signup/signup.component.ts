import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username:any;
  password:any;
  mobilenum:any;
  email:any;
  signedupuser:any;
  reqpwd:any;
  signupForm:FormGroup=new FormGroup({});
  constructor(private route:Router ,private fb:FormBuilder){
    this.signupForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      mobilenum:['',Validators.required],
    })
  }
  signupme(){
    this.username=this.signupForm.value.username;
    this.password=this.signupForm.value.password;
    this.mobilenum=this.signupForm.value.mobilenum;
    this.email=this.signupForm.value.email;
     if(this.signupForm.value.username=="admin" && this.signupForm.value.password=="admin123"){
      this.route.navigateByUrl('/login')
      this.signedupuser={
        username:this.signupForm.value.username,
        password:this.signupForm.value.password,
        mobilenum:this.signupForm.value.mobilenum,
        email:this.signupForm.value.email
      }
      localStorage.setItem('admin',JSON.stringify(this.signedupuser))
     }
     else{
      this.reqpwd=this.signupForm.value.username.slice(0,4);
      this.reqpwd=this.reqpwd+"123";
      if(this.reqpwd==this.signupForm.value.password){
        this.route.navigateByUrl('/login')
        this.signedupuser={
          username:this.signupForm.value.username,
          password:this.signupForm.value.password,
          email:this.signupForm.value.email,
          mobilenum:this.signupForm.value.mobilenum
        }
        localStorage.setItem('user',JSON.stringify(this.signedupuser))
      }
      else{
        this.route.navigateByUrl('')
      }
     }
    
    }
    acc(){
      this.route.navigateByUrl('/login')
    }
}
