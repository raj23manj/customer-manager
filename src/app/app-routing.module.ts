import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/home/home.component';

// Guard Services
import { AuthGuard } from './auth/auth-guard.services';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule {

}
