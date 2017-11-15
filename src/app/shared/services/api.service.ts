import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor(private http:HttpClient) { }
  private formatErrors(error: any) {
    return Observable.throw(error.json());
 }

  get(path: string): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`)
    .catch(this.formatErrors)
    .map((res: Response) => res);
  }

}
