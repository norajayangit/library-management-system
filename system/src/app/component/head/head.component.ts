import { Component } from '@angular/core';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  constructor() { }
  ngOnInit(): void { }
   myimage:string="C:\Users\nora.jayan\Desktop\library management system\system\src\assets\OIP.jpg"
   isLoggedIn: boolean = false;
   userRole: string = '';
}
