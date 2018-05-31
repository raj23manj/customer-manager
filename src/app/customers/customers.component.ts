import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  @ViewChild(CustomerFormComponent) child: CustomerFormComponent;
  btnDisable: boolean = true;

  constructor() { }

  ngOnInit() {
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

}
