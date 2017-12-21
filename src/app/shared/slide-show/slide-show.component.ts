import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {
  public imageSources: string[] = [
    '../../assets/images/articles/960_1.jpg',
    '../../assets/images/articles/1943-3.jpg',
    '../../assets/images/articles/2520-1.jpg',
    '../../assets/images/articles/2520-2.jpg',
    '../../assets/images/articles/2520-3.jpg',
    '../../assets/images/articles/2520-4.jpg'
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
  constructor() { }

  ngOnInit() {
  }

}
