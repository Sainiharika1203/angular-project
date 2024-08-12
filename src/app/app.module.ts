import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrypageComponent } from './entrypage/entrypage.component';
import { AdminproductsComponent } from './adminproducts/adminproducts.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminaddproductsComponent } from './adminaddproducts/adminaddproducts.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsercartComponent } from './usercart/usercart.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { AdminordersComponent } from './adminorders/adminorders.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrypageComponent,
    AdminproductsComponent,
    AdmindashboardComponent,
    AdminhomeComponent,
    ManageproductsComponent,
    OrdersComponent,
    AdminaddproductsComponent,
    UserdashboardComponent,
    UserhomeComponent,
    UsercartComponent,
    ViewproductsComponent,
    ProductdetailsComponent,
    WishlistComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    AdminordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
