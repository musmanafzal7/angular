import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { SignupUserComponent } from './login-user/signup-user/signup-user.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserScreenComponent } from './user-screen/user-screen.component';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './user-screen/add-user/add-user.component';
import { HttpInterceptorService } from './http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    SignupUserComponent,
    UserScreenComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgbPaginationModule,
    FormsModule  
  ],
  providers: [ [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],],
  bootstrap: [AppComponent]
})
export class AppModule { }
