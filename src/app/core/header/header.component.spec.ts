import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './../../auth/auth.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent When Not Logged In', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let el: DebugElement;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule ],
      providers: [ AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Before Sign In', () => {

    beforeEach(() => {
      spyOn(authService, 'getStoredToken').and.returnValue({token: ''});
      component.isAuthenticated();
      fixture.detectChanges();
    });

    it('should have created Customer Manager Navbar Title', () => {
      el = fixture.debugElement.query(By.css('nav .navbar-brand'));
      expect(el.nativeElement.textContent.trim()).toBe('Customer Manager');
    });

    it('should have created About link', () => {
      el = fixture.debugElement.query(By.css('nav .collapse .about'));
      expect(el.nativeElement.textContent.trim()).toBe('About');
    });

    it('should have Sign Up! link', () => {
      el = fixture.debugElement.query(By.css('nav .collapse .auth-links .sign-up'));
      expect(el.nativeElement.textContent.trim()).toBe('Sign Up!');
    });

    it('should have Sign In link', () => {
      el = fixture.debugElement.query(By.css('nav .collapse .auth-links .sign-in'));
      expect(el.nativeElement.textContent.trim()).toBe('Sign In');
    });
  });

  describe('After User Logged In', () => {
    beforeEach(() => {
      spyOn(authService, 'getStoredToken').and.returnValue({token: 'jbsaldkjfgsaidjfgilasdjgfis'});
      component.isAuthenticated();
      fixture.detectChanges();
    });

    it('should have created Customers link', () => {
      // https://medium.com/@armno/til-mocking-localstorage-and-sessionstorage-in-angular-unit-tests-a765abdc9d87
      el = fixture.debugElement.query(By.css('nav .collapse .customers'));
      expect(el.nativeElement.textContent.trim()).toBe('Customers');
    });

    it('should have created Orders link', () => {
      el = fixture.debugElement.query(By.css('nav .collapse .orders'));
      expect(el.nativeElement.textContent.trim()).toBe('Orders');
    });

    it('should have Sign Out link', () => {
      el = fixture.debugElement.query(By.css('nav div.float-right .sign-out'));
      expect(el.nativeElement.textContent.trim()).toBe('Sign Out');
    });

    it('should have Sign Out link', () => {
      el = fixture.debugElement.query(By.css('nav .collapse .auth-links .sign-out'));
      expect(el.nativeElement.textContent.trim()).toBe('Sign Out');
    });
  });

});
