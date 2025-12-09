import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="dark-neon-bg">
      <header class="header">
        <div class="logo">
          <a routerLink="/" class="logo-link">
            <img src="favicon.png" alt="Suneon" class="logo-icon" />
            <span class="logo-text">Suneon</span>
          </a>
        </div>
        <nav class="nav">
          <a routerLink="/get-started" class="nav-link">Get Started</a>
          <a routerLink="/components" class="nav-link">Components</a>
          <a href="https://github.com" class="nav-link">GitHub</a>
        </nav>
      </header>
      <router-outlet />
    </div>
  `,
  styles: [`
    .dark-neon-bg {
      min-height: 100vh;
      background: linear-gradient(180deg, #050008 0%, #0a0015 100%);
      background-image: 
        linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px),
        linear-gradient(180deg, #050008 0%, #0a0015 100%);
      background-size: 50px 50px, 50px 50px, 100% 100%;
      position: relative;
    }

    .dark-neon-bg::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 300px;
      background: radial-gradient(ellipse at top, rgba(0, 240, 255, 0.1), transparent 50%);
      pointer-events: none;
    }

    .header {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem;
      position: relative;
      z-index: 10;
    }

    .logo-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .logo-link:hover .logo-icon {
      filter: brightness(0) invert(1) drop-shadow(0 0 20px rgba(0, 240, 255, 1)) drop-shadow(0 0 30px rgba(0, 240, 255, 0.6));
      transform: scale(1.1);
    }

    .logo-icon {
      width: 32px;
      height: 32px;
      filter: brightness(0) invert(1) drop-shadow(0 0 10px rgba(0, 240, 255, 0.8));
      transition: all 0.3s ease;
    }

    .logo-text {
      font-size: 1.5rem;
      font-weight: bold;
      color: #00f0ff;
      text-shadow: 0 0 10px #00f0ff;
      transition: all 0.3s ease;
    }

    .logo-link:hover .logo-text {
      text-shadow: 0 0 15px #00f0ff;
    }

    .nav {
      display: flex;
      gap: 2rem;
    }

    .nav-link {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      font-size: 0.95rem;
      transition: all 0.3s;
    }

    .nav-link:hover {
      color: #00f0ff;
      text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
    }
  `]
})
export class AppComponent { }
