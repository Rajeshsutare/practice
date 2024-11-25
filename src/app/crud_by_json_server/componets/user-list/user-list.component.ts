import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Iusers } from '../../model/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit{
public userArray:Array<Iusers>=[];
  constructor(private _userDervice:UserServiceService,
              private _router:Router

  ){}

  ngOnInit(): void {
    
    this._userDervice.getAllUsers().subscribe(res=>{
      console.log(res);
      this.userArray=res;
    })
  }

  deleteUser(id:any){
    document.getElementById(id)?.remove()
   this._userDervice.deleteUser(id).subscribe(res=>{
    console.log(res);
    
   })

  }



}
