import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessfullLoginRoutingModule } from './successfull-login-routing.module';
import { SuccessfullLoginComComponent } from './successfull-login-com/successfull-login-com.component';


@NgModule({
  declarations: [
    SuccessfullLoginComComponent
  ],
  imports: [
    CommonModule,
    SuccessfullLoginRoutingModule
  ]
})
export class SuccessfullLoginModule { }
