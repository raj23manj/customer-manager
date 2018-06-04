
import {TestBed, async, fakeAsync, tick, ComponentFixture} from '@angular/core/testing';
import { RestService } from './rest.services';
// import { AuthService } from './../auth/auth.service';

describe('Rest Service', () => {

  let restService: RestService;

  beforeEach(() => {
     TestBed.configureTestingModule({
       providers: [RestService]
     });

     restService = TestBed.get(RestService);
   });

   xit('should create an instance', () => {
     expect(restService).toBeDefined();
   });

})
