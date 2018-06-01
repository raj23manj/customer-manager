import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomersComponent } from './customers.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { NgbdModalOptions } from './../shared/modal/modal.component';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersComponent,
                      NgbdModalOptions,
                      CustomerFormComponent ],
      imports: [ NgbModule.forRoot(),
                 FormsModule,
                 ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  xit('should create', () => {

    let newCustomerEl = el.query(By.css('.new-customer'));
      newCustomerEl.triggerEventHandler('click', null);
    let modalTitle = el.query(By.css('.modal-title'));




    // component.child.customerForm.controls['firstName'].setValue('test');
    // component.child.customerForm.controls['lastName'].setValue('test');
    // component.child.customerForm.controls['address'].setValue('test');
    // component.child.customerForm.controls['city'].setValue('test');
    // component.child.customerForm.controls['latitude'].setValue('test');
    // component.child.customerForm.controls['longitude'].setValue('test');

    expect(modalTitle.nativeElement.textContent.trim()).toBe('Create New User');
    //expect(component).toBeTruthy();
  });
});
