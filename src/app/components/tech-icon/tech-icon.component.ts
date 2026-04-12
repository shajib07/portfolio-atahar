import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-icon.component.html',
  styleUrl: './tech-icon.component.scss',
})
export class TechIconComponent {
  @Input({ required: true }) icon!: string;
}
