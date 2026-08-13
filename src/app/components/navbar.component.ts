import { Component, HostListener, OnDestroy, signal } from '@angular/core';
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

        <nav id="primary-navigation" class="nav-links" [class.show]="menuOpen()" aria-label="Primary">
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
            aria-controls="primary-navigation"
            [attr.aria-label]="menuOpen() ? 'Close navigation menu' : 'Open navigation menu'"
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
        .navbar,
        .navbar.scrolled {
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }
        .nav-links {
          counter-reset: mobile-nav;
          position: fixed;
          top: 0;
          right: 0;
          bottom: auto;
          width: min(78vw, 320px);
          height: 100vh;
          height: 100dvh;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 8px;
          padding: max(96px, calc(env(safe-area-inset-top) + 80px)) 22px 28px;
          overflow-y: auto;
          overscroll-behavior: contain;
          background:
            radial-gradient(circle at 100% 0, rgba(255, 79, 45, 0.13), transparent 34%),
            rgba(7, 10, 18, 0.985);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-left: 1px solid var(--stroke);
          box-shadow: -20px 0 60px rgba(0, 0, 0, 0.38);
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        :host-context([data-theme='light']) .nav-links {
          background:
            radial-gradient(circle at 100% 0, rgba(255, 79, 45, 0.12), transparent 34%),
            rgba(246, 248, 255, 0.985);
        }
        .nav-links::before {
          content: 'Navigation';
          display: block;
          width: 100%;
          margin: 0 0 12px;
          padding: 0 14px 14px;
          border-bottom: 1px solid var(--stroke);
          color: var(--blue);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        .nav-links.show {
          transform: translateX(0);
        }
        .nav-links a {
          counter-increment: mobile-nav;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 14px;
          border-radius: 10px;
          font-size: 0.9rem;
          transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }
        .nav-links a::before {
          content: '0' counter(mobile-nav);
          color: rgba(255, 91, 61, 0.72);
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.08em;
        }
        .nav-links a:hover,
        .nav-links a:focus-visible {
          color: var(--text);
          background: rgba(255, 79, 45, 0.1);
          transform: translateX(4px);
        }
        .nav-links a:last-child {
          margin-top: 10px;
          justify-content: center;
          color: #fff;
          background: linear-gradient(135deg, #ff5b3d, #dc341d);
          box-shadow: 0 10px 28px rgba(255, 79, 45, 0.22);
        }
        .nav-links a:last-child::before {
          display: none;
        }
        .hamburger {
          display: block;
          z-index: 2;
        }
        .nav-cta {
          display: none;
        }
      }
      @media (max-width: 480px) {
        .navbar { padding: 12px 0; }
        .nav-links { width: 100vw; }
        .brand-name { font-size: .94rem; }
        .brand-mark { width: 32px; height: 32px; }
        .nav-actions { gap: 6px; }
      }
    `,
  ],
})
export class NavbarComponent implements OnDestroy {
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
    document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }
  closeMenu(): void {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.menuOpen()) this.closeMenu();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 860 && this.menuOpen()) this.closeMenu();
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}
