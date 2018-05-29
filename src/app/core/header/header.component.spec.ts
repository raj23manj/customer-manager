import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './../../auth/auth.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent When Not Logged In', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let el: DebugElement;

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
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have created Customer Manager Navbar Title', () => {
    el = fixture.debugElement.query(By.css('nav .navbar-brand'));
    expect(el.nativeElement.textContent.trim()).toBe('Customer Manager');
  });

  xit('should have created Customers link', () => {
    el = fixture.debugElement.query(By.css('nav .collapse .customers'));
    expect(el.nativeElement.textContent.trim()).toBe('Customers');
  });

  xit('should have created Orders link', () => {
    el = fixture.debugElement.query(By.css('nav .collapse .orders'));
    expect(el.nativeElement.textContent.trim()).toBe('Orders');
  });

  it('should have created About link', () => {
    el = fixture.debugElement.query(By.css('nav .collapse .about'));
    expect(el.nativeElement.textContent.trim()).toBe('About');
  });

});
