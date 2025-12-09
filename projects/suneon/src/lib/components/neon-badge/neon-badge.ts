import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sn-neon-badge',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <span
      class="sn-badge"
      [ngClass]="['sn-badge-' + variant, 'sn-badge-' + size]"
      [class.sn-badge-rounded]="rounded"
      [class.sn-badge-glow]="glow"
    >
      <ng-content></ng-content>
    </span>
  `,
  styleUrl: './neon-badge.css',
})
export class NeonBadge {
  @Input() variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() rounded: boolean = true;
  @Input() glow: boolean = true;
}
