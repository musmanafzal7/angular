import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { UserService } from './service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(    private formBuilder: FormBuilder,
    public userSvc: UserService,
    public router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
       
        email: [''],
        password: [''],
      },
    )
  }
  saveuserloginData(){
    this.userSvc.postLoginData(this.userSvc.addLoginData).subscribe((response: any) => {
      if (response?.token) {
        console.log(response);
        this.router.navigate(['/app-user-screen']);
       localStorage.setItem ('token', response.token);
        // this._toaster.success('User Signup successfully');
      }
    },
    //  error => {
       
    // //   this._toaster.error(error.error?.message);

    //  }
    );
  }
}
