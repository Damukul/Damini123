import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { SharedModule } from '../shared/shared.module';
import { NewUserComponent } from './new-user/new-user.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { SuccessfullLoginModule } from './successfull-login/successfull-login.module';

@NgModule({
  declarations: [
    OwnerLoginComponent,
    NewUserComponent,
 
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
    MatIconModule,
    MatRadioModule 
  ]
})
export class OwnerModule { }
