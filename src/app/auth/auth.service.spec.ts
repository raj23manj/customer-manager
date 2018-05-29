
import {TestBed, async, fakeAsync, tick, ComponentFixture} from '@angular/core/testing';
import { AuthService } from './../auth/auth.service';
//import * as firebase from 'firebase';


describe('Auth Service Test', () => {

  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  it('should Sign Up user successfully', () => {
      spyOn(authService, 'signupUser').and.returnValue(Promise.resolve('{user: "test"}'));
      authService.signupUser('test@test.com', 'test123')
                 .then(res => {
                    expect(res).toBe('{user: "test"}')
                 });
    }
  );

  it('should Sign In user successfully', () => {
    spyOn(authService, 'signinUser').and.returnValue(Promise.resolve('asdasdsddd'));
    authService.signinUser('test@test.com', 'test123')
               .then(token => {
                  expect(token).toBe('asdasdsddd');
               });
  });

  it('should Not Sign Up user successfully', () => {
      spyOn(authService, 'signupUser').and.returnValue(Promise.reject('{error: "something wrong"}'));
      authService.signupUser('test@test.com', 'test123')
                 .catch(error => {
                    expect(error).toBe('{error: "something wrong"}');
                 });
    }
  );

  it('should Not Sign In user successfully', () => {
    spyOn(authService, 'signinUser').and.returnValue(Promise.reject('{error: "something wrong"}'));
    authService.signinUser('test@test.com', 'test123')
               .catch(error => {
                   expect(error).toBe('{error: "something wrong"}');
               });
  });


  it('should store token in localStorage', () => {

    let store = {'customer_manager_token': ''};
    let mockLocalStorage = {
      storeToken: (token: string) => {
        store['customer_manager_token'] = token;
      },
      getStoredToken: () => {
        return store['customer_manager_token'];
      }
    };

    spyOn(authService, 'storeToken').and.callFake(mockLocalStorage.storeToken);
    spyOn(authService, 'getStoredToken').and.callFake(mockLocalStorage.getStoredToken);

    authService.storeToken('asdadad');
    expect(authService.getStoredToken()).toBe('asdadad');
  });

});
