import { Component, OnInit, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AddUserModel } from 'src/app/login-user/models/user';
import { UserService } from '../../login-user/service/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  @Input() itemId!: number;
  @Input() popupType!: number;
  loginForm!: FormGroup;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    public userSvc: UserService
  ) {}

  ngOnInit(): void {
    this.resetForm();
    this.loginForm = this.formBuilder.group({
      firstName: [ null, Validators.required,],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: [''],
      contact: [''],
      streetAddress: [''],
      gender: [''],
      dob: ['', Validators.required],
      city: [''],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  openLg(content: any) {
    this.resetForm();
    this.modalService.open(content, { windowClass: 'myCustomModalClass' });
  }
  onEdit(EditContent: any) {
    debugger;
    if (this.itemId) {
      this.userSvc.getUserByID(this.itemId).subscribe((res: any) => {
        if (res) {
          // this._toastSvc.show(res.message, { classname: 'bg-success text-light', delay: 10000 });
          this.userSvc.addUserData = res?.user;
          this.modalService.open(EditContent, {
            windowClass: 'myCustomModalClass',
          });
        }
      });
    }
  }
  saveuserData() {
    debugger;
    this.userSvc.addUserData.active = true;
    this.userSvc.postUserData(this.userSvc.addUserData).subscribe(
      (response: any) => {
        if (response) {
          this.userSvc.getAllUsersList();
          // this._toaster.success('User Signup successfully');
        }
      }
      //  error => {

      // //   this._toaster.error(error.error?.message);

      //  }
    );
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      setTimeout(() => form.resetForm(), 0);
    }
    // this.popupType == 1 ? (this.userSvc.addUserData = new AddUserModel()) : '';
    this.userSvc.addUserData = {
      firstName :" ",
      lastName :" ",
      email :" ",
      password :" ",
      confirmPassword :" ",
      contact :" ",
      streetAddress :" ",
      gender :" ",
      dob :new Date,
      city :" ",
      active : true
    }


  }

  updateUser() {
    debugger;

    this.userSvc.updateUser(this.itemId, this.userSvc.addUserData).subscribe(
      (response: any) => {
        if (response) {
          // this._toastSvc.show(response.message, { classname: 'bg-success text-light', delay: 2000 });
          this.userSvc.getAllUsersList();
          this.modalService.dismissAll();
        }
      }
      // (error: any) => {
      //   this._toastSvc.show(error.error.errorMessage, { classname: 'bg-danger text-light', delay: 5000 });
      // }
    );
  }
}
