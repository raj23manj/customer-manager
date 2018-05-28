// Default Angular Modules
import { NgModule } from '@angular/core';

// App Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

// App Services

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [

  ]
})

export class CoreModule {

}
