import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { CustomersService } from './customers.service';

import { NgbdModalOptions } from './../shared/modal/modal.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {

  @ViewChild(CustomerFormComponent) child: CustomerFormComponent;
  @ViewChild(NgbdModalOptions) childModal: NgbdModalOptions;
  btnDisable: boolean = true;
  private subscriptionCustomers: Subscription;
  customersList: any = [];

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.subscriptionCustomers = this.customersService.customersFetched
                                      .subscribe((customers: any) => {
                                        this.customersList = customers;
                                      });
    // fetch all customers intially
    this.customersService.fetchCustomers();
  }

  // https://stackoverflow.com/questions/38974896/call-child-component-method-from-parent-class-angular?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
  addNew() {
    this.child.submitCustomer();
  }

  isDisable() {
    return this.btnDisable;
  }

  setToDisable(value: string) {
    this.btnDisable = !(value === "VALID");
  }

  ngOnDestroy() {
    this.subscriptionCustomers.unsubscribe();
  }

}
