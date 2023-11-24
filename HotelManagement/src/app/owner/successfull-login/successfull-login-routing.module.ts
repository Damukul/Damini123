import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewHotelRegistrationCompComponent } from '../new-hotel-registration-comp/new-hotel-registration-comp.component';
import { MyHotelListCompComponent } from '../my-hotel-list-comp/my-hotel-list-comp.component';

const routes: Routes = [
  {path:"NewHotelRegistration",component:NewHotelRegistrationCompComponent},
  {path:"MyHotelList",component:MyHotelListCompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessfullLoginRoutingModule { }
