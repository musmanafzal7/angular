import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../login-user/service/user.service';


@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {
  
  deletedItem : any;
  productList: any= new Array;
  constructor( public userSvc: UserService ,
    private modalService: NgbModal ) { }

  ngOnInit(): void {
this.userSvc.getAllUsersList();


  }
  openLg(content: any) {
    this.modalService.open(content, { windowClass: "myCustomModalClass" });
    };
  deleteuser(id:any){
    this.deletedItem = id;
  }
  confirmDelete(){
    debugger
    this.userSvc.DeleteUserByID(this.deletedItem).subscribe((response: any) => {
      if (response) {
    //  this.showNotification("success" , response.message)
      //  this.rows = response;
      //  this.temp = [...response];
     
      for (let i = 0 ; i < this.productList.length; i++){
        if(this.productList[i].id == this.deletedItem){
          this.productList.splice(i,1);
        }
      }
      this.userSvc.getAllUsersList();
      
      
       }
     },
    //  (error: any) => {
    //    this._toastrSVC.show(error.error.errorMessage, { classname: 'bg-danger text-light', delay: 2000 });
    //  }
   );
  }

  

}
