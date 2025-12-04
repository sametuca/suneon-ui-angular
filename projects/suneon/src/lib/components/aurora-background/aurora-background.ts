import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sn-aurora-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aurora-background.html',
  styleUrl: './aurora-background.css',
})
export class AuroraBackground {
  @Input() colors: string[] = [
    'rgba(59, 130, 246, 0.5)',
    'rgba(139, 92, 246, 0.5)',
    'rgba(236, 72, 153, 0.5)',
  ];

  @Input() showParticles: boolean = true;

  particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 20,
  }));
}
