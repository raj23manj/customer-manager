import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './customer/customer.component';
import { NgbdModalOptions } from './../shared/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    CustomersRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CustomersComponent,
    CustomerComponent,
    NgbdModalOptions,
    CustomerFormComponent
  ]
})
export class CustomersModule { }
