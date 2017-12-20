import { HttpParams } from '@angular/common/http';
import { PostListConfig } from '../models/post-list-config.model';
import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Paging, Post, PostView } from '../models/post.model';

@Injectable()
export class PostService {

  constructor(private apiService: ApiService) { }
  
  count(): Observable<Paging> {
    return this.apiService.get('/posts/count')
           .map(data => data);
  }

  query(config: PostListConfig): Observable<PostView[]> {
    // Convert any filters over to Angular's URLSearchParams
   // const params: HttpParams = new HttpParams();
    if(!config.category){
      return this.apiService.get(
        '/posts?filter[include]=category&filter[order]=id DESC&filter[limit]='+config.filters.limit+'&filter[offset]='+config.filters.skip
      ).map(data => data);
    }
    return this.apiService.get(
      '/posts?filter[include]=category&filter[where][CategoryId]='+config.category+'&filter[order]=id DESC&filter[limit]='+config.filters.limit+'&filter[offset]='+config.filters.skip
    ).map(data => data);
  }

  get(id): Observable<Post> {
    return this.apiService.get('/posts/' + id)
           .map(data => data);
  }

  destroy(slug) {
    return this.apiService.delete('/posts/' + slug);
  }

  save(post): Observable<Post> {
    // If we're updating an existing article
    if (post.slug) {
      return this.apiService.put('/posts/' + post.slug, {post: post})
             .map(data => data.article);

    // Otherwise, create a new article
    } else {
      return this.apiService.post('/posts/', {post: post})
             .map(data => data.post);
    }
  }
}
