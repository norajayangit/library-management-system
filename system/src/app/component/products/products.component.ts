// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css']
// })
// export class ProductsComponent {

// }
import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from 'src/app/service/admin-dashboard.service';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productdata:any
  pos="center";
  constructor(private service:ApiService,private cartService : AdminDashboardService) { }
ngOnInit() {
    this.service.getAllProducts().subscribe((data)=>{
      this .productdata=data;
      this.productdata.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  addtocart(item: any){
     this.cartService.addtoCart(item);
  }
}

