import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { CarouselService } from 'angular4-carousel';

import { PostService } from '../shared/services/post.service';
import { Post } from '../shared/models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //private posts:Post[];
  constructor(private x: CarouselService) { }

  ngOnInit() {
    this.x.onImageLoad().subscribe(
      (src) => console.log(src + ' - loaded'),
      (src) => console.log(src + ' - error'),
      () => console.log('all imgs loaded')
    )
  }

  public imageSources: string[] = [
    'https://unsplash.it/1400/600?image=114',
    'https://unsplash.it/1400/600?image=62',
    'https://unsplash.it/1400/600?image=315',
    'https://unsplash.it/1400/600?image=622'
 ];
 
 public config: ICarouselConfig = {
   verifyBeforeLoad: true,
   log: false,
   animation: true,
   animationType: AnimationConfig.SLIDE,
   autoplay: true,
   autoplayDelay: 2000,
   stopAutoplayMinWidth: 768
 };

}
