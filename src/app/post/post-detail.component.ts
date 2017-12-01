import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../shared/models/post.model';
import { Component, OnInit } from '@angular/core';

import { CommentService } from '../shared/services/comment.service';
import { Comment } from '../shared/models/comment.model';
import { PostService } from '../shared/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html'
})
export class PostDetailComponent implements OnInit {
  private post:Post;
  private comments:Comment[];
  commentForm: FormGroup;

  constructor(private postService:PostService, private route: ActivatedRoute, private commentService: CommentService) { 
    this.post = new Post();
    this.route.params.subscribe(
      params => this.getPost(params['id'])
    )
  }

  ngOnInit(){
    this.commentForm = new FormGroup({
      postId: new FormControl(),
      User: new FormControl(),
      Email: new FormControl(),
      Content: new FormControl()
    });
  }

  getPost(postId){
    this.postService.get(postId).subscribe(data=>{
      this.post = data;
    });
    this.getComment(postId);
  }

  getComment(postId){
    this.commentService.query(postId).subscribe(data=>{
      this.comments = data;
    });
  }

  addComment(){
    const commentBody = this.commentForm.value;
    this.commentService.add(this.post.id, commentBody).subscribe(comment=>{
      this.comments.unshift(comment);
      this.commentForm.reset('');
    });
  }


}
