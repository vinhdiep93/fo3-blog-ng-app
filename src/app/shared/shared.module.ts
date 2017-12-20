import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-helpers/post-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PostListComponent],
  exports:[PostListComponent,RouterModule]
})
export class SharedModule { }
