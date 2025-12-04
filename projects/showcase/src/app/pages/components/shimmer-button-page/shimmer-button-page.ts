import { Component } from '@angular/core';
import { ShimmerButton } from 'suneon';

@Component({
  selector: 'app-shimmer-button-page',
  standalone: true,
  imports: [ShimmerButton],
  templateUrl: './shimmer-button-page.html',
  styleUrl: './shimmer-button-page.css'
})
export class ShimmerButtonPageComponent { }
