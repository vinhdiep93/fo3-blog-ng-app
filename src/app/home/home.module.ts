import { NgxSlideshowModule } from 'ngx-slideshow';
import { PostRecentComponent } from '../shared/post-helpers/post-recent.component';
import { PostListComponent } from '../shared/post-helpers/post-list.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


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
    homeRouting,
    SharedModule,
    
  ],
  declarations: [HomeComponent, PostRecentComponent]
})
export class HomeModule { }
