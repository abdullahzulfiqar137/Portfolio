import { Component } from '@angular/core';
import { RevealDirective } from '../directives/reveal.directive';
import { TiltDirective } from '../directives/tilt.directive';
import { SERVICES } from '../data/portfolio.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RevealDirective, TiltDirective],
  template: `
    <section id="services" class="section services">
      <div class="container">
        <div class="reveal svc-head" [appReveal]="0">
          <span class="eyebrow">Services</span>
          <h2 class="section-title">How I can help you</h2>
          <p class="section-subtitle">
            End-to-end product engineering — from database schema to polished UI.
          </p>
        </div>

        <div class="services-grid">
          @for (svc of services; track svc.title; let i = $index) {
            <div class="reveal glass svc-card card-hover" [appReveal]="i * 80" [appTilt]="6">
              <span class="svc-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path [attr.d]="svc.icon" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <h3>{{ svc.title }}</h3>
              <p>{{ svc.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .svc-head {
        margin-bottom: 36px;
        max-width: 620px;
      }
      .eyebrow {
        display: inline-block;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--blue);
        margin-bottom: 10px;
      }
      .services-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 22px;
      }
      .svc-card {
        padding: 28px;
        border-radius: var(--radius-xl);
      }
      .svc-icon {
        width: 48px;
        height: 48px;
        border-radius: 14px;
        display: grid;
        place-items: center;
        background: linear-gradient(135deg, rgba(77, 163, 255, 0.18), rgba(123, 92, 255, 0.18));
        border: 1px solid rgba(123, 92, 255, 0.34);
        color: var(--blue);
        margin-bottom: 16px;
      }
      .svc-card h3 {
        margin: 0 0 10px;
        font-size: 1.1rem;
        font-weight: 800;
        letter-spacing: -0.02em;
      }
      .svc-card p {
        margin: 0;
        color: var(--muted);
        line-height: 1.65;
        font-size: 0.92rem;
      }
      @media (max-width: 900px) {
        .services-grid {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media (max-width: 620px) {
        .services-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ServicesComponent {
  readonly services = SERVICES;
}
