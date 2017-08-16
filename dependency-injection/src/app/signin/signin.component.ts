import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormControl, AbstractControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userService: UserService
  username: string
  form: FormGroup
  baseUrl: string

  constructor(fb: FormBuilder, userService: UserService, @Inject('API_URL') baseUrl: string) {
    this.userService = userService
    this.form = fb.group({
      username: ['', Validators.required]
    })
    this.baseUrl = baseUrl;
    console.log(this.baseUrl)
  }

  ngOnInit() {
  }
  onSubmit(value: any): void {
    console.log(value)
    this.userService.setUser(value)
    this.username = this.userService.getUser().username
    console.log(this.username)
  }
}
