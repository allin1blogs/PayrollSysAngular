import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './admin/addemployee/addemployee.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'admin/login', component: LoginComponent },
{ path: 'admin/adminpanel/addemployee', component: AddemployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const rountingComponent = [
  LoginComponent,
  AddemployeeComponent
]
