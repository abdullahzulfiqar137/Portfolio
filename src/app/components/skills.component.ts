import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Inject,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import { SKILL_CATEGORIES } from '../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="skills" class="section skills">
      <div class="container">
        <div class="reveal skills-head" [appReveal]="0">
          <span class="eyebrow">Skills</span>
          <h2 class="section-title">Technologies I work with</h2>
          <p class="section-subtitle">
            Production-proven technologies across .NET 8, Angular, Clean Architecture,
            SQL Server, and modern developer tooling.
          </p>
        </div>

        <div class="skills-grid" #grid>
          @for (cat of categories; track cat.title) {
            <div class="reveal glass skill-card card-hover" [appReveal]="$index * 80">
              <div class="skill-card-head">
                <span class="skill-cat-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path [attr.d]="cat.icon" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <h3>{{ cat.title }}</h3>
              </div>

              <div class="skill-list">
                @for (skill of cat.skills; track skill.name) {
                  <div class="skill">
                    <div class="skill-row">
                      <span class="skill-name">
                        <span class="skill-badge">{{ skill.icon }}</span>{{ skill.name }}
                      </span>
                      <span class="skill-pct">{{ skill.level }}%</span>
                    </div>
                    <div class="skill-bar">
                      <div
                        class="skill-fill"
                        [style.width.%]="filled ? skill.level : 0"
                      ></div>
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .skills-head {
        margin-bottom: 36px;
        max-width: 640px;
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
      .skills-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 22px;
      }
      .skill-card {
        padding: 26px;
        border-radius: var(--radius-xl);
      }
      .skill-card:last-child:nth-child(odd) {
        grid-column: 1 / -1;
      }
      .skill-card:last-child:nth-child(odd) .skill-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 14px 24px;
      }
      .skill-card-head {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 20px;
      }
      .skill-cat-icon {
        width: 40px;
        height: 40px;
        border-radius: 12px;
        display: grid;
        place-items: center;
        background: rgba(77, 163, 255, 0.12);
        border: 1px solid rgba(77, 163, 255, 0.3);
        color: var(--blue);
      }
      .skill-card-head h3 {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 800;
        letter-spacing: -0.02em;
      }
      .skill-list {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .skill-row {
        gap: 12px;
      }
      .skill-name {
        display: flex;
        align-items: center;
        gap: 9px;
        min-width: 0;
        font-weight: 600;
      }
      .skill-badge {
        width: auto;
        min-width: 34px;
        height: 26px;
        flex: 0 0 auto;
        padding-inline: 6px;
        border-radius: 8px;
        display: grid;
        place-items: center;
        font-size: 0.66rem;
        font-weight: 800;
        background: rgba(123, 92, 255, 0.16);
        border: 1px solid rgba(123, 92, 255, 0.34);
        color: var(--violet);
      }
      .skill-pct {
        flex: 0 0 auto;
        font-weight: 700;
        font-size: 0.85rem;
        color: var(--muted);
      }
      @media (max-width: 760px) {
        .skills-grid {
          grid-template-columns: 1fr;
        }
        .skill-card:last-child:nth-child(odd) {
          grid-column: auto;
        }
        .skill-card:last-child:nth-child(odd) .skill-list {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }
        .skill-card { padding: 20px 18px; }
        .skill-card-head { margin-bottom: 18px; }
        .skill-list { gap: 13px; }
        .skill-name { font-size: 0.92rem; }
      }
      @media (max-width: 380px) {
        .skill-card { padding: 18px 14px; }
        .skill-name { gap: 7px; font-size: 0.86rem; }
        .skill-pct { font-size: 0.78rem; }
        .skill-badge { min-width: 28px; padding-inline: 5px; }
      }
    `,
  ],
})
export class SkillsComponent implements OnInit, OnDestroy {
  readonly categories = SKILL_CATEGORIES;
  filled = false;
  private observer?: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId) || !('IntersectionObserver' in window)) {
      this.filled = true;
      return;
    }
    const node = document.getElementById('skills');
    if (!node) {
      this.filled = true;
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          this.filled = true;
          this.observer?.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
