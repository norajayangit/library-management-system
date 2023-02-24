import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from 'src/app/service/admin-dashboard.service';
import { ApiService } from 'src/app/service/api.service';
@Component({
    selector: 'app-admindashboard',
    templateUrl: './admindashboard.component.html',
    styleUrls: ['./admindashboard.component.css']
  })
  export class AdmindashboardComponent implements OnInit {
 public products : any = [];
  productdata:any
  constructor(private adminService : AdminDashboardService,private service:ApiService) { }
ngOnInit(): void { 
    this.adminService.getProducts()//get products(book details) from service
    .subscribe(res=>{
      this.products = res;
      })
  }
  removeItem(item:any){
    this.adminService.removeProductItem(item);//remove book
  }
emptyProduct(){
  this.adminService.removeAllProduct();//remove all book
}

}

