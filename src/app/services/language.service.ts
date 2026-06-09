import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { en } from './translations/en.translations';
import { de } from './translations/de.translations';
import { Translations } from './translations/translations.interface';

type Lang = 'en' | 'de';

const STORAGE_KEY = 'preferredLanguage';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  currentLang = signal<Lang>(this.readStoredLang());

  translations = computed<Translations>(() =>
    this.currentLang() === 'en' ? en : de
  );

  toggleLanguage(): void {
    this.setLanguage(this.currentLang() === 'en' ? 'de' : 'en');
  }

  setLanguage(lang: Lang): void {
    this.currentLang.set(lang);
    this.persistLang(lang);
  }

  /** Read the saved language (defaults to English; safe during SSR). */
  private readStoredLang(): Lang {
    if (!this.isBrowser) return 'en';
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' || stored === 'de' ? stored : 'en';
  }

  private persistLang(lang: Lang): void {
    if (!this.isBrowser) return;
    localStorage.setItem(STORAGE_KEY, lang);
  }
}
