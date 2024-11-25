import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'practice';

  passForm !: FormGroup;
  constructor (private _fb:FormBuilder){}

  ngOnInit(): void {
    
    this.passForm = new FormGroup({
      password :new FormControl('',[Validators.required]),
      confirmpassword :new FormControl('',[Validators.required])
    },
  {
    validators:this.passValFun
  })
  }

  loginForm(){
    console.log(this.passForm.value);
    
  }

passValFun(control:AbstractControl): null | ValidationErrors{
  return control.get('password')?.value === control.get('confirmpassword')?.value ? null : {misMatch:true}
}


}
