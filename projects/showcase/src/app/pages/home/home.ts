import { Component } from '@angular/core';
import { MagneticButton } from 'suneon';
import { ShimmerButton } from 'suneon';
import { SpotlightCard } from 'suneon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MagneticButton, ShimmerButton, SpotlightCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent { }
