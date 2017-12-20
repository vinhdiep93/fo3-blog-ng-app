import { query } from '@angular/core/src/animation/dsl';
import { PostService } from '../services/post.service';
import { Paging, Post, PostView } from '../models/post.model';
import { Component, Input, OnInit } from '@angular/core';
import { PostListConfig } from '../models/post-list-config.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: []
})
export class PostListComponent implements OnInit {

  private posts:PostView[];
  @Input() limit: number;
  @Input() categoryId:number;
  private query: PostListConfig;
  private currentPage = 1;
  private totalPages: Array<number> = [1];
  private totalPosts: number;

  constructor(private postService:PostService) { }

  ngOnInit() {
   // this.countPost();
    this.runQuery();
  }
  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery(){
    this.posts = [];
    this.query = new PostListConfig();
    var postcount = 0;
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.skip =  (this.limit * (this.currentPage - 1))
    }
    if(this.categoryId){
      this.query.category = this.categoryId;
    }

    var countQuery = this.postService.count();
    var temp = this.postService.query(this.query);
    Observable.combineLatest(countQuery, temp).subscribe(p => {
      
      const paging : Paging = p[0];
      const data = p[1];

      this.totalPosts = paging.count;
      this.posts = data;
      this.totalPages = Array.from(new Array(Math.ceil(this.totalPosts/ this.limit)), (val, index) => index + 1);
    })
  }
}
