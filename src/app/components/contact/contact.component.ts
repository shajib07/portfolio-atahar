import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { LanguageService } from '../../services/language.service';
import {
  trimmedRequired,
  trimmedMinLength,
  validName,
  trimmedEmail,
} from '../../validators/form.validators';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ScrollAnimationDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private fb     = inject(FormBuilder);
  langService    = inject(LanguageService);
  t              = this.langService.translations;
  status         = signal<FormStatus>('idle');

  // Text fields validate on blur (not while typing) per the checklist; the
  // privacy checkbox stays on 'change' so the submit button enables instantly.
  form: FormGroup = this.fb.group({
    name: [
      '',
      {
        validators: [trimmedRequired, trimmedMinLength(2), validName],
        updateOn: 'blur',
      },
    ],
    email: ['', { validators: [trimmedRequired, trimmedEmail], updateOn: 'blur' }],
    message: [
      '',
      { validators: [trimmedRequired, trimmedMinLength(20)], updateOn: 'blur' },
    ],
    privacy: [false, Validators.requiredTrue],
  });

  get nameCtrl():    AbstractControl { return this.form.get('name')!; }
  get emailCtrl():   AbstractControl { return this.form.get('email')!; }
  get messageCtrl(): AbstractControl { return this.form.get('message')!; }
  get privacyCtrl(): AbstractControl { return this.form.get('privacy')!; }

  getError(ctrl: AbstractControl): string {
    if (ctrl.hasError('required'))      return this.t().errors.required;
    if (ctrl.hasError('email'))         return this.t().errors.email;
    if (ctrl.hasError('invalidName'))   return this.t().errors.invalidName;
    if (ctrl.hasError('minlength'))     return this.t().errors.minLength;
    return '';
  }

  showError(ctrl: AbstractControl): boolean {
    // Only after the field has been left (blurred) — never mid-typing.
    return ctrl.invalid && ctrl.touched;
  }

  onSubmit(): void {
    this.trimFormValues();
    this.form.updateValueAndValidity();

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.status.set('loading');
    setTimeout(() => this.status.set('success'), 1200);
  }

  resetForm(): void {
    this.form.reset();
    this.status.set('idle');
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private trimFormValues(): void {
    for (const field of ['name', 'email', 'message'] as const) {
      const ctrl = this.form.get(field);
      if (ctrl && typeof ctrl.value === 'string') {
        ctrl.setValue(ctrl.value.trim());
      }
    }
  }
}
