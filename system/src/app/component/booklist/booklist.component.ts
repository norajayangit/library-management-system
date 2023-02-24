import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from 'src/app/service/admin-dashboard.service';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
 public products : any = [];
 public searchTerm : string='';
 public totalItem : number =0;
 public count : number=0;
productdata:any
  constructor(private adminService : AdminDashboardService,private service:ApiService) { }
  message=" Not Avaialble ";
  msg="Available";
  ngOnInit(): void { 
    this.adminService.getProducts()//to get all book
    .subscribe(res=>{
      this.products = res;
    })
   }
  increment()//to book count increment
  {
  this.count=this.count+1;
}
decrement()//to book count decrement
{
  this.count=this.count-1;
}
getcount(item:any){
  this.adminService.getallcount(item);//to getcount
}
getrecount(item:any){
  this.adminService.getrecount(item);//to getrecount
}
}
