import { AbstractControl, ValidationErrors, } from "@angular/forms";


export class passwordValidators {
    static passwordValidators (control:AbstractControl): ValidationErrors | null  {
        return control.get('pass')?.value === control.get('confirmPass')?.value ? null: {passErrMSg:`Please Match The Entered Password...`}

    }

}