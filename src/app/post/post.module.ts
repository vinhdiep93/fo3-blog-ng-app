import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RouterModule } from '@angular/router';

import { CommentComponent } from './comment.component';
import { PostDetailComponent } from './post-detail.component';

var postRouting : ModuleWithProviders = RouterModule.forChild([{
  path:"post/:id",
  component: PostDetailComponent
}]);
@NgModule({
  imports: [
    CommonModule,
    postRouting
  ],
  declarations: [PostDetailComponent, CommentComponent]
})
export class PostModule { }
