import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {authGuard} from './services/guard/auth.guard';
import {ActivateAccountComponent} from './pages/activate-account/activate-account.component';
import {SigninComponent} from "./pages/signin/signin.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ListusersComponent} from "./pages/listusers/listusers.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'activate-account',
    component: ActivateAccountComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: ListusersComponent
  },
  {
    path: 'books',
    loadChildren: () => import('./modules/book/book.module').then(m => m.BookModule),
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
