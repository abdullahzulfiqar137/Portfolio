import { Component } from '@angular/core';
import { PROFILE, SOCIALS } from '../data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <span class="brand-mark">AZ</span>
          <div>
            <strong>{{ profile.name }}</strong>
            <p>{{ profile.title }}</p>
          </div>
        </div>

        <nav class="footer-nav" aria-label="Footer">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <div class="footer-socials">
          @for (s of socials; track s.label) {
            <a class="social-link link-{{ s.icon }}" [href]="s.href" target="_blank" rel="noopener" [attr.aria-label]="s.label">
              @if (s.icon === 'github') {
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.34 9.34 0 0112 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0022 12.25C22 6.58 17.52 2 12 2z"/></svg>
              } @else if (s.icon === 'linkedin') {
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4z"/></svg>
              } @else if (s.icon === 'whatsapp') {
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              } @else {
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
              }
            </a>
          }
        </div>
      </div>

      <div class="container footer-bottom">
        <span>© {{ year }} {{ profile.name }}. All rights reserved.</span>
        <span>Built with Angular &amp; TypeScript</span>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        border-top: 1px solid var(--stroke);
        padding: 44px 0 30px;
        margin-top: 40px;
        background: rgba(7, 10, 18, 0.4);
      }
      :host-context([data-theme='light']) .footer {
        background: rgba(246, 248, 255, 0.5);
      }
      .footer-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 24px;
        flex-wrap: wrap;
      }
      .footer-brand {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .brand-mark {
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border-radius: 12px;
        font-weight: 800;
        font-size: 0.9rem;
        background: linear-gradient(135deg, var(--blue), var(--violet));
        color: #fff;
      }
      .footer-brand strong {
        letter-spacing: -0.01em;
      }
      .footer-brand p {
        margin: 2px 0 0;
        color: var(--muted2);
        font-size: 0.85rem;
      }
      .footer-nav {
        display: flex;
        gap: 18px;
        flex-wrap: wrap;
      }
      .footer-nav a {
        color: var(--muted);
        font-size: 0.9rem;
        font-weight: 600;
        transition: color 0.2s ease;
      }
      .footer-nav a:hover {
        color: var(--text);
      }
      .footer-socials {
        display: flex;
        gap: 10px;
      }
      .footer-socials a {
        width: 38px;
        height: 38px;
        border-radius: 11px;
        border: 1px solid var(--stroke);
        background: rgba(255, 255, 255, 0.05);
        display: grid;
        place-items: center;
        color: var(--muted);
        transition: transform 0.2s ease, color 0.2s ease, border-color 0.2s ease;
      }
      .footer-socials a:hover {
        transform: translateY(-3px);
        color: var(--text);
        border-color: rgba(77, 163, 255, 0.5);
      }
      .social-link.link-github { color: #f5f5f5; }
      .social-link.link-linkedin { color: #0a66c2; }
      .social-link.link-whatsapp { color: #25d366; }
      .social-link.link-mail { color: #ea4335; }
      :host-context([data-theme='light']) .social-link.link-github { color: #181717; }
      .social-link.link-github:hover { border-color: rgba(255,255,255,.4); }
      .social-link.link-linkedin:hover { border-color: rgba(10,102,194,.6); }
      .social-link.link-whatsapp:hover { border-color: rgba(37,211,102,.6); }
      .social-link.link-mail:hover { border-color: rgba(234,67,53,.6); }
      .footer-bottom {
        display: flex;
        justify-content: space-between;
        gap: 14px;
        flex-wrap: wrap;
        margin-top: 28px;
        padding-top: 22px;
        border-top: 1px solid var(--stroke);
        color: var(--muted2);
        font-size: 0.85rem;
      }
      @media (max-width: 700px) {
        .footer-inner {
          flex-direction: column;
          align-items: flex-start;
        }
      }
      @media (max-width: 480px) {
        .footer-inner, .footer-bottom { align-items: center; text-align: center; justify-content: center; }
        .footer-nav { justify-content: center; gap: 14px; }
      }
    `,
  ],
})
export class FooterComponent {
  readonly profile = PROFILE;
  readonly socials = SOCIALS;
  readonly year = new Date().getFullYear();
}
