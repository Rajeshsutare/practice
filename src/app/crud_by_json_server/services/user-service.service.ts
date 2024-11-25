import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iusers } from '../model/interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

public  userUrl:string=`http://localhost:3000/users`

  constructor(private _hhtp:HttpClient) { }

  getAllUsers():Observable<any>{
    return this._hhtp.get(this.userUrl)
  }

  createSinglePost(user:Iusers):Observable<any>{
    return this._hhtp.post<any>(`${this.userUrl}`,user)
  }

  deleteUser(id:any):Observable<Iusers>{
    return this._hhtp.delete<Iusers>(`${this.userUrl}/${id}`)
  }

  getSingleUser(id:any){
    return this._hhtp.get<Iusers>(`${this.userUrl}/${id}`)
  }

  updateUser(obj:Iusers){
    return this._hhtp.patch<any>(`${this.userUrl}/${obj.id}`,obj)
  }


}
