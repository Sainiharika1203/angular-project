import { Injectable } from '@angular/core';
import { order } from './order';
import { adminorder } from './adminorders';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminordersService {
orderlist:adminorder[]=[
  {
    id: 7,
    title: "Black Forest Cake",
    description: "Decadent chocolate cake with layers of whipped cream and cherries.",
    category: "Dessert",
    price: 95.00,
    image: "https://images.saymedia-content.com/.image/t_share/MTc3NjY2MjA5MzM0OTYxNzcz/cake-black-forest-cake.jpg",
    username:"Niha",
    address:"vskp",
    payment:"COD",
    pflag:false
  },
  {
    id: 7,
    title: "Black Forest Cake",
    description: "Decadent chocolate cake with layers of whipped cream and cherries.",
    category: "Dessert",
    price: 95.00,
    image: "https://images.saymedia-content.com/.image/t_share/MTc3NjY2MjA5MzM0OTYxNzcz/cake-black-forest-cake.jpg",
    username:"kundana",
    address:"vskp",
    payment:"COD",
    pflag:false
  },
  {
    id: 40,
    title: "Elegant Fondant Cake",
    description: "A sophisticated cake covered in smooth fondant with intricate decorations and designs.",
    category: "Customized Cake",
    price: 1300.00,
    image: "https://www.yummycake.co.in/wp-content/uploads/2022/05/Elegant-White-Fondant-and-Pink-Roses-Cake.jpg",
    username:"Sravani Varma",
    address:"vskp",
    payment:"COD",
    pflag: false
  },
  {
    id: 2,
    title: "Red Velvet Cake",
    description: "Velvety red cake with a hint of cocoa and a cream cheese frosting.",
    category: "Dessert",
    price: 100.00,
    image: "https://i.pinimg.com/originals/28/42/a8/2842a8e616891e139df12005cc7249d1.jpg",
    username:"Dhanya",
    address:"Vskp",
    payment:"COD",
    pflag:false
  },
]

  constructor() { }
  getadminorders(){
    return of (this.orderlist);
  
  }
  addneworder(adminorder:adminorder){
    this.orderlist.push(adminorder);
  }
}
