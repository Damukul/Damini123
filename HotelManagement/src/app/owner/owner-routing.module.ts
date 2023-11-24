import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { SuccessfullLoginComComponent } from './successfull-login/successfull-login-com/successfull-login-com.component';
import { SuccessfullLoginModule } from './successfull-login/successfull-login.module';
import { NewHotelRegistrationCompComponent } from './new-hotel-registration-comp/new-hotel-registration-comp.component';
import { MyHotelListCompComponent } from './my-hotel-list-comp/my-hotel-list-comp.component';

const routes: Routes = [
{path:"",component:OwnerLoginComponent},
{path:"NewUser", component:NewUserComponent},
{path:"NewHotelRegistration", component:NewHotelRegistrationCompComponent},
{path:"MyHotelList",component:MyHotelListCompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
