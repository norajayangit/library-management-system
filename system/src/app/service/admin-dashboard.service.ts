import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  public cartItemList : any =[]
  public bookReturn :any =[]
  public productList = new BehaviorSubject<any>([]);
  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeProductItem(product: any){
    this.cartItemList.map((a:any,index:any)=>{
    if(product.id=== a.id){
      this.cartItemList.splice(index,1);
      console.log("yes")
    }
    else{
      console.log("not")
    }
  })
  }
  removeAllProduct(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  getallcount(product:any){
    let count = 0;
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.filter(
          a.count=a.count-1);
       if(a.count==0){
        this.bookReturn.push(product);
       }   
    }
    })
    }
  getrecount(product:any){
    let count = 0;
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.filter(
          a.count=a.count+1);
          }
   })
    }
  }