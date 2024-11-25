import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { Iusers } from '../../model/interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.less']
})
export class UserFormComponent implements OnInit {

  public userForm !:FormGroup;
  public editUserId !:string;
  public canEdit :boolean=false;
  constructor(private _fb:FormBuilder,
              private _router:Router,
              private _userService:UserServiceService,
              private _routes:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.createUserForm();
    this. editUser();
  //  this.getupdateUser()
  }

  createUserForm(){
this.userForm = this._fb.group({
  name: new FormControl(null,[
    Validators.required,
    Validators.minLength(3)]),
  email : new FormControl(null,[
    Validators.required,
    Validators.email]),
  contact:new FormControl(null,[
    Validators.required,
    Validators.minLength(10)])
})
  }

  onUserForm(){
    console.log(this.userForm.value);
    let newObj:Iusers={
      ...this.userForm.value
    }
    this._userService.createSinglePost(newObj).subscribe(res=>{
    console.log(res);
    this._router.navigate(['crud/userList'])
    this.userForm.reset();
      
    })
  }

  onUserList(){
    this._router.navigate(['crud/userList'])
  }

  editUser(){
    this._routes.params.subscribe((params:Params)=>{
      console.log(params);
      this.editUserId = params['userId']
      if(this.editUserId){
        this.canEdit = true;
        this._userService.getSingleUser(this.editUserId).subscribe(res=>{
          console.log(res);
          this.userForm.patchValue(res)
        })
      }
      
    })

  }

  getupdateUser(){
   let oldUser = this.userForm.value;
   let updatedUser :Iusers = {
    // name:this.userForm.controls['name'].value,
    // email:this.userForm.controls['email'].value,
    // contact:this.userForm.controls['contact'].value,
    ...oldUser,
    id:this.editUserId
   }

   this._userService.updateUser(updatedUser).subscribe(res=>{
    console.log(res);
    this._router.navigate(['crud/userList'])
    this.userForm.reset()
   })

  }

}
