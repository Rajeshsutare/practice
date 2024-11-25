import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public postBaseUrl:string=`https://jsonplaceholder.typicode.com/posts`
  constructor(private _http:HttpClient) { }

  getAllPost():Observable<any>{
    return this._http.get(this.postBaseUrl)

  }
}
