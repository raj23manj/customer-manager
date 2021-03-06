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

// App Services
import { AuthService } from './../auth/auth.service';
import { RestService } from './../shared/rest.services';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
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
    AuthService,
    RestService
  ]
})

export class CoreModule {

}
