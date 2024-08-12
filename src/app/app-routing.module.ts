import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrypageComponent } from './entrypage/entrypage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminproductsComponent } from './adminproducts/adminproducts.component';
import { AdminaddproductsComponent } from './adminaddproducts/adminaddproducts.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { OrdersComponent } from './orders/orders.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsercartComponent } from './usercart/usercart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { AboutComponent } from './about/about.component';
import { AdminordersComponent } from './adminorders/adminorders.component';

const routes: Routes = [
  {path:'',component:EntrypageComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'home',component:AdminhomeComponent},
      {path:'adminproducts',component:AdminproductsComponent},
      {path:'addproduct',component:AdminaddproductsComponent},
      {path:'manageproducts',component:ManageproductsComponent},
      {path:'adminorders',component:AdminordersComponent}
    ]
  },
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'userhome',component:UserhomeComponent},
      {path:'about',component:AboutComponent},
      {path:'viewproducts',component:ViewproductsComponent},
      {path:'cart',component:UsercartComponent},
      {path:'wishlist',component:WishlistComponent},
      {path:'orders',component:OrdersComponent},
      {path:'details/:id',component:ProductdetailsComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
