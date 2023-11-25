import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCComponent } from './login-c/login-c.component';

const routes: Routes = [
  {path:"Login", component:LoginCComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
