import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PostListComponent } from './post-helpers/post-list.component';
import { HotNewsComponent } from './post-helpers/hot-news.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { CarouselModule } from 'angular4-carousel';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    FormsModule
  ],
  providers: [DatePipe],
  declarations: [PostListComponent, HotNewsComponent, SlideShowComponent, FilterPipe],
  exports:[PostListComponent,RouterModule, HotNewsComponent, SlideShowComponent]
})
export class SharedModule { }
