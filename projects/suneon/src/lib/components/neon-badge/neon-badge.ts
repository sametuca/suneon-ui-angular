import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sn-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './neon-badge.html',
  styleUrl: './neon-badge.css',
})
export class NeonBadge {
  @Input() variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() rounded: boolean = true;
  @Input() glow: boolean = true;
}
