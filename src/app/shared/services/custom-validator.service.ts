import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() { }

  validaNomeCompleto(): ValidatorFn {
    return (control: AbstractControl):
    ValidationErrors | null => {
      console.log(control.value);

      const nomes: Array<string> = control.value.split(' ');
      if (nomes.length < 2 || nomes[0].length < 3 || nomes[1].length < 3) {
        return {validaNomeCompleto: true};
      }

      return null;
    }
  }
}
