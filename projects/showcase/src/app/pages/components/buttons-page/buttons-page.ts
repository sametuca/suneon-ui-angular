import { Component } from '@angular/core';
import { MagneticButton, ShimmerButton } from 'suneon';

@Component({
  selector: 'app-buttons-page',
  standalone: true,
  imports: [MagneticButton, ShimmerButton],
  templateUrl: './buttons-page.html',
  styleUrl: './buttons-page.css'
})
export class ButtonsPageComponent { }
