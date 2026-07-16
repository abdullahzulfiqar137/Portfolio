import { Component } from '@angular/core';

@Component({
  selector: 'app-gradient-bg',
  standalone: true,
  template: `
    <div class="grad-bg" aria-hidden="true">
      <span class="blob blob-1"></span>
      <span class="blob blob-2"></span>
      <span class="blob blob-3"></span>
      <span class="grid-overlay"></span>
      <span class="noise"></span>
    </div>
  `,
  styles: [
    `
      .grad-bg {
        position: fixed;
        inset: 0;
        z-index: 0;
        overflow: hidden;
        pointer-events: none;
      }
      .blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.55;
        will-change: transform;
      }
      .blob-1 {
        width: 46vw;
        height: 46vw;
        top: -10vw;
        left: -6vw;
        background: radial-gradient(circle, rgba(77, 163, 255, 0.55), transparent 65%);
        animation: drift1 22s ease-in-out infinite;
      }
      .blob-2 {
        width: 40vw;
        height: 40vw;
        top: 8vw;
        right: -10vw;
        background: radial-gradient(circle, rgba(123, 92, 255, 0.55), transparent 65%);
        animation: drift2 26s ease-in-out infinite;
      }
      .blob-3 {
        width: 38vw;
        height: 38vw;
        bottom: -12vw;
        left: 30vw;
        background: radial-gradient(circle, rgba(255, 79, 216, 0.35), transparent 65%);
        animation: drift3 30s ease-in-out infinite;
      }
      .grid-overlay {
        position: absolute;
        inset: 0;
        background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        background-size: 54px 54px;
        mask-image: radial-gradient(circle at 50% 30%, #000 30%, transparent 80%);
        -webkit-mask-image: radial-gradient(circle at 50% 30%, #000 30%, transparent 80%);
        opacity: 0.5;
      }
      .noise {
        position: absolute;
        inset: 0;
        opacity: 0.04;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      }
      @keyframes drift1 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(6vw, 5vw) scale(1.1); }
      }
      @keyframes drift2 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(-5vw, 7vw) scale(1.08); }
      }
      @keyframes drift3 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(4vw, -6vw) scale(1.12); }
      }
      :host-context([data-theme='light']) .blob {
        opacity: 0.4;
      }
      @media (prefers-reduced-motion: reduce) {
        .blob { animation: none; }
      }
    `,
  ],
})
export class GradientBgComponent {}
