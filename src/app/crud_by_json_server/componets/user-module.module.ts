import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes} from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';


  const routes :Routes =[
    {path:"", component:UserFormComponent},
    {path:"userList", component:UserListComponent},
    {path:"userList/:userId/editUser", component:UserFormComponent},

    {path:"users", component:UsersComponent},
    
    
  ]
   
  

@NgModule({
  declarations: [UserListComponent, UsersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModuleModule { 
  constructor(){
    console.log("UserModuleModule Downloaded");
    
  }
}
