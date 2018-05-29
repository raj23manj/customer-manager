import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
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

  it('should have created Customers link', () => {
    el = fixture.debugElement.query(By.css('nav .collapse .customers'));
    expect(el.nativeElement.textContent.trim()).toBe('Customers');
  });

  it('should have created Orders link', () => {
    el = fixture.debugElement.query(By.css('nav .collapse .orders'));
    expect(el.nativeElement.textContent.trim()).toBe('Orders');
  });

  it('should have created About link', () => {
    el = fixture.debugElement.query(By.css('nav .collapse .about'));
    expect(el.nativeElement.textContent.trim()).toBe('About');
  });

});
