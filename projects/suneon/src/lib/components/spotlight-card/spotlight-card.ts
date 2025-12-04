import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sn-spotlight-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spotlight-card.html',
  styleUrl: './spotlight-card.css',
})
export class SpotlightCard {
  @Input() glowColor: string = 'rgba(96, 165, 250, 0.4)';
  @Input() borderColor: string = 'rgba(148, 163, 184, 0.2)';

  spotlightX = 0;
  spotlightY = 0;
  isHovered = false;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    this.spotlightX = event.clientX - rect.left;
    this.spotlightY = event.clientY - rect.top;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHovered = false;
  }

  get spotlightStyle() {
    return {
      background: this.isHovered
        ? `radial-gradient(circle 200px at ${this.spotlightX}px ${this.spotlightY}px, ${this.glowColor}, transparent)`
        : 'transparent'
    };
  }
}
