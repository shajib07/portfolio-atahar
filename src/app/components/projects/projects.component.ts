import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  ElementRef,
  computed,
  inject,
  PLATFORM_ID,
  signal,
  viewChild,
  viewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { LanguageService } from '../../services/language.service';
import { TechIconComponent } from '../tech-icon/tech-icon.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective, TechIconComponent],
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

  /** Hovered row in the section list (shows preview image beside the list). */
  readonly hoveredListIndex = signal<number | null>(null);
  readonly hoverListPreviewFailed = signal(false);

  readonly hoveredListProject = computed(() => {
    const i = this.hoveredListIndex();
    if (i === null) return null;
    const items = this.t().projects.items;
    return items[i] ?? null;
  });

  /** `top` (px) for the preview stack inside the preview column; aligned to the hovered row. */
  readonly listPreviewTopPx = signal<number | null>(null);

  private readonly closeBtn = viewChild<ElementRef<HTMLButtonElement>>('closeBtn');
  private readonly previewColumnRef = viewChild<ElementRef<HTMLElement>>('previewColumn');
  private readonly previewStackRef = viewChild<ElementRef<HTMLElement>>('previewStack');
  private readonly projectItemRefs = viewChildren<ElementRef<HTMLLIElement>>('projectItem');

  private listPreviewLayoutRaf = 0;

  /** Same icon keys as `skills` / `app-tech-icon` (html5, css3, …). */
  techIconKey(tech: string): string {
    const map: Record<string, string> = {
      HTML: 'html5',
      CSS: 'css3',
      JavaScript: 'javascript',
      TypeScript: 'typescript',
      Angular: 'angular',
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

  onProjectListHover(index: number): void {
    this.hoverListPreviewFailed.set(false);
    this.hoveredListIndex.set(index);
    this.scheduleListPreviewLayout();
  }

  onProjectListLeave(): void {
    this.hoveredListIndex.set(null);
    this.listPreviewTopPx.set(null);
  }

  onListRowFocusOut(event: FocusEvent): void {
    const next = event.relatedTarget as Node | null;
    const row = event.currentTarget as HTMLElement;
    if (next && row.contains(next)) return;
    this.hoveredListIndex.set(null);
    this.listPreviewTopPx.set(null);
  }

  onHoverListPreviewError(): void {
    this.hoverListPreviewFailed.set(true);
    this.scheduleListPreviewLayout();
  }

  onHoverListPreviewLoad(): void {
    this.scheduleListPreviewLayout();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.scheduleListPreviewLayout();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.hoveredListIndex() !== null) {
      this.scheduleListPreviewLayout();
    }
  }

  projectNumber(index: number): string {
    return String(index + 1).padStart(2, '0');
  }

  private lockBodyScroll(lock: boolean): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.document.body.style.overflow = lock ? 'hidden' : '';
  }

  /** Preview Y alignment vs the hovered list row (matches design mock). */
  private listPreviewAlignFor(index: number): 'start' | 'center' | 'end' {
    const n = this.t().projects.items.length;
    if (n <= 1) return 'center';
    if (index === 0) return 'start';
    if (index === n - 1) return 'end';
    return 'center';
  }

  private scheduleListPreviewLayout(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    cancelAnimationFrame(this.listPreviewLayoutRaf);
    this.listPreviewLayoutRaf = requestAnimationFrame(() => {
      this.listPreviewLayoutRaf = 0;
      this.syncListPreviewLayout();
      requestAnimationFrame(() => this.syncListPreviewLayout());
    });
  }

  private syncListPreviewLayout(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const i = this.hoveredListIndex();
    const aside = this.previewColumnRef()?.nativeElement;
    const stack = this.previewStackRef()?.nativeElement;
    const items = this.projectItemRefs();
    if (i === null || !aside || !stack || !items[i]) {
      this.listPreviewTopPx.set(null);
      return;
    }

    const li = items[i]!.nativeElement;
    const align = this.listPreviewAlignFor(i);
    const asideRect = aside.getBoundingClientRect();
    const liRect = li.getBoundingClientRect();
    const ph = stack.offsetHeight;
    if (ph < 1) {
      this.listPreviewTopPx.set(0);
      return;
    }

    const liTop = liRect.top - asideRect.top;
    const liH = liRect.height;
    let top: number;
    if (align === 'start') {
      top = liTop;
    } else if (align === 'end') {
      top = liTop + liH - ph;
    } else {
      top = liTop + liH / 2 - ph / 2;
    }

    const maxTop = Math.max(0, aside.clientHeight - ph);
    this.listPreviewTopPx.set(Math.round(Math.max(0, Math.min(top, maxTop))));
  }
}
