import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly router = inject(Router);

  langService = inject(LanguageService);
  t = this.langService.translations;

  /** Footer logo: go home and scroll to top (or just scroll when already home). */
  onLogoClick(event: MouseEvent): void {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }
    event.preventDefault();

    const path = this.router.url.split('?')[0] || '/';
    const onHome = path === '/' || path === '';

    if (onHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    void this.router.navigateByUrl('/').then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
