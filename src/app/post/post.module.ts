import { PostDetailComponent } from './post-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RouterModule } from '@angular/router';

var postRouting : ModuleWithProviders = RouterModule.forChild([{
  path:"post/:id",
  component: PostDetailComponent
}]);
@NgModule({
  imports: [
    CommonModule,
    postRouting
  ],
  declarations: [PostDetailComponent]
})
export class PostModule { }
