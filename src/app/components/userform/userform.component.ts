import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserformService } from '../service/userform.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],

})
export class UserformComponent implements OnInit {
  userForm = new FormGroup({
    id: new FormControl(null),
    username: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phonenumber: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    alternatenumber: new FormControl(false),
    alternatenumbervalue: new FormControl(null, [Validators.minLength(10), Validators.maxLength(10)]),
    country: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required)

  })

  constructor(private route: ActivatedRoute, private userService: UserformService, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        const user = this.userService.getUsers().find(u => u.id == params['id']);
        if (user) {
          this.userForm.patchValue(user);
        }
      }
    });
  }
  submit() {
    if (this.userForm.valid) {
      if (this.userForm.value.id) {
        this.userService.editUser(this.userForm.value);
      }
      else {
        this.userService.addUser(this.userForm.value);
      }
      this.router.navigate(['/users'])
      console.log(this.userForm.value)
    }
  }

  back() {
    this.router.navigate(['/users'])
  }
}
