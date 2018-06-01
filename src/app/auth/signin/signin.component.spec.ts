import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AuthService } from './../auth.service';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      imports: [ FormsModule, RouterTestingModule ],
      providers: [ AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Invalid Input Test Cases', () => {
    it('should have invalid mail when page loads', fakeAsync(() => {
      // this won't work we need to trigger the changes, from component hence reactive forms are better
      // let input = el.query(By.css('#email'));
      // let inputElement = input.nativeElement;
      // expect(inputElement.classList.contains("invalid-border")).toBe(true);
      fixture.detectChanges();
      tick();
      let form = fixture.componentInstance.form.form;
      expect(form.get("email").valid).toBeFalsy;
    }));

    it('should have invalid password when page loads', fakeAsync(() => {
      fixture.detectChanges();
      tick();
      let form = fixture.componentInstance.form.form;
      expect(form.get("password").valid).toBeFalsy;
    }));

    it('should have invalid mail with worng email', fakeAsync(() => {
      fixture.detectChanges();
      tick();

      let input = el.query(By.css('#email'));
      let inputElement = input.nativeElement;
      inputElement.value = 'demogmail.com';
      inputElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      tick();
      let form = fixture.componentInstance.form.form;
      expect(form.get("email").valid).toBe(false);
    }));

    it('should have invalid password with wrong password', fakeAsync(() => {
      fixture.detectChanges();
      tick();

      let input = el.query(By.css('#password'));
      let inputElement = input.nativeElement;
      inputElement.value = '12345';
      inputElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      tick();
      let form = fixture.componentInstance.form.form;
      expect(form.get("password").valid).toBe(false);
    }));

    it('should have invalid form with wrong email and password', fakeAsync(() => {
      fixture.detectChanges();
      tick();

      let inputP = el.query(By.css('#password'));
      let inputElementP = inputP.nativeElement;
      inputElementP.value = '12345';
      let inputE = el.query(By.css('#email'));
      let inputElementE = inputE.nativeElement;
      inputElementE.value = 'demogmail.com';
      inputElementE.dispatchEvent(new Event('input'));
      inputElementP.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      tick();
      let form = fixture.componentInstance.form.form;
      expect(form.valid).toBe(false);
    }));

  });

  describe("Valid Input Test Cases", () => {

    it('should have valid mail', fakeAsync(() => {
      fixture.detectChanges();
      tick();

      let input = el.query(By.css('#email'));
      let inputElement = input.nativeElement;
      inputElement.value = 'demo@gmail.com';
      inputElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      tick();
      let form = fixture.componentInstance.form.form;
      expect(form.get("email").valid).toBe(true);
    }));

    it('should have valid password', fakeAsync(() => {
      fixture.detectChanges();
      tick();

      let input = el.query(By.css('#password'));
      let inputElement = input.nativeElement;
      inputElement.value = '123456';
      inputElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      tick();
      let form = fixture.componentInstance.form.form;
      expect(form.get("password").valid).toBe(true);
    }));

    it('should have valid form with correct email and password', fakeAsync(() => {
      fixture.detectChanges();
      tick();
      //https://kirjai.com/testing-angular-forms-with-dispatchevent/
      let inputP = el.query(By.css('#password'));
      let inputElementP = inputP.nativeElement;
      inputElementP.value = '123456';
      let inputE = el.query(By.css('#email'));
      let inputElementE = inputE.nativeElement;
      inputElementE.value = 'demo@gmail.com';
      inputElementE.dispatchEvent(new Event('input'));
      inputElementP.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      tick();
      let form = fixture.componentInstance.form.form;
      expect(form.valid).toBe(true);
    }));

    // it('should call the onSignIn method after vaild email and password', fakeAsync(() => {
    //   fixture.detectChanges();
    //   tick();
    //
    //   spyOn(component, 'onSignIn');
    //
    //   let inputP = el.query(By.css('#password'));
    //   let inputElementP = inputP.nativeElement;
    //   inputElementP.value = '123456';
    //
    //   let inputE = el.query(By.css('#email'));
    //   let inputElementE = inputE.nativeElement;
    //   inputElementE.value = 'demo@gmail.com';
    //
    //   inputElementE.dispatchEvent(new Event('input'));
    //   inputElementP.dispatchEvent(new Event('input'));
    //
    //   fixture.detectChanges();
    //   tick();
    //
    //   let inputBtn = el.query(By.css('.btn.btn-primary'));
    //   let inputElementBtn = inputBtn.nativeElement;
    //   inputElementBtn.dispatchEvent(new Event('click'));
    //
    //   fixture.detectChanges();
    //   tick();
    //
    //   expect(component.onSignIn).toHaveBeenCalled();
    //
    // }));

  });

});
