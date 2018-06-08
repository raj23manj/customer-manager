import { RestService } from './../shared/rest.services';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CustomersService {
  customers: any[] = [];
  customersFetched = new Subject<any[]>();

  constructor(private restService: RestService) {

  }

  fetchCustomers() {
    this.restService.getRequest('customer.json')
                    .subscribe((customers: any) => {
                      this.customers = customers
                      this.customersFetched.next(customers);
                    });
  }
}
