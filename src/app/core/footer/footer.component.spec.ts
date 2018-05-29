import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";


import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    // if not using webpack then use it
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
    el = fixture.debugElement.query(By.css('footer .footer-content'));
  });

  it('should have text Customer Manager', () => {
    expect(el.nativeElement.textContent.trim()).toBe('Customer Manager');
  });
});
