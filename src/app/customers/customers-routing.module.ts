// Default Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from '../auth/auth-guard.services';;

// { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard]}

const customersRoutes: Routes = [
  { path: '', component: CustomersComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(customersRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class CustomersRoutingModule {}
