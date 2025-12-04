import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sn-shimmer-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shimmer-button.html',
  styleUrl: './shimmer-button.css',
})
export class ShimmerButton {
  @Input() variant: 'default' | 'neon' | 'rainbow' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled: boolean = false;
}
