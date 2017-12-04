import { PostService } from '../services/post.service';
import { PostListConfig } from '../models/post-list-config.model';
import { Post } from '../models/post.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'post-recent',
  templateUrl: './post-recent.component.html'
})
export class PostRecentComponent implements OnInit {
  private posts: Post[];
  @Input() limit: number;
  query: PostListConfig;

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.getRecentPost();
  }

  getRecentPost(){
    this.posts = [];
    this.query = new PostListConfig();

    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.skip = 0;
    }
    this.postService.query(this.query).subscribe(data =>{
      this.posts = data;
    });
  }

}
