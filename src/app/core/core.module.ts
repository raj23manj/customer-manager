// Default Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//third party Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// App Related imports
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgbdModalOptions } from './../shared/modal/modal.component';

// App Services
import { AuthService } from './../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NgbdModalOptions
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    AuthService
  ]
})

export class CoreModule {

}
