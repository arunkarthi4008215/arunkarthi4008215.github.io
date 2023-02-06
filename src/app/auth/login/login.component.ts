import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loginValidate:boolean = false;

  constructor(private router:Router,
    public formBuilder: FormBuilder,) {
    this.loginForm = this.formBuilder.group({
      User_Name: ['', Validators.compose([Validators.required])],
      Password: ['', Validators.compose([Validators.required])],
      RememberMe: [false],
    });
   }

  ngOnInit(): void {
  }
  onLogin(){
    if(this.loginForm.invalid){
      this.loginValidate = true;
      return false;
    }
    else{
      this.loginValidate = false;
        localStorage.setItem('remember-me-log', JSON.stringify(this.loginForm.value));
        const newloginData = this.loginForm.value;
        if(newloginData.User_Name == 'admin'){
          localStorage.setItem('User-Role','Admin')
          this.router.navigateByUrl("app/dashboard")
        }
        else if (newloginData.User_Name == 'faculty'){
          localStorage.setItem('User-Role','Faculty')
        }
        else if (newloginData.User_Name == 'employee'){
          localStorage.setItem('User-Role','Employee')
        }
      }
  }
}
