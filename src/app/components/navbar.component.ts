import { Component, signal } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { PROFILE } from '../data/portfolio.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header class="navbar" [class.scrolled]="scrolled()" [class.open]="menuOpen()">
      <div class="container nav-inner">
        <a class="brand" href="#home" (click)="closeMenu()">
          <span class="brand-mark">AZ</span>
          <span class="brand-name">Abdullah<span class="brand-dot">.</span></span>
        </a>

        <nav class="nav-links" [class.show]="menuOpen()" aria-label="Primary">
          @for (item of links; track item.href) {
            <a [href]="item.href" (click)="closeMenu()">{{ item.label }}</a>
          }
        </nav>

        <div class="nav-actions">
          <button
            class="theme-toggle"
            type="button"
            (click)="theme.toggle()"
            [attr.aria-label]="theme.theme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <span class="theme-icon">{{ theme.theme() === 'dark' ? '☾' : '☀' }}</span>
          </button>
          <a class="btn btn-premium btn-primary-premium nav-cta" [href]="'#contact'">
            Hire Me
          </a>
          <button
            class="hamburger"
            type="button"
            (click)="toggleMenu()"
            [attr.aria-expanded]="menuOpen()"
            aria-label="Toggle menu"
          >
            <span [class.x]="menuOpen()"></span>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [
    `
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        padding: 18px 0;
        transition: padding 0.3s ease, background 0.3s ease, border-color 0.3s ease;
        border-bottom: 1px solid transparent;
      }
      .navbar.scrolled {
        padding: 12px 0;
        background: rgba(7, 10, 18, 0.55);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border-bottom: 1px solid var(--stroke);
      }
      :host-context([data-theme='light']) .navbar.scrolled {
        background: rgba(246, 248, 255, 0.7);
      }
      .nav-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
      }
      .brand {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 800;
        letter-spacing: -0.02em;
      }
      .brand-mark {
        width: 34px;
        height: 34px;
        display: grid;
        place-items: center;
        border-radius: 10px;
        font-size: 0.85rem;
        background: linear-gradient(135deg, var(--blue), var(--violet));
        color: #fff;
        box-shadow: 0 8px 24px rgba(255, 75, 45, 0.3);
      }
      .brand-name {
        font-size: 1.05rem;
      }
      .brand-dot {
        color: var(--blue);
      }
      .nav-links {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .nav-links a {
        padding: 8px 14px;
        border-radius: 999px;
        color: var(--muted);
        font-weight: 600;
        font-size: 0.92rem;
        transition: color 0.2s ease, background 0.2s ease;
      }
      .nav-links a:hover {
        color: var(--text);
        background: rgba(255, 255, 255, 0.06);
      }
      .nav-actions {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .theme-toggle {
        width: 40px;
        height: 40px;
        border-radius: 999px;
        border: 1px solid var(--stroke);
        background: rgba(255, 255, 255, 0.06);
        color: var(--text);
        cursor: pointer;
        display: grid;
        place-items: center;
        transition: border-color 0.2s ease, transform 0.2s ease;
      }
      .theme-toggle:hover {
        border-color: rgba(77, 163, 255, 0.5);
        transform: translateY(-1px);
      }
      .theme-icon {
        font-size: 1.05rem;
      }
      .nav-cta {
        padding: 10px 22px;
        border-radius: 999px;
        box-shadow: 0 8px 25px rgba(255, 77, 45, 0.3);
      }
      .hamburger {
        display: none;
        width: 40px;
        height: 40px;
        border-radius: 12px;
        border: 1px solid var(--stroke);
        background: rgba(255, 255, 255, 0.06);
        cursor: pointer;
        position: relative;
      }
      .hamburger span,
      .hamburger span::before,
      .hamburger span::after {
        content: '';
        position: absolute;
        left: 50%;
        width: 18px;
        height: 2px;
        background: var(--text);
        transform: translateX(-50%);
        transition: transform 0.25s ease, opacity 0.2s ease;
      }
      .hamburger span {
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .hamburger span::before {
        top: -6px;
      }
      .hamburger span::after {
        top: 6px;
      }
      .hamburger span.x {
        background: transparent;
      }
      .hamburger span.x::before {
        transform: translate(-50%, 6px) rotate(45deg);
      }
      .hamburger span.x::after {
        transform: translate(-50%, -6px) rotate(-45deg);
      }

      @media (max-width: 860px) {
        .nav-links {
          position: fixed;
          inset: 0 0 0 auto;
          width: min(78vw, 320px);
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 4px;
          padding: 96px 22px 22px;
          background: rgba(7, 10, 18, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-left: 1px solid var(--stroke);
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        :host-context([data-theme='light']) .nav-links {
          background: rgba(246, 248, 255, 0.95);
        }
        .nav-links.show {
          transform: translateX(0);
        }
        .nav-links a {
          width: 100%;
          padding: 12px 14px;
          font-size: 1rem;
        }
        .hamburger {
          display: block;
        }
        .nav-cta {
          display: none;
        }
      }
    `,
  ],
})
export class NavbarComponent {
  readonly links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly profile = PROFILE;

  constructor(public theme: ThemeService) {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.scrolled.set(window.scrollY > 24);
      });
    }
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }
  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
