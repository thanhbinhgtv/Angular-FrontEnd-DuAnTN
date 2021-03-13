import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [{
  path: '', component: AuthComponent,
  children: [
    {
      path: 'login', component: LoginComponent,
    },
    {
      path: 'singup', component: SingupComponent,
    },
    {
      path: 'forgot-password', component: ForgotPasswordComponent,
    },
    
    { path: '**', redirectTo: 'login' },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
