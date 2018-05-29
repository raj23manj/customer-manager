// Default Angular Modules
import { NgModule } from '@angular/core';

// App Related imports
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

// App Services
import { AuthService } from './../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule
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
