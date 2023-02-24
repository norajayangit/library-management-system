import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';
@Component({
  selector: 'app-signupstudent',
  templateUrl: './signupstudent.component.html',
  styleUrls: ['./signupstudent.component.css']
})
export class SignupstudentComponent implements OnInit {
  public signupForm!: FormGroup;
constructor(private formBuilder:FormBuilder, private http:HttpClient, private routers:Router) { }
  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
    studentid:[''],
     fullname:[''],
     email:[''],
     password:[''],
     mobile:['']
 }) 
 }

sign(){
    this.http.post<any>("http://localhost:4000/signupStudent",this.signupForm.value)
    .subscribe((res)=>{
      alert("success");
      this.routers.navigate(['student']);
      this.http.post("http://localhost:4000/issue", this.signupForm.value);
    })
     }
    
 }


