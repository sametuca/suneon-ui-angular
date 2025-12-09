import { Component } from '@angular/core';
import { MagneticButton, ShimmerButton, NeonBadge, NeonTable, NeonModal, NeonInput } from 'suneon';

@Component({
  selector: 'app-buttons-page',
  standalone: true,
  imports: [MagneticButton, ShimmerButton, NeonBadge, NeonTable, NeonModal, NeonInput],
  templateUrl: './buttons-page.html',
  styleUrl: './buttons-page.css'
})
export class ButtonsPageComponent { }
