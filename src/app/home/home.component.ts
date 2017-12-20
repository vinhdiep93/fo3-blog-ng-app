import { Component, OnInit } from '@angular/core';

import { PostService } from '../shared/services/post.service';
import { Post } from '../shared/models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //private posts:Post[];
  //listOfItems: Array<any> = [];
  constructor() {
    // this.listOfItems = [
    //   { name: '../../assets/images/post1.jpg' },
    //   { name: '../../assets/images/post2.jpg' },
    //   { name: '../../assets/images/post3.jpg' },
    //   { name: '../../assets/images/post1.jpg' },
    //   { name: '../../assets/images/post2.jpg' },
    //   { name: '../../assets/images/post3.jpg' }
    // ];
   }
  
  ngOnInit() {
   
  }

 
}
