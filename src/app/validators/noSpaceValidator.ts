import { AbstractControl, ValidationErrors } from "@angular/forms";

export class noSpaceValidator {

    static  noSpaceBar ( control:AbstractControl): null | ValidationErrors {

            let val = control.value as string;
            if(!val){
                return null
            }
            if(val.includes(" ")){
                return {noSpaceMsg: `Error: No space allowed...`}
            }
        return null

    }
}