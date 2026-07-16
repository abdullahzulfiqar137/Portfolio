import { Component } from '@angular/core';
import { RevealDirective } from '../directives/reveal.directive';
import { TiltDirective } from '../directives/tilt.directive';
import { PROJECTS } from '../data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective, TiltDirective],
  template: `
    <section id="projects" class="section projects">
      <div class="container">
        <div class="reveal proj-head" [appReveal]="0">
          <span class="eyebrow">Featured Projects</span>
          <h2 class="section-title">Things I've built</h2>
          <p class="section-subtitle">
            Production-style applications showing my full-stack capabilities across
            the .NET and Angular ecosystem.
          </p>
        </div>

        <div class="projects-grid">
          @for (project of projects; track project.title; let i = $index) {
            <article
              class="reveal project-card card-hover"
              [appReveal]="i * 100"
              [appTilt]="8"
              (mousemove)="onMove($event, i)"
            >
              <div class="proj-visual" [style.background]="project.gradient">
                <span class="proj-glow"></span>
                <span class="proj-title-big">{{ project.title.split(' ')[0] }}</span>
              </div>
              <div class="proj-body">
                <div class="proj-top">
                  <h3>{{ project.title }}</h3>
                  @if (project.featured) {
                    <span class="proj-flag">Featured</span>
                  }
                </div>
                <span class="proj-tagline">{{ project.tagline }}</span>
                <p class="proj-desc">{{ project.description }}</p>

                <div class="proj-tags">
                  @for (tag of project.tags; track tag) {
                    <span class="badge-tech">{{ tag }}</span>
                  }
                </div>

                <div class="proj-actions">
                  <a class="proj-link" [href]="project.demo" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Live Demo
                  </a>
                  <a class="proj-link" [href]="project.github" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.34 9.34 0 0112 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0022 12.25C22 6.58 17.52 2 12 2z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .proj-head {
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
      .projects-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 22px;
      }
      .project-card {
        display: flex;
        flex-direction: column;
        position: relative;
      }
      .project-card:after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: radial-gradient(
          400px circle at var(--glare-x, 50%) var(--glare-y, 50%),
          rgba(255, 255, 255, 0.18),
          transparent 40%
        );
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        z-index: 3;
      }
      .project-card:hover:after {
        opacity: 1;
      }
      .proj-visual {
        position: relative;
        height: 130px;
        overflow: hidden;
        display: grid;
        place-items: center;
      }
      .proj-glow {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.25), transparent 55%);
      }
      .proj-title-big {
        font-size: 2.4rem;
        font-weight: 900;
        letter-spacing: -0.03em;
        color: rgba(255, 255, 255, 0.92);
        text-shadow: 0 6px 30px rgba(0, 0, 0, 0.35);
      }
      .proj-top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12px;
      }
      .proj-card h3 {
        font-size: 1.08rem;
        font-weight: 900;
        margin: 0;
      }
      .proj-flag {
        font-size: 0.7rem;
        font-weight: 700;
        padding: 4px 10px;
        border-radius: 999px;
        background: rgba(123, 92, 255, 0.18);
        border: 1px solid rgba(123, 92, 255, 0.4);
        color: var(--violet);
        white-space: nowrap;
      }
      .proj-tagline {
        color: var(--blue);
        font-weight: 600;
        font-size: 0.86rem;
      }
      .proj-desc {
        color: var(--muted);
        line-height: 1.6;
        margin: 10px 0 14px;
        font-size: 0.92rem;
      }
      .proj-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .proj-tags .badge-tech {
        font-size: 0.76rem;
        padding: 6px 10px;
      }
      @media (max-width: 980px) {
        .projects-grid {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media (max-width: 680px) {
        .projects-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ProjectsComponent {
  readonly projects = PROJECTS;

  onMove(event: MouseEvent, index: number): void {
    const cards = document.querySelectorAll('.project-card');
    const card = cards[index] as HTMLElement | undefined;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }
}
