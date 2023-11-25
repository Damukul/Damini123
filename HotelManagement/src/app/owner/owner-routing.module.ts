import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { NewUserComponent } from './new-user/new-user.component';




const routes: Routes = [
{path:"",component:OwnerLoginComponent},
{path:"NewUser", component:NewUserComponent},
{path:"Login",loadChildren:()=>import('./login/login.module').then(mod=>mod.LoginModule)}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
