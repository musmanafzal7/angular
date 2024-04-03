import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormBuilder } from '@angular/forms';

import { UserService } from '../service/user.service';
@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private modalService: NgbModal,
    private formBuilder: FormBuilder,
    public userSvc: UserService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
       
        firstName: [''],
        lastName: [''],
        email: [''],
        password: [''],
        confirmPassword: [''],
        contact: [''],
        streetAddress: [''],
        gender: [''],
        dob: [''],
        city: [''],
      },
    )
  }
  openLg(content: any) {
    this.modalService.open(content, { windowClass : "myCustomModalClass" });
  };
  saveusersignupData(){
    this.userSvc.postSignupData(this.userSvc.addSignupData).subscribe((response: any) => {
      if (response?.success) {
        this.modalService.dismissAll();
        console.log(response);
     
        // this._toaster.success('User Signup successfully');
      }
    },
    //  error => {
       
    // //   this._toaster.error(error.error?.message);

    //  }
    );
  }
}
