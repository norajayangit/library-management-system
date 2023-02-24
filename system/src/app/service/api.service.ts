import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
constructor(private client : HttpClient) { }
  getAllProducts(){
    return this.client.get("http://localhost:4000/products")
  }
  getAllsignupUsers()  {
    return this.client.get("http://localhost:4000/signupUsers")
  }
  getAllissuedbook()  {
    return this.client.get("http://localhost:4000/bookissued")
  }
  getAllsignupStudent()  {
    return this.client.get("http://localhost:4000/signupStudent")
  }
  getAllsignupLibrarian()  {
    return this.client.get("http://localhost:4000/signupLibrarian")
  }
  getAllreturnbook()  {
    return this.client.get("http://localhost:4000/return")
  }
 }

