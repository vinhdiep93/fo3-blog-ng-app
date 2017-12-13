import { Comment } from '../shared/models/comment.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  constructor() { }

  ngOnInit() {
  }
}
