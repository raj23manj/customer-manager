// Default Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from '../auth/auth-guard.services';;

// { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard]}

const customersRoutes: Routes = [
  { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard]}
];


@NgModule({
  imports: [
    RouterModule.forChild(customersRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class CustomersRoutingModule {}
