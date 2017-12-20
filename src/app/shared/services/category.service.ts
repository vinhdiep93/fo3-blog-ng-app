import { Injectable } from '@angular/core';
import { Category, Paging, Post } from '../models/post.model';
import { HttpParams } from '@angular/common/http';
import { PostListConfig } from '../models/post-list-config.model';
import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.service';

@Injectable()
export class CategoryService {

  constructor(private apiService: ApiService) { }
  
  count(): Observable<Paging> {
    return this.apiService.get('/posts/count')
           .map(data => data);
  }

  query(categoryId:number,config?: PostListConfig): Observable<Post[]> {
    // Convert any filters over to Angular's URLSearchParams
    const params: HttpParams = new HttpParams();
    if(config != null){
    return this.apiService
    .get(
        '/Categories/' +categoryId+ '/posts?filter[limit]='+config.filters.limit+'&filter[offset]='+config.filters.skip
        ).map(data => data);
    }
    return this.apiService.get('/Categories/' +categoryId+ '/posts').map(data => data);
  }

  get(id): Observable<Category> {
    return this.apiService.get('/Categories/' + id)
           .map(data => data);
  }
}
