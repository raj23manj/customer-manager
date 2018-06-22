// Default Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from '../auth/auth-guard.services';
import { EditComponent } from './customer/edit/edit.component';

// { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard]}

const customersRoutes: Routes = [
  { path: '', component: CustomersComponent},
  { path:':id/edit', component: EditComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(customersRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class CustomersRoutingModule {}
