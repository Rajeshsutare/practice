import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
userUrl:string=`http://localhost:3000/newUsers`;
  constructor(private _http:HttpClient) { }

  getAllNewUsers():Observable<any>{
    return this._http.get<any>(this.userUrl)
  }

  addNewUsers(obj:any):Observable<any>{
    return this._http.post<any>(`${this.userUrl}`,obj)
  }

  deleteUser(id:any):Observable<any>{
    return this._http.delete<any>(`${this.userUrl}/${id}`)
  }

  getSingleUser(obj:any):Observable<any>{
    return this._http.get<any>(`${this.userUrl}/${obj}`)
  }
}
