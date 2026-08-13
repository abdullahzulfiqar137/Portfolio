import { Component, HostListener, signal } from '@angular/core';
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
                @if (project.video) {
                  <video
                    class="proj-video"
                    [src]="project.videoPreview || project.video"
                    [autoplay]="!!project.videoPreview"
                    muted
                    loop
                    playsinline
                    preload="metadata"
                    [attr.aria-label]="project.title + ' product demonstration'"
                  ></video>
                  <span class="video-label"><i></i> Live product preview</span>
                  <button
                    class="video-open"
                    type="button"
                    (click)="openVideo(project.video)"
                    [attr.aria-label]="'Play full video for ' + project.title"
                  >
                    <span>▶</span>
                  </button>
                } @else {
                  <span class="proj-glow"></span>
                  <span class="proj-title-big">{{ project.title.split(' ')[0] }}</span>
                }
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
                  @if (project.demo !== project.github) {
                  <a class="proj-link" [href]="project.demo" target="_blank" rel="noopener" [attr.aria-label]="'Open live demo for ' + project.title">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Live Demo
                  </a>
                  }
                  <a class="proj-link" [href]="project.github" target="_blank" rel="noopener" [attr.aria-label]="project.demo === project.github ? 'View GitHub profile' : 'View source for ' + project.title">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.34 9.34 0 0112 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0022 12.25C22 6.58 17.52 2 12 2z" />
                    </svg>
                    {{ project.demo === project.github ? 'View on GitHub' : 'Source code' }}
                  </a>
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    @if (activeVideo()) {
      <div class="video-modal" role="dialog" aria-modal="true" aria-label="Project demonstration video" (click)="closeVideo()">
        <div class="video-modal-panel" (click)="$event.stopPropagation()">
          <button class="video-close" type="button" (click)="closeVideo()" aria-label="Close video">×</button>
          <video class="full-video" [src]="activeVideo()" autoplay muted controls playsinline></video>
        </div>
      </div>
    }
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
      .project-card:only-child {
        grid-column: 1 / -1;
        width: min(100%, 780px);
        justify-self: center;
      }
      .project-card:only-child .proj-visual {
        height: 210px;
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
      .proj-video {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
      }
      .video-label {
        position: absolute;
        left: 14px;
        bottom: 12px;
        z-index: 2;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 7px 11px;
        border-radius: 999px;
        color: #fff;
        background: rgba(10, 8, 8, 0.82);
        border: 1px solid rgba(255, 98, 61, 0.35);
        backdrop-filter: blur(9px);
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
      .video-label i {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #ff5b3d;
        box-shadow: 0 0 10px rgba(255, 91, 61, 0.85);
      }
      .video-open {
        position: absolute;
        inset: 0;
        z-index: 3;
        border: 0;
        background: transparent;
        cursor: pointer;
        display: grid;
        place-items: center;
      }
      .video-open span {
        width: 58px;
        height: 58px;
        display: grid;
        place-items: center;
        padding-left: 4px;
        border-radius: 50%;
        color: #fff;
        background: rgba(10, 8, 8, 0.72);
        border: 1px solid rgba(255, 98, 61, 0.48);
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.45);
        backdrop-filter: blur(10px);
        opacity: 0;
        transform: scale(0.88);
        transition: opacity 0.2s ease, transform 0.2s ease, background 0.2s ease;
      }
      .proj-visual:hover .video-open span,
      .video-open:focus-visible span {
        opacity: 1;
        transform: scale(1);
      }
      .video-open:hover span { background: rgba(231, 61, 34, 0.9); }
      .video-modal {
        position: fixed;
        inset: 0;
        z-index: 10000;
        display: grid;
        place-items: center;
        padding: 24px;
        background: rgba(3, 3, 3, 0.9);
        backdrop-filter: blur(14px);
        animation: modalIn 0.2s ease-out;
      }
      .video-modal-panel {
        position: relative;
        width: min(1200px, 96vw);
        max-height: 92vh;
        border-radius: 14px;
        overflow: hidden;
        border: 1px solid rgba(255, 98, 61, 0.3);
        background: #050505;
        box-shadow: 0 30px 100px rgba(0, 0, 0, 0.72);
      }
      .full-video {
        display: block;
        width: 100%;
        max-height: 88vh;
        background: #000;
      }
      .video-close {
        position: absolute;
        top: 12px;
        right: 12px;
        z-index: 2;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(8, 8, 8, 0.8);
        color: #fff;
        font-size: 1.7rem;
        line-height: 1;
        cursor: pointer;
      }
      @keyframes modalIn { from { opacity: 0; } to { opacity: 1; } }
      @media (hover: none) { .video-open span { opacity: 1; transform: scale(1); } }
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
      .project-card h3 {
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
        .video-modal { padding: 8px; }
        .video-modal-panel { width: 100%; border-radius: 9px; }
        .video-close { width: 38px; height: 38px; top: 8px; right: 8px; }
        .project-card:only-child .proj-visual { height: 185px; }
        .proj-body { padding: 20px 16px; }
        .proj-actions { flex-wrap: wrap; gap: 10px; }
        .proj-link { min-height: 44px; }
        .full-video { max-height: calc(100dvh - 16px); }
      }
      @media (max-width: 380px) {
        .proj-top { flex-direction: column; }
        .proj-flag { align-self: flex-start; }
        .project-card:only-child .proj-visual,
        .proj-visual { height: 160px; }
        .video-label { left: 9px; bottom: 9px; font-size: 0.61rem; }
      }
    `,
  ],
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
  readonly activeVideo = signal<string | null>(null);

  openVideo(src: string): void {
    this.activeVideo.set(src);
    document.body.style.overflow = 'hidden';
  }

  closeVideo(): void {
    this.activeVideo.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.activeVideo()) this.closeVideo();
  }

  onMove(event: MouseEvent, index: number): void {
    const cards = document.querySelectorAll('.project-card');
    const card = cards[index] as HTMLElement | undefined;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }
}
