import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

  constructor(private apiService: ApiService) { }
  get(slug): Observable<any> {
    return this.apiService.get('/articles/' + slug)
           .map(data => data.article);
  }
}
