import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  langService = inject(LanguageService);
  t = this.langService.translations;

  /**
   * The ticker is one looping track translated by -50%, so it must hold an even
   * number of identical copies. Eight copies keep the strip filled even on very
   * wide / ultrawide monitors, so the marquee never shows an empty gap.
   */
  tickerRepeat = Array.from({ length: 8 });

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 72;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
