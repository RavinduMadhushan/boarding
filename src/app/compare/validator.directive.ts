import { AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
@Directive({
  selector: '[compare]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidatorDirective, multi: true }]
})
export class ValidatorDirective implements Validator {
  @Input('compare') controlNameToComapare: string;

  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value === null || c.value.length === 0) {
      return null;
    }

    const controlToComapare = c.root.get(this.controlNameToComapare);
    if (controlToComapare) {
      const subscription: Subscription = controlToComapare.valueChanges.subscribe(() => {
        c.updateValueAndValidity();
        subscription.unsubscribe();

      });

    }
    return controlToComapare && controlToComapare.value !== c.value ? { 'compare': true } : null;
  }

}
