import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from 'src/app/regex/regex';
import { empIdValidator } from 'src/app/validators/empId';
import { noSpaceValidator } from 'src/app/validators/noSpaceValidator';
import { COUNTRIES_DATA } from '../model/countriesData';
import { group } from '@angular/animations';
import { pincodeValidators } from 'src/app/validators/pincodeValidators';
import { passwordValidators } from 'src/app/validators/passwordValidator';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.less']
})
export class ReactiveFormsComponent  implements OnInit{

  public reactForm !:FormGroup;
  public genderArray :Array<string> = ['Male', 'Female', 'Other'];
  public countrieArray = COUNTRIES_DATA;
  constructor (private _fb:FormBuilder){ }
  ngOnInit(): void {
    
    this.createForm();
    this.currentAndPermanentAddress();

  }

  createForm(){
    this.reactForm = new FormGroup({
      fname: new FormControl(null,[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16),
        Validators.pattern(CustomRegex.onlyText),
        noSpaceValidator.noSpaceBar
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,]),
      contact: new FormControl(null,[
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern(CustomRegex.contact)]),
      empId: new FormControl(null,[
        Validators.required,
        empIdValidator.empIdValidator]),
      gender:new FormControl(null,[
        Validators.required]),
      check:new FormControl(false,[]),
        permanentAddess : new FormGroup({
        country : new FormControl(null,[
          Validators.required]),
        state : new FormControl(null,[
          Validators.required]),
        city : new FormControl(null,[
          Validators.required]),
        pincode : new FormControl(null,[
          Validators.required,
         ])
      }),
      currentAddess : new FormGroup({
        country : new FormControl(null,[
          Validators.required]),
        state : new FormControl(null,[
          Validators.required]),
        city : new FormControl(null,[
          Validators.required]),
        pincode : new FormControl(null,[
          Validators.required,
          ])
      }),
    
      isPermanentSameAsCurrent : new FormControl(false),
      pass : new FormControl('',[
        Validators.required,
        Validators.pattern(CustomRegex.password)]),
      confirmPass : new FormControl('',[
        Validators.required,
        // passwordValidators.passwordValidators
        ])

    },
    {
      validators:this.passwordValidatorsFun
    }
  )

  }

  passwordValidatorsFun(control:AbstractControl){
    return control.get('pass')?.value === control.get('confirmPass')?.value ? null: {passErrMSg:`Please Match The Entered Password...`}
  }


  get f(){
    return this.reactForm.controls;
  }

  onSubmitReactForm(){
    console.log(this.reactForm.value);
    this.reactForm.reset();
    
  }

  get getCurrentAddress(){
    return this.reactForm.get('currentAddess') as FormGroup;
  }

  currentAndPermanentAddress(){
    this.f['isPermanentSameAsCurrent'].valueChanges.subscribe(res=>{
      if(res){
        let permanentAddVal = this.f['permanentAddess'].value;
        this.getCurrentAddress.setValue(permanentAddVal)
        Object.keys(this.getCurrentAddress.controls).forEach(ele=>{
          this.getCurrentAddress.get(ele)?.disable()
        })
      }else{
        Object.keys(this.getCurrentAddress.controls).forEach(ele=>{
          this.getCurrentAddress.get(ele)?.enable()
        })
        this.getCurrentAddress.reset()
      }
    })
  }



}


