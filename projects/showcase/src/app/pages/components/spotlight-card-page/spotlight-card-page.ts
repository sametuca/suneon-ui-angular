import { Component } from '@angular/core';
import { SpotlightCard } from 'suneon';

@Component({
  selector: 'app-spotlight-card-page',
  standalone: true,
  imports: [SpotlightCard],
  templateUrl: './spotlight-card-page.html',
  styleUrl: './spotlight-card-page.css'
})
export class SpotlightCardPageComponent { }
