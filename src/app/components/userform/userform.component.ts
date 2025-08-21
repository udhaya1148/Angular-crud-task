import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserformService } from '../service/userform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],

})
export class UserformComponent {
  userForm = new FormGroup({

    username: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phonenumber: new FormControl(null, [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
    alternatenumber: new FormControl(false),
    alternatenumbervalue: new FormControl(null, [Validators.minLength(10),Validators.maxLength(10)]),
    country: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required)

  })

  constructor(private userService:UserformService, private router: Router){}

  submit(){
    if (this.userForm.valid){
      this.userService.addUser(this.userForm.value);
      this.router.navigate(['/users'])
      console.log(this.userForm.value)
    }
  }

  back(){
      this.router.navigate(['/users'])
    }
}
