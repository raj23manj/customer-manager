import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { RestService } from './../../shared/rest.services'

@Injectable()
export class CustomerService {
  constructor(
              private restService: RestService
             ) {}

  addCustomer(customer: Customer) {
    return this.restService.putRequest(customer, 'customer.json');
  }
}
