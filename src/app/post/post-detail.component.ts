import { ValidationService } from '../shared/services/validation.service';
import { Validator } from 'codelyzer/walkerFactory/walkerFn';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from '../shared/models/post.model';
import { Component, OnInit } from '@angular/core';

import { CommentService } from '../shared/services/comment.service';
import { Comment } from '../shared/models/comment.model';
import { PostService } from '../shared/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  private post:Post;
  private posts:Post[];
  private comments:Comment[];
  private comment:Comment;
  commentForm: FormGroup;

  constructor(private postService:PostService, 
              private route: ActivatedRoute, 
              private commentService: CommentService,
              private fb: FormBuilder){ 
    this.post = new Post();
    this.comment = new Comment();
    this.route.params.subscribe(params => this.getPost(params['id']));
    this.commentForm = this.fb.group({
      'User': ['', Validators.required],
      'Email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
      'Content': ['', Validators.required]
    });
  }

  ngOnInit(){
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

  getRelativePost(){
   
  }

  addComment(){
    this.updateComment(this.commentForm.value);

    this.commentService.add(this.post.id, this.comment).subscribe(comment=>{
      this.comments.unshift(comment);
      this.commentForm.reset('');
    });
  }
  
  updateComment(values: Object) {
    (<any>Object).assign(this.comment, values);
    this.comment.CreatedDate = new Date();
  }
}
