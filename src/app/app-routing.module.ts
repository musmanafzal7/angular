import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './login-user/login-user.component';
import { SignupUserComponent } from './login-user/signup-user/signup-user.component';
import { UserScreenComponent } from './user-screen/user-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-login-user', pathMatch: 'full' },
  {
    path: 'app-login-user',
    component: LoginUserComponent,
  },
  {
    path: 'app-signup-user',
    component: SignupUserComponent,
  },
  {
    path: 'app-user-screen',
    component: UserScreenComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
