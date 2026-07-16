import { Component } from '@angular/core';
import { RevealDirective } from '../directives/reveal.directive';
import { EXPERIENCE } from '../data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="experience" class="section experience">
      <div class="container">
        <div class="reveal exp-head" [appReveal]="0">
          <span class="eyebrow">Experience</span>
          <h2 class="section-title">Where I've made an impact</h2>
        </div>

        <div class="timeline">
          @for (item of items; track item.company; let i = $index) {
            <div class="timeline-item reveal" [appReveal]="i * 120">
              <span class="timeline-dot"></span>
              <div class="glass exp-card">
                <div class="exp-top">
                  <div>
                    <h4>{{ item.role }}</h4>
                    <div class="exp-company">{{ item.company }}</div>
                  </div>
                  <span class="exp-period">{{ item.period }}</span>
                </div>
                <div class="exp-location">{{ item.location }}</div>
                <ul class="exp-list">
                  @for (resp of item.responsibilities; track resp) {
                    <li>{{ resp }}</li>
                  }
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .exp-head {
        margin-bottom: 36px;
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
      .timeline {
        position: relative;
        max-width: 820px;
      }
      .timeline:before {
        content: '';
        position: absolute;
        top: 6px;
        bottom: 0;
        left: 11px;
        width: 2px;
        background: linear-gradient(180deg, rgba(77, 163, 255, 0.7), rgba(123, 92, 255, 0.25));
        opacity: 0.6;
      }
      .timeline-item {
        position: relative;
        padding-left: 44px;
        margin-bottom: 26px;
      }
      .timeline-dot {
        position: absolute;
        left: 4px;
        top: 22px;
        width: 16px;
        height: 16px;
        border-radius: 999px;
        background: rgba(7, 10, 18, 1);
        border: 2px solid var(--blue);
        box-shadow: 0 0 22px rgba(77, 163, 255, 0.5);
      }
      .exp-card {
        padding: 24px 26px;
        border-radius: var(--radius-xl);
      }
      .exp-top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 16px;
        flex-wrap: wrap;
      }
      .exp-card h4 {
        margin: 0;
        font-size: 1.15rem;
        font-weight: 800;
        letter-spacing: -0.02em;
      }
      .exp-company {
        color: var(--blue);
        font-weight: 700;
        margin-top: 4px;
      }
      .exp-period {
        padding: 6px 12px;
        border-radius: 999px;
        border: 1px solid var(--stroke);
        background: rgba(255, 255, 255, 0.05);
        font-size: 0.82rem;
        color: var(--muted);
        white-space: nowrap;
      }
      .exp-location {
        color: var(--muted2);
        font-size: 0.86rem;
        margin-top: 8px;
      }
      .exp-list {
        margin: 16px 0 0;
        padding-left: 18px;
        color: var(--muted);
        line-height: 1.7;
      }
      .exp-list li {
        margin-bottom: 6px;
      }
    `,
  ],
})
export class ExperienceComponent {
  readonly items = EXPERIENCE;
}
