import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './customer/customer.component';
import { NgbdModalOptions } from './../shared/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    CustomersRoutingModule
  ],
  declarations: [
    CustomersComponent,
    CustomerComponent,
    NgbdModalOptions,
  ]
})
export class CustomersModule { }
