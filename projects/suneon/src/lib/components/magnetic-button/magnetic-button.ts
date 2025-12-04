import { Component, ElementRef, HostListener, ViewChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sn-magnetic-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './magnetic-button.html',
  styleUrl: './magnetic-button.css',
})
export class MagneticButton {
  @ViewChild('magneticBtn', { static: false }) buttonRef!: ElementRef;

  @Input() strength: number = 0.3;
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  transformStyle = '';

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.buttonRef) return;

    const btn = this.buttonRef.nativeElement;
    const rect = btn.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    const moveX = x * this.strength;
    const moveY = y * this.strength;

    this.transformStyle = `translate(${moveX}px, ${moveY}px)`;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.transformStyle = 'translate(0, 0)';
  }
}
