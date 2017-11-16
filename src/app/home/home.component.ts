import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { Post } from '../shared/models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private posts:Post[];
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.posts = [];
    this.postService.get("").subscribe(data =>{
      this.posts = data;
    })
  }

}
