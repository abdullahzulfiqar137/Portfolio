import { Component, OnInit, OnDestroy } from '@angular/core';
import { PROFILE } from '../data/portfolio.data';
import { RevealDirective } from '../directives/reveal.directive';
import { ParallaxDirective } from '../directives/parallax.directive';
import { TiltDirective } from '../directives/tilt.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective, ParallaxDirective, TiltDirective],
  template: `
    <section id="home" class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="reveal glass pill-inline" [appReveal]="0">
            <span class="status-dot"></span> Available for new opportunities
          </div>

          <h1 class="reveal hero-name" [appReveal]="80">
            Hi, I'm <span class="grad-text">{{ profile.name }}</span>
          </h1>
          <p class="reveal hero-role" [appReveal]="160">
            <span class="role-static">{{ profile.title }}</span>
            <span class="typed" [class.show]="typed">{{ typedText }}</span>
            <span class="typing-cursor" [class.show]="typed">|</span>
          </p>

          <p class="reveal hero-tagline" [appReveal]="240">{{ profile.tagline }}</p>

          <p class="reveal hero-meta" [appReveal]="280">
            <span>📍 {{ profile.location }}</span>
            <span>✉️ {{ profile.email }}</span>
            <span>📱 {{ profile.phone }}</span>
          </p>

          <div class="reveal hero-actions" [appReveal]="320">
            <a class="btn btn-premium btn-primary-premium" href="#projects">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              View Projects
            </a>
            <a class="btn btn-premium btn-secondary-premium" [href]="profile.resumeUrl" download>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Download Resume
            </a>
            <a class="btn btn-premium btn-secondary-premium" href="#contact">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Contact Me
            </a>
          </div>

          <div class="reveal hero-socials" [appReveal]="400">
            <a class="h-social h-github" [href]="profile.github" target="_blank" rel="noopener" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.34 9.34 0 0112 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0022 12.25C22 6.58 17.52 2 12 2z"/></svg>
            </a>
            <a class="h-social h-linkedin" [href]="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4z"/></svg>
            </a>
            <a class="h-social h-mail" [href]="'mailto:' + profile.email" aria-label="Email">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
            </a>
          </div>
        </div>

        <div class="reveal hero-visual" [appReveal]="240">
          <div class="hero-parallax" [appParallax]="0.08">
            <div class="avatar-frame" [appTilt]="6">
            <div class="avatar-glow"></div>
            <div class="avatar-ring"></div>
            <div class="avatar">
              <span>{{ initials }}</span>
            </div>
            <div class="avatar-badge">
              <span class="dot"></span> .NET
            </div>
          </div>
          <div class="float-card card-1 glass">
            <span class="fc-icon">⚡</span>
            <div><strong>Fast APIs</strong><small>ASP.NET Core</small></div>
          </div>
          <div class="float-card card-2 glass">
            <span class="fc-icon">🅰</span>
            <div><strong>Modern UI</strong><small>Angular</small></div>
          </div>
          </div>
        </div>
      </div>
      <a class="scroll-hint" href="#about" aria-label="Scroll to about">
        <span></span>
      </a>
    </section>
  `,
  styles: [
    `
      .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        padding: 120px 0 60px;
        position: relative;
      }
      .hero-grid {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 48px;
        align-items: center;
      }
      .pill-inline {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 8px 16px;
        border-radius: 999px;
        font-size: 0.85rem;
        color: var(--muted);
        font-weight: 600;
      }
      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: #34e0a1;
        box-shadow: 0 0 0 4px rgba(52, 224, 161, 0.18);
      }
      .hero-name {
        font-size: clamp(2.4rem, 6vw, 4.4rem);
        line-height: 1.02;
        font-weight: 900;
        letter-spacing: -0.03em;
        margin: 22px 0 0;
      }
      .grad-text {
        background: linear-gradient(90deg, var(--blue), var(--violet), var(--pink));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .hero-role {
        font-size: clamp(1.1rem, 2.4vw, 1.5rem);
        font-weight: 700;
        margin: 16px 0 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        min-height: 1.6em;
      }
      .role-static {
        color: var(--text);
      }
      .typed {
        color: transparent;
        background: linear-gradient(90deg, var(--blue), var(--cyan));
        -webkit-background-clip: text;
        background-clip: text;
        opacity: 0;
        transition: opacity 0.4s ease;
      }
      .typed.show {
        opacity: 1;
      }
      .typing-cursor {
        color: var(--blue);
        font-weight: 400;
        opacity: 0;
      }
      .typing-cursor.show {
        opacity: 1;
      }
      .hero-tagline {
        margin: 18px 0 0;
        color: var(--muted);
        font-size: clamp(1rem, 1.6vw, 1.15rem);
        line-height: 1.65;
        max-width: 560px;
      }
      .hero-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 10px 18px;
        margin: 16px 0 0;
        color: var(--muted);
        font-size: 0.92rem;
      }
      .hero-meta span {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      @media (max-width: 920px) {
        .hero-meta {
          justify-content: center;
        }
      }
      .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 30px;
      }
      .hero-actions .btn {
        display: inline-flex;
        align-items: center;
        gap: 9px;
        font-weight: 700;
      }
      .hero-socials {
        display: flex;
        gap: 12px;
        margin-top: 26px;
      }
      .hero-socials a {
        width: 42px;
        height: 42px;
        border-radius: 12px;
        border: 1px solid var(--stroke);
        background: rgba(255, 255, 255, 0.05);
        display: grid;
        place-items: center;
        color: var(--muted);
        transition: transform 0.2s ease, color 0.2s ease, border-color 0.2s ease;
      }
      .hero-socials a:hover {
        transform: translateY(-3px);
        color: var(--text);
        border-color: rgba(77, 163, 255, 0.5);
      }
      .h-github { color: #f5f5f5; }
      .h-linkedin { color: #0a66c2; }
      .h-mail { color: #ea4335; }
      :host-context([data-theme='light']) .h-github { color: #181717; }
      .h-github:hover { border-color: rgba(255,255,255,.4); }
      .h-linkedin:hover { border-color: rgba(10,102,194,.6); }
      .h-mail:hover { border-color: rgba(234,67,53,.6); }
      .hero-visual {
        display: grid;
        place-items: center;
        position: relative;
      }
      .hero-parallax {
        display: grid;
        place-items: center;
        will-change: transform;
      }
      .avatar-frame {
        position: relative;
        width: min(340px, 72vw);
        aspect-ratio: 1;
        display: grid;
        place-items: center;
      }
      .avatar {
        position: relative;
        z-index: 2;
        width: 78%;
        aspect-ratio: 1;
        border-radius: 30px;
        background: linear-gradient(160deg, rgba(77, 163, 255, 0.22), rgba(123, 92, 255, 0.18));
        border: 1px solid var(--stroke);
        display: grid;
        place-items: center;
        font-size: clamp(3rem, 9vw, 5rem);
        font-weight: 900;
        letter-spacing: -0.02em;
        box-shadow: var(--shadow);
        backdrop-filter: blur(8px);
      }
      .avatar-glow {
        position: absolute;
        inset: -10%;
        border-radius: 40px;
        background: radial-gradient(circle at 30% 30%, rgba(77, 163, 255, 0.4), transparent 60%),
          radial-gradient(circle at 70% 70%, rgba(123, 92, 255, 0.4), transparent 60%);
        filter: blur(34px);
        z-index: 0;
      }
      .avatar-ring {
        position: absolute;
        inset: 4%;
        border-radius: 32px;
        border: 1px dashed rgba(123, 92, 255, 0.4);
        z-index: 1;
        animation: spin 26s linear infinite;
      }
      .avatar-badge {
        position: absolute;
        bottom: 8%;
        right: 4%;
        z-index: 3;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 8px 13px;
        border-radius: 999px;
        background: rgba(11, 16, 32, 0.85);
        border: 1px solid var(--stroke);
        font-size: 0.8rem;
        font-weight: 700;
        backdrop-filter: blur(8px);
      }
      .avatar-badge .dot {
        width: 7px;
        height: 7px;
        border-radius: 999px;
        background: var(--blue);
        box-shadow: 0 0 10px var(--blue);
      }
      .float-card {
        position: absolute;
        z-index: 4;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 15px;
        border-radius: 16px;
        animation: floaty 6s ease-in-out infinite;
      }
      .float-card strong {
        display: block;
        font-size: 0.9rem;
      }
      .float-card small {
        color: var(--muted2);
      }
      .fc-icon {
        font-size: 1.3rem;
      }
      .card-1 {
        top: 6%;
        left: -2%;
      }
      .card-2 {
        bottom: 8%;
        left: -6%;
        animation-delay: 1.5s;
      }
      .scroll-hint {
        position: absolute;
        bottom: 26px;
        left: 50%;
        transform: translateX(-50%);
        width: 26px;
        height: 42px;
        border: 1px solid var(--stroke);
        border-radius: 999px;
        display: grid;
        place-items: start center;
        padding-top: 7px;
      }
      .scroll-hint span {
        width: 4px;
        height: 8px;
        border-radius: 999px;
        background: var(--blue);
        animation: scrollHint 1.8s ease-in-out infinite;
      }
      @keyframes floaty {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      @keyframes scrollHint {
        0% { transform: translateY(0); opacity: 1; }
        70% { transform: translateY(12px); opacity: 0; }
        100% { transform: translateY(0); opacity: 0; }
      }

      @media (max-width: 920px) {
        .hero-grid {
          grid-template-columns: 1fr;
          gap: 36px;
          text-align: center;
        }
        .hero-copy {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-tagline {
          margin-left: auto;
          margin-right: auto;
        }
        .hero-role {
          justify-content: center;
        }
        .hero-visual {
          order: -1;
        }
        .float-card.card-1 {
          left: 6%;
        }
        .float-card.card-2 {
          left: 2%;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .avatar-ring, .float-card, .scroll-hint span { animation: none; }
      }
    `,
  ],
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly profile = PROFILE;
  readonly initials = 'AZ';
  typedText = '';
  typed = false;

  private phrases = [
    'Angular',
    'ASP.NET Core',
    'SQL Server',
    '.NET Web API',
    'Clean Architecture',
  ];
  private timer?: number;

  ngOnInit(): void {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      this.typedText = this.phrases[0];
      this.typed = true;
      return;
    }
    this.typeLoop();
  }

  private typeLoop(): void {
    let p = 0;
    let i = 0;
    let deleting = false;
    const tick = () => {
      const word = this.phrases[p];
      this.typedText = word.slice(0, i);
      this.typed = true;
      if (!deleting && i < word.length) {
        i++;
        this.timer = window.setTimeout(tick, 90);
      } else if (!deleting && i === word.length) {
        deleting = true;
        this.timer = window.setTimeout(tick, 1500);
      } else if (deleting && i > 0) {
        i--;
        this.timer = window.setTimeout(tick, 45);
      } else {
        deleting = false;
        p = (p + 1) % this.phrases.length;
        this.timer = window.setTimeout(tick, 320);
      }
    };
    this.timer = window.setTimeout(tick, 1200);
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }
}
