import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { Observable, of } from 'rxjs';


import { CustomerFormComponent } from './customer-form.component';
import { CustomerService } from './../customer.service';

//https://kirjai.com/testing-angular-services-with-dependencies/
class CustomerServiceStub {
  addCustomer(formValue: any) {

  }
}

describe('CustomerFormComponent', () => {
  let component: CustomerFormComponent;
  let fixture: ComponentFixture<CustomerFormComponent>;
  let el: DebugElement;
  let customerService: CustomerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFormComponent ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        { provide: CustomerService, useClass: CustomerServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFormComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    customerService = TestBed.get(CustomerService);
    component.ngOnInit()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("form invalid when empty", () => {
    expect(component.customerForm.valid).toBeFalsy();
  })

  it("form invalid when empty", () => {
    // https://codecraft.tv/courses/angular/unit-testing/model-driven-forms/
    component.customerForm.controls['firstName'].setValue('test');
    component.customerForm.controls['lastName'].setValue('test');
    component.customerForm.controls['address'].setValue('test');
    component.customerForm.controls['city'].setValue('test');
    component.customerForm.controls['latitude'].setValue(23);
    component.customerForm.controls['longitude'].setValue(23);

    expect(component.customerForm.valid).toBeTruthy();
  });

  xit('should emit validity of form @output', fakeAsync(() => {
      let validity: string;

      // component.customerForm.controls['firstName'].setValue('test');
      // component.customerForm.statusChanges.subscribe((value) => validity = value)
      //component.formValidity.subscribe((value) => validity = value);

      let input = el.query(By.css('#firstName'));
      let inputElement = input.nativeElement;
      inputElement.value = 'demogmail.com';
      inputElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      tick();

    component.formValidity.subscribe((value) => validity = value);
      expect(validity).toBe('INVALID');
    }

  ));

  it("should test for @Input isEditing", () => {
    expect(component.isEditing).toBeFalsy();
  })

  it("should call the add to server api", () => {
    spyOn(customerService, 'addCustomer').and.returnValue( of("some text"));
    component.submitCustomer();
    expect(customerService.addCustomer).toHaveBeenCalled();
  });

});
