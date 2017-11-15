import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent,
    // resolve: {
    //   isAuthenticated: HomeAuthResolver
    // }
  }
]);
@NgModule({
  imports: [
    CommonModule,
    homeRouting
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
