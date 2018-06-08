import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './customer/customer.component';
import { NgbdModalOptions } from './../shared/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { CustomerService } from './customer/customer.service';
import { CustomersService } from './customers.service';

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
  ],
  providers: [
    CustomerService,
    CustomersService
  ]
})
export class CustomersModule { }
