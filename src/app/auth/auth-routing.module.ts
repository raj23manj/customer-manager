import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from '../auth/signin/signin.component';

const authRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '', component: SigninComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AuthRoutingModule {}
