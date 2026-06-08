import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const NAME_PATTERN = /^[\p{L}\p{M}]+(?:[ '\-]+[\p{L}\p{M}]+)*$/u;

export function trimmedRequired(control: AbstractControl): ValidationErrors | null {
  const value = (control.value ?? '').toString().trim();
  return value ? null : { required: true };
}

export function trimmedMinLength(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = (control.value ?? '').toString().trim();
    if (!value) return null;
    if (value.length < min) {
      return {
        minlength: { requiredLength: min, actualLength: value.length },
      };
    }
    return null;
  };
}

export function validName(control: AbstractControl): ValidationErrors | null {
  const value = (control.value ?? '').toString().trim();
  if (!value) return null;
  if (!NAME_PATTERN.test(value)) {
    return { invalidName: true };
  }
  return null;
}

export function trimmedEmail(control: AbstractControl): ValidationErrors | null {
  const value = (control.value ?? '').toString().trim();
  if (!value) return null;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value) ? null : { email: true };
}
