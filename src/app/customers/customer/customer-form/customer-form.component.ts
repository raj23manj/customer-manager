import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  customerForm: FormGroup;
  @Input() isEditing: boolean = false;
  @Output() formValidity = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.initForm();
    this.customerForm.statusChanges.subscribe(
      (value) => {
        this.formValidity.emit(value)
      }
    );
  }

  submitCustomer() {
    console.log(this.customerForm.value)
    this.customerForm.reset();
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
      'latitude': new FormControl(latitude, Validators.required),
      'longitude': new FormControl(longitude, Validators.required)
    });
  }

}
