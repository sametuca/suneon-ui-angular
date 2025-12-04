import { Component } from '@angular/core';
import { MagneticButton } from 'suneon';

@Component({
  selector: 'app-magnetic-button-page',
  standalone: true,
  imports: [MagneticButton],
  templateUrl: './magnetic-button-page.html',
  styleUrl: './magnetic-button-page.css'
})
export class MagneticButtonPageComponent { }
