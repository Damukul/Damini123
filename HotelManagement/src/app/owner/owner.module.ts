import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { SharedModule } from '../shared/shared.module';
import { NewUserComponent } from './new-user/new-user.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';





@NgModule({
  declarations: [
    OwnerLoginComponent,
    NewUserComponent,
    OwnerloginComponent
],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OwnerModule { }
