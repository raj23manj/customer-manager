import {TestBed, async, fakeAsync, tick, ComponentFixture} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { CustomersService } from './customers.service';
import { RestService } from './../shared/rest.services';


class RestServiceStub {
  getRequest(type: string, options = {}) {

  }
}


describe('CustomersService', () => {

  let customersService: CustomersService;
  let restService: RestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CustomersService,
        { provide: RestService, useClass: RestServiceStub }
      ]
    });

    customersService = TestBed.get(CustomersService);
    restService = TestBed.get(RestService);
  });

  it('should create an instance', () => {
    expect(customersService).toBeDefined();
  });

  it('should fetch customers', () => {
    let res = [{"-LE8TFvpy_HGvDwJGfRA": {  "address": "post",
                                          "city": "post", "firstName": "post",
                                          "lastName": "post",
                                          "latitude": "23",
                                          "longitude": "23"}}];
    spyOn(restService, 'getRequest').and.returnValue( of(res));

    customersService.fetchCustomers();
    expect(customersService.customers).toEqual(res);
  });

});
