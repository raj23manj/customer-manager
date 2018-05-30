import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  constructor(private authService: AuthService,
              private router: Router
             ) { }

  ngOnInit() {
  }

  onSignIn() {
    this.authService.signinUser(this.form.value.email, this.form.value.password)
                    .then((token: string) => {
                      this.authService.storeToken(token);
                      this.router.navigate(['/home']);
                    })
                    .catch(error => {
                      console.log('error', error)
                    });
  }

}
