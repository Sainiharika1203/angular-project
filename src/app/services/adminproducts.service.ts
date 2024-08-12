import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { adminproduct } from './adminproduct';

@Injectable({
  providedIn: 'root'
})
export class AdminproductsService {

  constructor() { }
  productlist:adminproduct[]=[
    {
      id: 1,
      title: "Chocolate Cake",
      description: "Rich and moist chocolate cake with a creamy chocolate frosting.",
      category: "Dessert",
      price: 105.00,
      image: "http://wildflourskitchen.com/wp-content/uploads/2015/05/chocolate-bday-cake.jpg",
      pflag:false
    },
   
    {
      id: 2,
      title: "Red Velvet Cake",
      description: "Velvety red cake with a hint of cocoa and a cream cheese frosting.",
      category: "Dessert",
      price: 100.00,
      image: "https://i.pinimg.com/originals/28/42/a8/2842a8e616891e139df12005cc7249d1.jpg",
      pflag:false
    },
    {
      id: 3,
      title: "Carrot Cake",
      description: "Moist carrot cake with walnuts and a cream cheese frosting.",
      category: "Dessert",
      price: 90.00,
      image: "https://tse3.mm.bing.net/th?id=OIP.hAI9pb2-F3mCtCaTtw4sTwHaJa&pid=Api&P=0&h=180",
      pflag:false
    },
    {
      id: 4,
      title: "Cheesecake",
      description: "Creamy cheesecake with a graham cracker crust and a strawberry topping.",
      category: "Dessert",
      price: 95.00,
      image: "https://itsnotcomplicatedrecipes.com/wp-content/uploads/2021/06/Baked-Cheesecake-Feature.jpg",
      pflag:false
    },
    {
      id: 5,
      title: "Lemon Cake",
      description: "Zesty lemon cake with a tangy lemon glaze.",
      category: "Dessert",
      price: 100 ,
      image: "http://i1.wp.com/jennifercooks.com/wp-content/uploads/2016/05/best-lemon-cake-recipe-2.jpg",
      pflag:false
    },
    {
      id: 6,
      title: "Tiramisu Cake",
      description: "Delicate layers of coffee-soaked sponge cake with mascarpone cheese.",
      category: "Dessert",
      price: 120,
      image: "https://i.ytimg.com/vi/J-C3IHxQCZo/maxresdefault.jpg",
      pflag:false
    },
    {
      id: 7,
      title: "Black Forest Cake",
      description: "Decadent chocolate cake with layers of whipped cream and cherries.",
      category: "Dessert",
      price: 95.00,
      image: "https://images.saymedia-content.com/.image/t_share/MTc3NjY2MjA5MzM0OTYxNzcz/cake-black-forest-cake.jpg",
      pflag:false
    },
    {
      id: 8,
      title: "Funfetti Cake",
      description: "Colorful cake filled with sprinkles and topped with vanilla buttercream.",
      category: "Dessert",
      price: 70.00,
      image: "https://thedomesticrebel.com/wp-content/uploads/2017/05/DSC_0262A.jpg",
      pflag:false
    },
    {
      id: 9,
      title: "Pineapple Upside Down Cake",
      description: "Caramelized pineapple rings on a moist vanilla cake.",
      category: "Dessert",
      price: 65.00,
      image: "http://reciperhapsody.files.wordpress.com/2011/05/pineapple-upside-down-cakeb.jpg",
      pflag:false
    },
    {
      id: 10,
      title: "Coconut Cake",
      description: "Fluffy coconut cake with a rich coconut cream frosting.",
      category: "Dessert",
      price: 70.00,
      image: "https://juliassimplysouthern.com/wp-content/uploads/Coconut-Cake-Frosting-ultimate-old-fashioned-Julias-Simply-Southern.jpg",
      pflag:false
    },
    {
      id: 11,
      title: "Matcha Green Tea Cake",
      description: "Light and airy cake flavored with premium matcha green tea.",
      category: "Dessert",
      price: 150.00,
      image: "https://asianinspirations.com.au/wp-content/uploads/2019/04/R02164_Matcha_Green_Tea_Sponge_Cake-3.jpg",
      pflag:false
    },
    {
      id: 12,
      title: "chocolate symphony Cake",
      description: "chocolaty cake with dryfruits mixed ganache and chocolate spoon as the toppings.",
      category: "Dessert",
      price: 110.00,
      image: "https://i.pinimg.com/originals/c9/65/f8/c965f848dd97ac9720b91bf30e42ac11.jpg",
      pflag:false
    },
    
    {
      id: 13,
      title: "Vanilla Cake",
      description: "Classic vanilla cake with a buttery vanilla frosting.",
      category: "cake",
      price: 80.00,
      image: "https://lizbakescakes.files.wordpress.com/2013/01/imgp00801.jpg",
      pflag:false
    },
    { 
      id:14,
      title:"Walnut Brownie",
      description:"chocolaty fudgy brownie with crushed dryfruits",
      category:"Brownie",
      price:80.00,
      image:"https://img.cybercook.com.br/imagens/receitas/581/brownie-8.jpeg ",
      pflag:false
      },
      {
        id: 15,
        title: "Classic Chocolate Brownie",
        description: "Rich and dense chocolate brownie with a soft, gooey center",
        category: "Brownie",
        price: 70.00,
        image: "https://www.twinklepost.com/wp-content/uploads/2021/07/classic-chocolate-brownies-scaled.jpeg",
        pflag: false
     },
     {
      id: 16,
      title: "Chewy Blondie",
      description: "Vanilla-flavored blondie with white chocolate chunks and macadamia nuts",
      category: "Brownie",
      price: 75.00,
      image: "https://i.pinimg.com/originals/02/cb/c0/02cbc02f646412279c30eb1333a6cdec.jpg",
      pflag: false
   },
   {
    id: 17,
    title: "Nutella Swirl Brownie",
    description: "Decadent brownie swirled with Nutella for a rich hazelnut flavor",
    category: "Brownie",
    price: 85.00,
    image: "https://img-global.cpcdn.com/recipes/d4e773d12f306262/680x482cq70/nutella-swirl-fudge-brownie-recipe-main-photo.jpg",
    pflag: false
 },
 {
  id: 18,
  title: "Peanut Butter Brownie",
  description: "Chocolate brownie with a creamy peanut butter swirl",
  category: "Brownie",
  price: 80.00,
  image: "https://www.pillsburybaking.com/wp-content/uploads/2021/03/8010.jpeg",
  pflag: false
},
{
  id: 19,
  title: "Chocolate Cake Pop",
  description: "Rich chocolate cake pop covered in dark chocolate coating",
  category: "Cake Pop",
  price: 50.00,
  image: "https://assets-eu-01.kc-usercontent.com/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/5c8a19fd-5851-42ca-84a1-c3c9b47576c8/1-Chocolate-cake-pops-WEB.jpg?w=1920&q=85&auto=format&lossless=1",
  pflag: false
},
{
  id: 20,
  title: "Vanilla Confetti Cake Pop",
  description: "Vanilla cake pop with colorful confetti sprinkles",
  category: "Cake Pop",
  price: 55.00,
  image: "https://www.whattheforkfoodblog.com/wp-content/uploads/2021/06/Confetti-Cake-Pops-11-web-513x768.jpg",
  pflag: false
},
{
  id: 21,
  title: "Red Velvet Cake Pop",
  description: "Classic red velvet cake pop with cream cheese frosting",
  category: "Cake Pop",
  price: 60.00,
  image: "https://i0.wp.com/www.makingmotherhoodmatter.com/wp-content/uploads/2016/11/IMG_8307.jpg?resize=747%2C1024",
  pflag: false
},
{
  id: 22,
  title: "Strawberry Cake Pop",
  description: "Strawberry-flavored cake pop dipped in white chocolate",
  category: "Cake Pop",
  price: 55.00,
  image: "https://media1.popsugar-assets.com/files/thumbor/_TQ01TMEsXIyFIPknL1o7oG17DE/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/01/11/930/n/24155406/34f138b874074155_il_fullxfull.662702607_3c7j/i/Strawberry-Cake-Pops.jpg",
  pflag: false
},
{
  id: 23,
  title: "Cookies and Cream Cake Pop",
  description: "Oreo-infused cake pop with a white chocolate coating",
  category: "Cake Pop",
  price: 60.00,
  image: "https://sweetfreedombakeshop.com/wp-content/uploads/2017/11/Cookies-n-Cream-Cakepop.jpg",
  pflag: false
},
{
  id: 24,
  title: "Chocolate Chip Cookie",
  description: "Classic chocolate chip cookie with a crispy edge and chewy center",
  category: "Cookie",
  price: 40.00,
  image: "https://bakewithshivesh.com/wp-content/uploads/2020/05/151F814A-2749-4978-BA53-3AD2A962C933-scaled.jpg",
  pflag: false
},
{
  id: 25,
  title: "Oatmeal Raisin Cookie",
  description: "Hearty oatmeal cookie with sweet raisins and a hint of cinnamon",
  category: "Cookie",
  price: 45.00,
  image: "https://dearcrissy.com/wp-content/uploads/2017/09/oatmeal-cookies-2.jpg",
  pflag: false
},
{
  id: 26,
  title: "Peanut Butter Cookie",
  description: "Soft and chewy peanut butter cookie with a rich, nutty flavor",
  category: "Cookie",
  price: 70.00,
  image: "https://www.aspicyperspective.com/wp-content/uploads/2020/03/best-peanut-butter-cookies-recipe-22.jpg",
  pflag: false
},
{
  id: 27,
  title: "White Chocolate Macadamia Cookie",
  description: "Cookie loaded with white chocolate chunks and macadamia nuts",
  category: "Cookie",
  price: 75.00,
  image: "https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2018/02/White-Chocolate-Macadamia-Nut-Cookies-3.jpg?resize=1360%2C2040&ssl=1",
  pflag: false
},
{
  id: 28,
  title: "Blueberry Macaron",
  description: "Fruity blueberry macaron with a sweet blueberry filling",
  category: "Macron",
  price: 320.00,
  image: "https://i.pinimg.com/originals/4d/1c/31/4d1c3142951d994b41912b749379e345.jpg",
  pflag: false
},
{
  id: 29,
  title: "Pistachio Macaron",
  description: "Delicate pistachio macaron with a creamy pistachio filling",
  category: "Macron",
  price: 320.00,
  image: "https://www.sweetandsavorybyshinee.com/wp-content/uploads/2021/06/Pistachio-Macarons-3.jpg",
  pflag: false
},
{
  id: 30,
  title: "Raspberry Macaron",
  description: "Tangy raspberry macaron with a sweet raspberry jam filling",
  category: "Macron",
  price: 300.00,
  image: "https://i1.wp.com/www.janinehuldie.com/wp-content/uploads/2017/05/Raspberry-Macaroons1.jpg?resize=5184%2C3456",
  pflag: false
},
{
  id: 31,
  title: "Chocolate Macaron",
  description: "Rich chocolate macaron with a smooth chocolate ganache filling",
  category: "Macron",
  price: 300.00,
  image: "https://sugargeekshow.com/wp-content/uploads/2019/12/chocolate-macaron-recipe.jpg",
  pflag: false
},

  {
    id: 32,
    title: "Personalized Photo Cake",
    description: "A custom cake with your own photo printed on it, perfect for birthdays and celebrations.",
    category: "Customized Cake",
    price: 1200.00,
    image: "https://www.giftacrossindia.com/media/catalog/product/g/a/gaicak0250.jpg",
    pflag: false
  },
  {
    id: 33,
    title: "Custom Message Cake",
    description: "A cake that features a personalized message of your choice, ideal for any occasion.",
    category: "Customized Cake",
    price: 1250.00,
    image: "https://i.pinimg.com/originals/2f/c0/92/2fc092d9eb10a5d4199a67cf41ec5c0e.jpg",
    pflag: false
  },
  {
    id: 34,
    title: "Theme Cake",
    description: "A cake designed according to a specific theme, such as superheroes, princesses, or sports.",
    category: "Customized Cake",
    price: 1300.00,
    image: "https://www.thebestestever.com/images/2020/06/space-cake3.jpg",
    pflag: false
  },
  {
    id: 35,
    title: "Tiered Wedding Cake",
    description: "Elegant multi-tiered cake designed for weddings, customizable with various flavors and decorations.",
    category: "Customized Cake",
    price: 2500.00,
    image: "https://i.pinimg.com/736x/ec/53/c3/ec53c34a766d242f1e86f5695ac70af4--blush-wedding-cakes-blush-weddings.jpg",
    pflag: false
  },
  {
    id: 36,
    title: "Custom Shaped Cake",
    description: "A cake baked in a custom shape of your choice, such as a car, animal, or any other unique form.",
    category: "Customized Cake",
    price: 1400.00,
    image: "https://i.pinimg.com/originals/5c/11/54/5c11543df477f50c6febb42cd1ce514c.jpg",
    pflag: false
  },
  {
    id: 37,
    title: "Gourmet Flavor Cake",
    description: "A luxurious cake featuring gourmet flavors like champagne, truffle, or exotic fruits.",
    category: "Customized Cake",
    price: 1200.00,
    image: "https://i.redd.it/odt7wj1ak3571.jpg",
    pflag: false
  },
  {
    id: 38,
    title: "Cupcake Cake",
    description: "A creative cake made from cupcakes arranged in a specific design or shape, perfect for parties.",
    category: "Customized Cake",
    price: 1000.00,
    image: "https://kitchenfunwithmy3sons.com/wp-content/uploads/2016/04/The-Best-Pull-Apart-Cupcake-Cake-Ideas-for-Kids-Birthday-Parties-Weddings-Events-51-680x680.jpg",
    pflag: false
  },
  {
    id: 39,
    title: "Interactive Cake",
    description: "A fun cake that includes interactive elements like edible toys or puzzles.",
    category: "Customized Cake",
    price: 1300.00,
    image: "https://pic.cakesdecor.com/m/wrrczzlqxxmgs68teiod.jpg",
    pflag: false
  },
  {
    id: 40,
    title: "Elegant Fondant Cake",
    description: "A sophisticated cake covered in smooth fondant with intricate decorations and designs.",
    category: "Customized Cake",
    price: 1300.00,
    image: "https://www.yummycake.co.in/wp-content/uploads/2022/05/Elegant-White-Fondant-and-Pink-Roses-Cake.jpg",
    pflag: false
  }
];
getproducts(){
  return of(this.productlist);
}
totalproducts(){
  return this.productlist.length;

}
totalpriceofproducts(){
  const totalprice=this.productlist.reduce((acc:any,ele:any)=>acc+ele.price,0);
  return totalprice;
}
addproduct(product:adminproduct){
  this.productlist.push(product);
  return "product added successfully";
}
updateproduct(pro:adminproduct){
const ind=this.productlist.findIndex((ele:any)=>ele.id==pro.id);
  if(ind!=-1){
    this.productlist.splice(ind,1,pro);
    return"product updated successfully";
  }
  else{
    return"product not found";
  }
}
deleteproduct(id:any){
  const ind=this.productlist.findIndex((ele:any)=>ele.id==id);
  if(ind!=-1){
    this.productlist.splice(ind,1);
    return "product deleted successfully";
  }
  else{
    return"product not found";
  }
}
}
