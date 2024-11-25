import { AbstractControl, ValidationErrors } from "@angular/forms";

export class pincodeValidators {
    static pincodeValidators (control:AbstractControl) : null | ValidationErrors{
        let val = control.value as string;
        if(val){
            let regExp = /^[0-9]{1,6}$/;
            let isValid = regExp.test(val);
            return isValid ? null : {pincodeErrMsg:`Pincode should be of 06 digits...`}
        }
        return null

    }
} 