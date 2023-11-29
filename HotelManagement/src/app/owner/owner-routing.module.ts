import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginCComponent } from './login/login-c/login-c.component';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';




const routes: Routes = [
{path:"",component:OwnerLoginComponent},
{path:"NewUser", component:NewUserComponent},
{path:"ownerlogin",component:OwnerloginComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
