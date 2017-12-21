import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-helpers/post-list.component';
import { HotNewsComponent } from './post-helpers/hot-news.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { CarouselModule } from 'angular4-carousel';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ],
  declarations: [PostListComponent, HotNewsComponent, SlideShowComponent],
  exports:[PostListComponent,RouterModule, HotNewsComponent, SlideShowComponent]
})
export class SharedModule { }
