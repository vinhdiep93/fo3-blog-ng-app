import { ControlMessagesComponent } from './control-messages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RouterModule } from '@angular/router';

import { CommentComponent } from './comment.component';
import { PostDetailComponent } from './post-detail.component';
import { SharedModule } from '../shared/shared.module';

var postRouting : ModuleWithProviders = RouterModule.forChild([{
  path:"post/:id",
  component: PostDetailComponent
}]);
@NgModule({
  imports: [
    CommonModule,
    postRouting,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [PostDetailComponent, CommentComponent, ControlMessagesComponent],
  providers: [DatePipe]
})
export class PostModule { }
