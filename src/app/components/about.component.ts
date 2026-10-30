import { Component } from '@angular/core';
import { RevealDirective } from '../directives/reveal.directive';
import { PROFILE, EDUCATION, LANGUAGES } from '../data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="about" class="section about">
      <div class="container">
        <div class="about-head reveal" [appReveal]="0">
          <span class="eyebrow">About Me</span>
          <h2 class="section-title">Turning ideas into reliable software</h2>
        </div>

        <div class="about-grid">
          <div class="about-copy reveal glass" [appReveal]="80">
            <p>{{ profile.summary }}</p>
            <p>
              With hands-on experience building production features at <strong>Awatech Technology Solutions</strong> and academic training in <strong>Information Technology Management</strong>, I combine solid software engineering principles with clean architecture, robust APIs, and maintainable frontend designs.
            </p>
            <div class="about-chips">
              <span class="badge-tech">Clean Architecture</span>
              <span class="badge-tech">ASP.NET Core (.NET 8)</span>
              <span class="badge-tech">Angular &amp; TypeScript</span>
              <span class="badge-tech">SQL Server</span>
              <span class="badge-tech">Repository Pattern</span>
              <span class="badge-tech">Clean Code</span>
              <span class="badge-tech">Problem Solver</span>
              <span class="badge-tech">Team Collaboration</span>
            </div>
          </div>

          <div class="about-side">
            <div class="reveal glass edu-card" [appReveal]="120">
              <h3 class="side-title">Education</h3>
              @for (edu of education; track edu.degree) {
                <div class="edu-item">
                  <div class="edu-degree">{{ edu.degree }}</div>
                  <div class="edu-school">{{ edu.school }}</div>
                  <div class="edu-meta">
                    {{ edu.location }} · {{ edu.period }}
                    @if (edu.grade) {
                      <strong> · {{ edu.grade }}</strong>
                    }
                  </div>
                </div>
              }
            </div>

            <div class="reveal glass lang-card card-hover" [appReveal]="200">
              <h3 class="side-title">Languages</h3>
              <div class="lang-list">
                @for (lang of languages; track lang.name) {
                  <div class="lang-item">
                    <span class="lang-name">{{ lang.name }}</span>
                    <span class="lang-level">{{ lang.level }}</span>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .about-head {
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
      .about-grid {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 28px;
        align-items: stretch;
      }
      .about-copy {
        padding: 30px;
        border-radius: var(--radius-xl);
      }
      .about-copy p {
        color: var(--muted);
        line-height: 1.75;
        margin: 0 0 16px;
      }
      .about-copy strong {
        color: var(--text);
        font-weight: 700;
      }
      .about-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 8px;
      }
      .about-side {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }
      .edu-card,
      .lang-card {
        padding: 24px;
        border-radius: var(--radius-xl);
      }
      .side-title {
        margin: 0 0 16px;
        font-size: 1.05rem;
        font-weight: 800;
        letter-spacing: -0.02em;
      }
      .edu-item + .edu-item {
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid var(--stroke);
      }
      .edu-degree {
        font-weight: 700;
        color: var(--text);
      }
      .edu-school {
        color: var(--blue);
        font-size: 0.9rem;
        margin-top: 4px;
      }
      .edu-meta {
        color: var(--muted2);
        font-size: 0.82rem;
        margin-top: 4px;
      }
      .edu-meta strong {
        color: var(--blue);
      }
      .lang-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .lang-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 14px;
        border-radius: 12px;
        border: 1px solid var(--stroke);
        background: rgba(255, 255, 255, 0.04);
      }
      .lang-name {
        font-weight: 700;
      }
      .lang-level {
        color: var(--muted);
        font-size: 0.85rem;
      }
      @media (max-width: 860px) {
        .about-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class AboutComponent {
  readonly profile = PROFILE;
  readonly education = EDUCATION;
  readonly languages = LANGUAGES;
}
