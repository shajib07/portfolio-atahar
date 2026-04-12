import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { LanguageService } from '../../services/language.service';
import { TechIconComponent } from '../tech-icon/tech-icon.component';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective, TechIconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  langService = inject(LanguageService);
  t = this.langService.translations;

  skills: Skill[] = [
    { name: 'HTML',           icon: 'html5' },
    { name: 'CSS',            icon: 'css3' },
    { name: 'JavaScript',     icon: 'javascript' },
    { name: 'TypeScript',     icon: 'typescript' },
    { name: 'Angular',        icon: 'angular' },
    { name: 'Firebase',       icon: 'firebase' },
    { name: 'REST-API',       icon: 'api' },
    { name: 'Git',            icon: 'git' },
    { name: 'Scrum',          icon: 'scrum' },
    { name: 'Material Design',icon: 'material' },
  ];

  scrollToContact(): void {
    const el = document.getElementById('contact');
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
