import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
  })
export class StudentComponent implements OnInit {
  productdata:any
  pos="center";
  constructor(private service:ApiService) { }

  ngOnInit() {
    this.service.getAllsignupStudent().subscribe((data)=>{
      this .productdata=data;
      this.productdata.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  
}

