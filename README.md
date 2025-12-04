# Suneon - Neon Angular UI Library

Neon-themed Angular UI component library with stunning cyber animations and glow effects.

## 🎨 Features

- ✨ **Neon Aesthetics**: Cyber-punk inspired glowing components  
- 🌈 **Vibrant Colors**: Cyan, magenta, and neon green palette
- 🎭 **Modern Animations**: Smooth glow effects and transitions
- 🎯 **TypeScript**: Full type safety
- 📦 **Standalone Components**: Angular 19+ compatible
- 🔧 **Customizable**: Input parameters for every component

## 📦 Installation

```bash
npm install suneon
```

## 🚀 Quick Start

```typescript
import { Component } from '@angular/core';
import { AuroraBackground, MagneticButton, ShimmerButton, SpotlightCard } from 'suneon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AuroraBackground, MagneticButton, ShimmerButton, SpotlightCard],
  template: `
    <sn-aurora-background>
      <h1>Welcome to Suneon</h1>
      <sn-magnetic-button variant="primary">
        Click Me
      </sn-magnetic-button>
      <sn-shimmer-button variant="neon">
        Neon Glow
      </sn-shimmer-button>
    </sn-aurora-background>
  `
})
export class AppComponent {}
```

## 🧩 Components

### Neon Shimmer Button

The signature neon-glow button with cyber aesthetics.

```html
<sn-shimmer-button variant="neon" size="md">
  Neon Button
</sn-shimmer-button>
```

### Aurora Background  

Cyber-themed animated background with neon gradients.

```html
<sn-aurora-background [showParticles]="true">
  <!-- Your content -->
</sn-aurora-background>
```

### Magnetic Button

Interactive button with magnetic mouse tracking.

```html
<sn-magnetic-button variant="primary">
  Hover Me
</sn-magnetic-button>
```

### Spotlight Card

Glassmorphic card with neon spotlight effect.

```html
<sn-spotlight-card>
  <h3>Title</h3>
  <p>Content</p>
</sn-spotlight-card>
```

## 🎨 Color Palette

- **Cyan**: #00f0ff (Primary neon)
- **Magenta**: #ff00ff (Secondary neon)  
- **Green**: #00ff00 (Accent neon)
- **Purple**: #8b00ff (Tertiary)

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests.

---

**Suneon** - Light up your Angular apps with neon! ✨🌈
