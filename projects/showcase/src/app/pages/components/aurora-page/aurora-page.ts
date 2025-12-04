import { Component } from '@angular/core';
import { AuroraBackground } from 'suneon';

@Component({
  selector: 'app-aurora-page',
  standalone: true,
  imports: [AuroraBackground],
  templateUrl: './aurora-page.html',
  styleUrl: './aurora-page.css'
})
export class AuroraPageComponent { }
