import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeonBadge } from 'suneon';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

@Component({
  selector: 'app-badge-page',
  standalone: true,
  imports: [CommonModule, NeonBadge],
  templateUrl: './badge-page.html',
  styleUrl: './badge-page.css'
})
export class BadgePageComponent {
  variantsList: BadgeVariant[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
  sizes = ['sm', 'md', 'lg'];

  get variants(): BadgeVariant[] {
    return this.variantsList;
  }
}
