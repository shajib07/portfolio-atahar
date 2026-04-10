import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { LanguageService } from '../../services/language.service';
import { Project } from '../../services/translations/translations.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  langService = inject(LanguageService);
  t = this.langService.translations;

  projectLinks: Record<string, string> = {
    Join: 'https://github.com',
    'El Pollo Loco': 'https://github.com',
    'DA Bubble': 'https://github.com',
  };

  openProject(name: string): void {
    const url = this.projectLinks[name] || 'https://github.com';
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
