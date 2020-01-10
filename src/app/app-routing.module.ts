import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {SignUpComponent} from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'', component:HomepageComponent
  },
  {
    path:'signup', component:SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
