import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../shared/models/post.model';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  private post:Post;
  constructor(private postService:PostService, private route: ActivatedRoute) { 
    this.post = new Post();
    this.route.params.subscribe(
      params => this.getPost(params['id'])
    )
  }
  getPost(postId){
    this.postService.get1(postId).subscribe(data=>{
      this.post = data;
    });
  }


}
