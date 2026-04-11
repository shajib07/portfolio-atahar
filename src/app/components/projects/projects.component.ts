import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  ElementRef,
  inject,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  langService = inject(LanguageService);
  t = this.langService.translations;

  readonly openIndex = signal<number | null>(null);
  readonly previewFailed = signal(false);

  private readonly closeBtn = viewChild<ElementRef<HTMLButtonElement>>('closeBtn');

  techSlug(tech: string): string {
    const map: Record<string, string> = {
      JavaScript: 'js',
      HTML: 'html',
      CSS: 'css',
      Angular: 'angular',
      TypeScript: 'ts',
      Firebase: 'firebase',
    };
    return map[tech] ?? 'default';
  }

  openProjectDetail(index: number): void {
    this.previewFailed.set(false);
    this.openIndex.set(index);
    this.lockBodyScroll(true);
    queueMicrotask(() => this.closeBtn()?.nativeElement.focus());
  }

  closeModal(): void {
    this.openIndex.set(null);
    this.lockBodyScroll(false);
  }

  nextProject(): void {
    const i = this.openIndex();
    if (i === null) return;
    const len = this.t().projects.items.length;
    this.previewFailed.set(false);
    this.openIndex.set((i + 1) % len);
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.openIndex() !== null) {
      this.closeModal();
    }
  }

  onPreviewError(): void {
    this.previewFailed.set(true);
  }

  projectNumber(index: number): string {
    return String(index + 1).padStart(2, '0');
  }

  private lockBodyScroll(lock: boolean): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.document.body.style.overflow = lock ? 'hidden' : '';
  }
}
