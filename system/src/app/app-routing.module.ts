import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { StudentComponent } from './component/student/student.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { ProductsComponent } from './component/products/products.component';
import { AdmindashboardComponent } from './component/admindashboard/admindashboard.component';
import { IssueComponent } from './component/issue/issue.component';
import { BooktakenComponent } from './component/booktaken/booktaken.component';
import { BooklistComponent } from './component/booklist/booklist.component';
import { LibrarianLoginComponent } from './component/librarian-login/librarian-login.component';
import { LibrarianmenuComponent } from './component/librarianmenu/librarianmenu.component';
import { SignupstudentComponent } from './component/signupstudent/signupstudent.component';
import { SignupLibrarianComponent } from './component/signup-librarian/signup-librarian.component';
import { ReturnComponent } from './component/return/return.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home', component: HomeComponent},
  {path:'admin', component: AdminComponent},
  {path:'student', component: StudentComponent},
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:'products',component:ProductsComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'issue',component:IssueComponent},
  {path:'booktaken',component:BooktakenComponent},
  {path:'booklist',component:BooklistComponent},
  {path:'librarianlogin',component:LibrarianLoginComponent},
  {path:'librarianmenu',component:LibrarianmenuComponent},
  {path:'signupstudent',component:SignupstudentComponent},
  {path:'signuplibrarian',component:SignupLibrarianComponent},
  {path:'return',component:ReturnComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
