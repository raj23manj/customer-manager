import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { NgbdModalOptions } from './../../../shared/modal/modal.component';
import { CustomerService } from './../customer.service';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  customerForm: FormGroup;
  @Input() isEditing: boolean = false;
  @Output() formValidity = new EventEmitter<string>();
  @Input() childModal: NgbdModalOptions;


  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.initForm();
    this.customerForm.statusChanges.subscribe(
      (value) => {
        this.formValidity.emit(value)
      }
    );
  }

  submitCustomer() {
    this.customerService.addCustomer(this.customerForm.value)
                        .subscribe(response => {
                          console.log("response:", response);
                          this.customerForm.reset();
                          this.childModal.manualCloseModal();
                        });
  }

  private initForm() {
    let firstName = '',
        lastName = '',
        address = '',
        city = '',
        latitude = '',
        longitude = '';

    if(this.isEditing) {
      // if editing fill details here
    }

    this.customerForm = new FormGroup({
      'firstName': new FormControl(firstName, Validators.required),
      'lastName': new FormControl(lastName, Validators.required),
      'address': new FormControl(address, Validators.required),
      'city': new FormControl(city, Validators.required),
      'latitude': new FormControl(latitude, [Validators.required, Validators.pattern("^-?[0-9]\\d*(\\.\\d+)?$")]),
      'longitude': new FormControl(longitude, [Validators.required, Validators.pattern("^-?[0-9]\\d*(\\.\\d+)?$")])
    });
  }

}
