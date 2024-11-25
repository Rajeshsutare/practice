import { AbstractControl, ValidationErrors } from "@angular/forms";


export class empIdValidator {
    static empIdValidator (control:AbstractControl) :null | ValidationErrors{
        let val = control.value as string;
        if(val){
            let regExp = /^[a-z]\d{3}$/i;
            let isValid = regExp.test(val)
            return isValid ? null : {empIdErrorMsg:`Employee Id must be start with Alphabet And Preceeded by 3 didits...`}
        }
        
        return null
    }
}