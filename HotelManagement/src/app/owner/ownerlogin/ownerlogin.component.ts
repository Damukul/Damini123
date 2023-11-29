import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownerlogin',
  templateUrl: './ownerlogin.component.html',
  styleUrls: ['./ownerlogin.component.scss']
})
export class OwnerloginComponent {
  login!:FormGroup;
  constructor(private fb:FormBuilder, private router:Router){
  }
  ngOnInit()
  {
    this.Lform()
  }
  Lform()
  {
  this.login=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.minLength(8)]
  })
  }
  show()
  {
    console.log(this.login.value);
  }

}
