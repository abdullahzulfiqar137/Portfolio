import { Component } from '@angular/core';

@Component({
  selector: 'app-gradient-bg',
  standalone: true,
  template: `
    <div class="ambient" aria-hidden="true">
      <span class="spot spot-one"></span>
      <span class="spot spot-two"></span>
      <span class="spot spot-three"></span>
      <span class="technical-grid"></span>
      <span class="vignette"></span>
      <span class="grain"></span>
    </div>
  `,
  styles: [`
    .ambient { position: fixed; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; background: #090808; }
    .spot { position: absolute; border-radius: 50%; filter: blur(2px); opacity: .7; will-change: transform; }
    .spot-one { width: 70vw; height: 70vw; top: -42vw; right: -12vw; background: radial-gradient(circle, rgba(151,39,20,.24), rgba(70,22,14,.08) 42%, transparent 68%); animation: breathe 18s ease-in-out infinite; }
    .spot-two { width: 52vw; height: 52vw; top: 42vh; left: -36vw; background: radial-gradient(circle, rgba(255,74,38,.13), transparent 68%); animation: breathe 23s ease-in-out infinite reverse; }
    .spot-three { width: 38vw; height: 38vw; right: -20vw; bottom: -10vw; background: radial-gradient(circle, rgba(166,47,23,.12), transparent 70%); }
    .technical-grid { position: absolute; inset: 0; opacity: .16; background-image: linear-gradient(rgba(255,109,77,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,109,77,.12) 1px, transparent 1px); background-size: 80px 80px; mask-image: linear-gradient(to bottom, transparent 4%, #000 24%, #000 72%, transparent 97%); }
    .vignette { position: absolute; inset: 0; background: radial-gradient(ellipse at center, transparent 22%, rgba(4,3,3,.28) 72%, rgba(3,3,3,.7) 100%); }
    .grain { position: absolute; inset: 0; opacity: .022; mix-blend-mode: soft-light; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E"); }
    @keyframes breathe { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(-3vw,3vh,0) scale(1.08); } }
    @media (max-width: 700px) { .technical-grid { background-size: 56px 56px; opacity: .1; }.spot-one { width: 120vw; height: 120vw; top: -60vw; } }
    @media (prefers-reduced-motion: reduce) { .spot { animation: none; } }
  `]
})
export class GradientBgComponent {}
