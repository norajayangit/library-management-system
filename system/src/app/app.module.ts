import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './component/head/head.component';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { StudentComponent } from './component/student/student.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './component/products/products.component';
import { AdmindashboardComponent } from './component/admindashboard/admindashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IssueComponent } from './component/issue/issue.component';
import { BooktakenComponent } from './component/booktaken/booktaken.component';
import { BooklistComponent } from './component/booklist/booklist.component';
import { LibrarianLoginComponent } from './component/librarian-login/librarian-login.component';
import { LibrarianmenuComponent } from './component/librarianmenu/librarianmenu.component';
import { SignupstudentComponent } from './component/signupstudent/signupstudent.component';
import { SignupLibrarianComponent } from './component/signup-librarian/signup-librarian.component';
import { ReturnComponent } from './component/return/return.component';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HomeComponent,
    AdminComponent,
    StudentComponent,
    SignupComponent,
    LoginComponent,
    ProductsComponent,
    AdmindashboardComponent,
    IssueComponent,
    BooktakenComponent,
    BooklistComponent,
    LibrarianLoginComponent,
    LibrarianmenuComponent,
    SignupstudentComponent,
    SignupLibrarianComponent,
    ReturnComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule, BrowserAnimationsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
