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
          <span class="brand-name">Abdullah Zulfiqar<span class="brand-dot"></span></span>
        </a>

        <nav id="primary-navigation" class="nav-links" [class.show]="menuOpen()" aria-label="Primary">
          @for (item of links; track item.href) {
            <a [href]="item.href" (click)="closeMenu()">{{ item.label }}</a>
          }
          <a class="mobile-resume-link" [href]="profile.resumeUrl" download="Abdullah_Zulfiqar_Resume.pdf" (click)="closeMenu()">
            Download CV ↓
          </a>
          <a class="mobile-hire-link" href="#contact" (click)="closeMenu()">
            Hire Me →
          </a>
        </nav>

        <div class="nav-actions">
          <a
            class="nav-resume-btn"
            [href]="profile.resumeUrl"
            download="Abdullah_Zulfiqar_Resume.pdf"
            aria-label="Download Résumé"
            title="Download Résumé (PDF)"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>CV</span>
          </a>

          <a class="nav-hire-btn" href="#contact">
            <span>Hire Me</span>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4">
              <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
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
        flex-wrap: nowrap;
      }
      .brand {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 800;
        letter-spacing: -0.02em;
        flex-shrink: 0;
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
        box-shadow: 0 8px 24px rgba(77, 163, 255, 0.3);
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
      .mobile-resume-link,
      .mobile-hire-link {
        display: none !important;
      }
      .nav-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
      }
      .nav-resume-btn,
      .nav-hire-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        height: 38px;
        padding: 0 16px;
        border-radius: 999px;
        font-family: inherit;
        font-size: 0.83rem;
        font-weight: 600;
        letter-spacing: -0.01em;
        text-decoration: none;
        box-sizing: border-box;
        line-height: 1;
        white-space: nowrap;
        user-select: none;
        cursor: pointer;
        transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                    background 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                    border-color 0.2s cubic-bezier(0.16, 1, 0.3, 1),
                    box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .nav-resume-btn {
        background: rgba(255, 255, 255, 0.05);
        color: #e2e8f0;
        border: 1px solid rgba(255, 255, 255, 0.14);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
      }
      .nav-resume-btn svg {
        color: #38bdf8;
        transition: transform 0.2s ease;
      }
      .nav-resume-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(56, 189, 248, 0.45);
        color: #ffffff;
        transform: translateY(-1px);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
      }
      .nav-resume-btn:hover svg {
        transform: translateY(1.5px);
      }
      .nav-resume-btn:active {
        transform: translateY(0);
      }
      :host-context([data-theme='light']) .nav-resume-btn {
        background: rgba(0, 0, 0, 0.04);
        color: #1e293b;
        border-color: rgba(0, 0, 0, 0.1);
      }
      :host-context([data-theme='light']) .nav-resume-btn:hover {
        background: rgba(0, 0, 0, 0.08);
        border-color: rgba(56, 189, 248, 0.6);
        color: #0f172a;
      }

      .nav-hire-btn {
        background: linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%);
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.22);
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.32),
          0 4px 16px rgba(79, 70, 229, 0.35);
      }
      .nav-hire-btn svg {
        color: rgba(255, 255, 255, 0.9);
        transition: transform 0.2s ease;
      }
      .nav-hire-btn:hover {
        background: linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%);
        border-color: rgba(255, 255, 255, 0.4);
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.45),
          0 6px 22px rgba(99, 102, 241, 0.55);
        transform: translateY(-1px);
        color: #ffffff;
      }
      .nav-hire-btn:hover svg {
        transform: translateX(2.5px);
      }
      .nav-hire-btn:active {
        transform: translateY(0);
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.18),
          0 2px 8px rgba(79, 70, 229, 0.3);
      }

      .hamburger {
        display: none;
        width: 38px;
        height: 38px;
        min-width: 38px;
        flex-shrink: 0;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.14);
        background: rgba(255, 255, 255, 0.05);
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
            radial-gradient(circle at 100% 0, rgba(77, 100, 255, 0.13), transparent 34%),
            rgba(5, 6, 20, 0.985);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-left: 1px solid var(--stroke);
          box-shadow: -20px 0 60px rgba(0, 0, 0, 0.38);
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        :host-context([data-theme='light']) .nav-links {
          background:
            radial-gradient(circle at 100% 0, rgba(77, 100, 255, 0.12), transparent 34%),
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
          background: rgba(77, 100, 255, 0.1);
          transform: translateX(4px);
        }
        .mobile-resume-link {
          display: flex !important;
          margin-top: 14px;
          color: #fff !important;
          border: 1px solid rgba(77, 163, 255, 0.4);
          background: rgba(77, 163, 255, 0.14) !important;
          justify-content: center;
        }
        .mobile-resume-link::before {
          display: none !important;
        }
        .mobile-hire-link {
          display: flex !important;
          margin-top: 8px;
          color: #fff !important;
          background: linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%) !important;
          justify-content: center;
          font-weight: 700;
          box-shadow: 0 4px 16px rgba(79, 70, 229, 0.4);
        }
        .mobile-hire-link::before {
          display: none !important;
        }
        .hamburger {
          display: block;
          z-index: 2;
        }
        .nav-hire-btn,
        .nav-resume-btn {
          display: none;
        }
      }
      @media (max-width: 480px) {
        .navbar { padding: 12px 0; }
        .nav-links { width: 100vw; }
        .brand-name { font-size: clamp(.78rem, 3.7vw, .94rem); }
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
