import { Injectable, computed, signal } from '@angular/core';
import { en } from './translations/en.translations';
import { de } from './translations/de.translations';
import { Translations } from './translations/translations.interface';

type Lang = 'en' | 'de';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = signal<Lang>('en');

  translations = computed<Translations>(() =>
    this.currentLang() === 'en' ? en : de
  );

  toggleLanguage(): void {
    this.currentLang.update((l) => (l === 'en' ? 'de' : 'en'));
  }

  setLanguage(lang: Lang): void {
    this.currentLang.set(lang);
  }
}
