import { query } from '@angular/core/src/animation/dsl';
import { PostService } from '../services/post.service';
import { Post, Paging } from '../models/post.model';
import { Component, Input, OnInit } from '@angular/core';
import { PostListConfig } from '../models/post-list-config.model';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: []
})
export class PostListComponent implements OnInit {

  private posts:Post[];
  @Input() limit: number;
  query: PostListConfig;
  currentPage = 1;
  totalPages: Array<number> = [1];
  totalPosts: number;

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
    //this.totalPosts = new Paging();
     // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.skip =  (this.limit * (this.currentPage - 1))
    }
    this.postService.count().subscribe(data=>{
      this.totalPosts = data.count;
   });

    this.postService.query(this.query).subscribe(data =>{
      this.posts = data;
      //this.totalPosts = data.header.headers.get("X-Total-Count");
    });
    //this.totalPosts = this.countPost();
    //this.totalPosts = this.countPost();
    this.totalPages = Array.from(new Array(Math.ceil(11/ this.limit)), (val, index) => index + 1);
  }

  countPost():number{
    var postNum = 0;
    this.postService.count().subscribe(data=>{
       postNum = data.count;
    });
    return postNum;
  }

}
