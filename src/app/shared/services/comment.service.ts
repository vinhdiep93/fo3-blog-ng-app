import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Comment } from '../models/comment.model';
import { PostListConfig } from '../models/post-list-config.model';

@Injectable()
export class CommentService{
    
    constructor(private apiService: ApiService){}

    query(postId:number,config?: PostListConfig): Observable<Comment[]> {
        // Convert any filters over to Angular's URLSearchParams
        const params: HttpParams = new HttpParams();
        if(config != null){
            return this.apiService
            .get(
            '/posts/' +postId+ '/comments?filter[limit]='+config.filters.limit+'&filter[offset]='+config.filters.skip
            ).map(data => data);
        }
        return this.apiService.get('/posts/' +postId+ '/comments').map(data => data);
    }

    add(slug, payload): Observable<Comment> {
        return this.apiService
        .post(
          `/posts/${slug}/comments`,
          { comment: { body: payload } }
        ).map(data => data.comment);
      }
}