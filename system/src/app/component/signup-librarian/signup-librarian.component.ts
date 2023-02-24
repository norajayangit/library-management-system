import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-librarian',
  templateUrl: './signup-librarian.component.html',
  styleUrls: ['./signup-librarian.component.css']
})
export class SignupLibrarianComponent implements OnInit {
  public signupForm!: FormGroup;
constructor(private formBuilder:FormBuilder, private http:HttpClient, private routers:Router) { }
  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
     fullname:[''],
     email:[''],
     password:[''],
     mobile:['']
 }) 
 }

sign(){
    this.http.post<any>("http://localhost:4000/signupLibrarian",this.signupForm.value)
    .subscribe((res)=>{
      alert("success");
      this.routers.navigate(['librarianlogin']);
    })
     }
 }


