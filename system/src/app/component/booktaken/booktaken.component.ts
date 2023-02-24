import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from 'src/app/service/admin-dashboard.service';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-booktaken',
  templateUrl: './booktaken.component.html',
  styleUrls: ['./booktaken.component.css']
})
export class BooktakenComponent implements OnInit {
  productdata:any
  pos="center";
  constructor(private service:ApiService,private adminService : AdminDashboardService) { }
ngOnInit() {
    this.service.getAllissuedbook().subscribe((data)=>{
      this .productdata=data;
      this.productdata.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
 }

