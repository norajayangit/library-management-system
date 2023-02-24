import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  productdata:any;
  public signupForm!: FormGroup;
user:any;
data:any;
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private routers:Router,private service:ApiService) { }
ngOnInit(): void {
this.signupForm=this.formBuilder.group({
    studentid:[''],
     fullname:[''],
     bookname:[''],
     date:['']
})
  }
issue()
  {
    this.http.get<any>( "http://localhost:4000/signupStudent")
  .subscribe((res)=>{
     const user= res.find((a:any)=>{
      return a.studentid === this.signupForm.value.studentid
    });
    if(user){
      this.http.post<any>("http://localhost:4000/bookissued",this.signupForm.value)
      .subscribe((res)=>{
        alert("sucess")
        this.routers.navigate(['booktaken']);  })
    }
    else{
      alert("not")
    } 
})
 }
return()
  {
    this.http.get<any>( "http://localhost:4000/signupStudent")
  .subscribe((res)=>{
     const user= res.find((a:any)=>{
      return a.studentid === this.signupForm.value.studentid
    });
    if(user){
      this.http.post<any>("http://localhost:4000/return",this.signupForm.value)
      .subscribe((res)=>{
        alert("sucess")
        this.routers.navigate(['return']);  })
    }
    else{
      alert("not")
    } 
})
 }
}
    


