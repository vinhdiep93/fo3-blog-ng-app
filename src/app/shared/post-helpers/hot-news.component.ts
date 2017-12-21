import { PostListConfig } from '../models/post-list-config.model';
import { PostView } from '../models/post.model';
import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.css']
})
export class HotNewsComponent implements OnInit {
  private posts:PostView[];
  @Input() limit: number;
  private query: PostListConfig;
  constructor(private postService : PostService) { 
   
  }

  ngOnInit() {
    this.runQuery();
  }
  runQuery(){
    this.posts = [];
    this.query = new PostListConfig();
    this.query.isHot = true;
    if (this.limit) {
      this.query.filters.limit = this.limit;
      //this.query.filters.skip =  (this.limit * (this.currentPage - 1))
    }
    this.postService.query(this.query).subscribe(data=> this.posts = data);
  }
}
