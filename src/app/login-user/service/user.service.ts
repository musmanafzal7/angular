import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddUserModel, GetUserList, LoginModel, SignupModel } from '../models/user';
import { Global } from '../../global';
import { UserScreenComponent } from '../../user-screen/user-screen.component';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  siteList_data!: any[];
  PG_siteList_data!: any[];
  page: number = 1;
  pageSize: number = 4;
  collectionSize: number = 5;
  row: GetUserList[]= []; 
  addSignupData= new SignupModel();
  signUp!: SignupModel;
  addLoginData = new LoginModel();
  login!:LoginModel;
  addUserData = new AddUserModel();
  user!: AddUserModel;
  constructor(private _http : HttpClient,
    
   ) { }

  
  postSignupData(addSignupData: SignupModel) : Observable<SignupModel>{
    return this._http.post<SignupModel>(Global.BASE_API_URL + "auth/signup", addSignupData);
  }
  postLoginData(addLoginData: LoginModel) : Observable<LoginModel>{
    return this._http.post<LoginModel>(Global.BASE_API_URL + "auth/login", addLoginData);
  }
  postUserData(addUserData: AddUserModel ) : Observable<AddUserModel>{
    return this._http.post<AddUserModel>(Global.BASE_API_URL + "users/add-user", addUserData);
  }
  getAllUsers() : Observable<any>{
    
    return this._http.get<any>(Global.BASE_API_URL + "users/");
  }
  getAllUsersList(){
    this.getAllUsers().subscribe((res : any) => {
      if(res){
        this.row = res?.users;
        this.row.sort((a,b) => b.id - a.id);
        this.pageChange();
      } 
    },
    // (error: any) => {
    //   // this._toastSvc.show(error.error.errorMessage, { classname: 'bg-danger text-light', delay: 5000 });
    // }
  );
  }
  DeleteUserByID(id: any) {
    return this._http.delete<number>(Global.BASE_API_URL + 'users/' + id);
  }
  updateUser(id:any, reqbody: AddUserModel) : Observable<any>{
   
    return this._http.put<any>(Global.BASE_API_URL + "users/"+id, reqbody);
  }
  getUserByID(itemId : number) : Observable<any>{
    return this._http.get<any>(Global.BASE_API_URL + "users/" + itemId);
  }
  pageChange() {
    this.collectionSize = this.row.length;
    this.PG_siteList_data= this.row.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
    this.PG_siteList_data;
  }

}
