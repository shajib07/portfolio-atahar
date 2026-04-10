import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  langService = inject(LanguageService);
  t = this.langService.translations;

  activeIndex = signal(1);

  get itemCount(): number {
    return this.t().experience.items.length;
  }

  prev(): void {
    this.activeIndex.update((i) => (i - 1 + this.itemCount) % this.itemCount);
  }

  next(): void {
    this.activeIndex.update((i) => (i + 1) % this.itemCount);
  }

  goTo(index: number): void {
    this.activeIndex.set(index);
  }

  getSlideClass(index: number): string {
    const total = this.itemCount;
    const active = this.activeIndex();
    const prev = (active - 1 + total) % total;
    const next = (active + 1) % total;

    if (index === active) return 'slide--active';
    if (index === prev)   return 'slide--prev';
    if (index === next)   return 'slide--next';
    return 'slide--hidden';
  }

  range(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
}
