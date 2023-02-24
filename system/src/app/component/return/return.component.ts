// import { Component } from '@angular/core';

// export class  {

// }
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-booklist',
//   templateUrl: './booklist.component.html',
//   styleUrls: ['./booklist.component.css']
// })
// export class BooklistComponent {

// }
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admindashboard',
//   templateUrl: './admindashboard.component.html',
//   styleUrls: ['./admindashboard.component.css']
// })
// export class AdmindashboardComponent {

// }
// import { Component, OnInit } from '@angular/core';
// import { AdminDashboardService } from 'src/app/service/admin-dashboard.service';
// import { ApiService } from 'src/app/service/api.service';

// @Component({
//   selector: 'app-return',
//   templateUrl: './return.component.html',
//   styleUrls: ['./return.component.css']
// })

// export class ReturnComponent implements OnInit {
//  public products : any = [];
//  public grandTotal : number = 0;
//  productdata:any
//   constructor(private cartService : AdminDashboardService,private service:ApiService) { }

//   ngOnInit(): void { 
//     this.cartService.getProducts()
//     .subscribe(res=>{
//       this.products = res;
//       this.grandTotal = this.cartService.getTotalPrice();
//     })
//     this.service.getAllProducts().subscribe((data)=>{
//       this .productdata=data;
//       this.productdata.forEach((a:any)=>{
//         Object.assign(a,{quantity:1,total:a.price});
//       });
//     })
//   }
// removeItem(item:any){
//   this.cartService.removeCartItem(item);
// }
// emptycart(){
//   this.cartService.removeAllCart();
// }

// }
import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from 'src/app/service/admin-dashboard.service';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
}) 
export class ReturnComponent implements OnInit {
  productdata:any
  pos="center";
  constructor(private service:ApiService,private cartService : AdminDashboardService) { }
ngOnInit() {
    this.service.getAllreturnbook().subscribe((data)=>{
      this .productdata=data;
      this.productdata.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  removeItem(item:any){
    this.cartService.removeProductItem(item);
  }
}




