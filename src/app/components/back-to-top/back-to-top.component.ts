import {
  Component,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';

/**
 * Floating "back to top" control, fixed to the bottom-right corner on every
 * page. It fades in once the user has scrolled down a bit and scrolls smoothly
 * back to the top of the document on click.
 */
@Component({
  selector: 'app-back-to-top',
  standalone: true,
  template: `
    <button
      class="back-to-top"
      [class.back-to-top--visible]="isVisible()"
      (click)="scrollToTop()"
      [attr.aria-label]="t().footer.backToTop"
      [attr.tabindex]="isVisible() ? 0 : -1"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  `,
  styles: [
    `
      .back-to-top {
        position: fixed;
        right: clamp(16px, 4vw, 32px);
        bottom: max(clamp(16px, 4vw, 32px), env(safe-area-inset-bottom, 0px));
        z-index: 900;

        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        border-radius: 50%;

        border: 1px solid #3dcfb6;
        background: rgba(13, 31, 24, 0.85);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        color: #3dcfb6;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        cursor: pointer;

        opacity: 0;
        transform: translateY(12px);
        pointer-events: none;
        transition:
          opacity 200ms ease,
          transform 200ms ease,
          background 120ms ease,
          color 120ms ease;
      }

      .back-to-top--visible {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      }

      .back-to-top:hover {
        background: #3dcfb6;
        color: #07120d;
      }

      .back-to-top:focus-visible {
        outline: 2px solid #3dcfb6;
        outline-offset: 3px;
      }

      @media (prefers-reduced-motion: reduce) {
        .back-to-top {
          transition: opacity 200ms ease;
          transform: none;
        }
      }
    `,
  ],
})
export class BackToTopComponent {
  private readonly langService = inject(LanguageService);
  t = this.langService.translations;

  isVisible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isVisible.set(window.scrollY > 400);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
