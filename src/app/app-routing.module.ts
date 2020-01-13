import { PwdComponent } from './pwd/pwd.component';
import { SignUpComponent_2 } from './sign-up/sign-up_2.component';
import { LogInComponent } from './log-in/log-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'', component:HomepageComponent
  },
  {
    path:'signup', component:SignUpComponent
  },
  {
    path:'signup2', component: SignUpComponent_2
  },
  {
    path:'login', component:LogInComponent
  },
  {
    path:'password', component:PwdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
