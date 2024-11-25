import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersServiceService } from '../../services/users-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit{
  userForm !: FormGroup;
  usersArray !:any;
  editUserId !:any;
  canEdit : boolean =false;
  updateBtnVisible:boolean=false;
  constructor(private _fb:FormBuilder,
              private _usersService:UsersServiceService,
              private _routes:ActivatedRoute
  ){}
  ngOnInit(): void {
    this.createUserForm();
    this.getAllNewUsers();
    // this.onEditUser()
  }

  createUserForm(){
    this.userForm = this._fb.group({
      name:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required]),
      contact:new FormControl(null,[Validators.required]),
    })
  }

  get f(){
    return this.userForm.controls
  }

  userFormSubmit(){
    console.log(this.userForm.value);
    let userObj = {...this.userForm.value}
    this._usersService.addNewUsers(userObj).subscribe(res=>{console.log(res),
      this.usersArray.push(res)
    })
    this.userForm.reset()
  }

  getAllNewUsers(){
    this._usersService.getAllNewUsers().subscribe(res=>{
      // console.log(res)
      this.usersArray = res;
    })
  }

  onDeleteUser(id:any){
    console.log(id);
    document.getElementById(id)?.remove();
    this._usersService.deleteUser(id).subscribe(res=>{
      // console.log(res);
    })
    
  }

  onEditUser(id:any){
    console.log(id);
    this._usersService.getSingleUser(id).subscribe(res=>{
      console.log(res);
      this.userForm.patchValue(res);
      this.updateBtnVisible = true;
    })
  }

 

}
