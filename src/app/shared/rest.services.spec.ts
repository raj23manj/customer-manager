
import {TestBed, async, fakeAsync, tick, ComponentFixture} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RestService } from './rest.services';

describe('Rest Service', () => {

  let restService: RestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestService],
      imports: [HttpClientTestingModule],
    });

    restService = TestBed.get(RestService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create an instance', () => {
    expect(restService).toBeDefined();
  });

  it('should send a post request', () => {
    let formObject = {  address: "test2",
                       city: "test2",
                       firstName: "test2",
                       lastName: "test2",
                       latitude: 23,
                       longitude: 23
                     };

    let responseObject = {name: "-LEMjuprlJJ_e-RF05T3"};

    restService.postRequest(formObject, 'customer.json').subscribe(res => {
      //expect(res).toEqual("-LEMjuprlJJ_e-RF05T3");
    });
    // https://medium.com/netscape/testing-with-the-angular-httpclient-api-648203820712
    // https://blog.angulartraining.com/how-to-write-unit-tests-for-angular-code-that-uses-the-httpclient-429fa782eb15
    const req = httpMock.expectOne(`${restService.API_URL}customer.json`);
    expect(req.request.method).toBe("POST");
    expect(req.request.url).toBe(`${restService.API_URL}customer.json`);
    req.flush(responseObject);

    httpMock.verify();
  });

})
