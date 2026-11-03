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
            Production-grade applications showing full-stack capabilities across
            ASP.NET Core (.NET 8), Angular, EF Core, and SQL Server.
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
                    autoplay
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
                  <div class="proj-badge-center">
                    <span class="proj-title-big">{{ project.title.split(' ')[0] }}</span>
                    <span class="proj-subtag">Live Showcase</span>
                  </div>
                  <span class="video-label"><i></i> Lighthouse 95+</span>
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

        <!-- Enterprise System Architecture & Engineering Standards Showcase -->
        <div class="reveal arch-showcase glass" [appReveal]="120">
          <div class="arch-head">
            <div>
              <span class="eyebrow" style="margin-bottom: 6px;">System Architecture &amp; Quality</span>
              <h3 class="arch-title">Enterprise .NET 8 &amp; Angular Engineering Standards</h3>
              <p class="arch-subtitle">
                How I structure maintainable, production-grade applications following Clean Architecture, strict typing, automated testing, and CI/CD pipelines.
              </p>
            </div>
          </div>

          <div class="arch-tabs" role="tablist" aria-label="Architecture topic tabs">
            <button
              class="arch-tab"
              [class.active]="selectedArchTab() === 'clean-arch'"
              (click)="selectedArchTab.set('clean-arch')"
              type="button"
              role="tab"
              [attr.aria-selected]="selectedArchTab() === 'clean-arch'"
            >
              🏛️ Clean Architecture
            </button>
            <button
              class="arch-tab"
              [class.active]="selectedArchTab() === 'security'"
              (click)="selectedArchTab.set('security')"
              type="button"
              role="tab"
              [attr.aria-selected]="selectedArchTab() === 'security'"
            >
              🔒 Security &amp; JWT
            </button>
            <button
              class="arch-tab"
              [class.active]="selectedArchTab() === 'database'"
              (click)="selectedArchTab.set('database')"
              type="button"
              role="tab"
              [attr.aria-selected]="selectedArchTab() === 'database'"
            >
              ⚡ EF Core &amp; SQL Server
            </button>
            <button
              class="arch-tab"
              [class.active]="selectedArchTab() === 'testing-cicd'"
              (click)="selectedArchTab.set('testing-cicd')"
              type="button"
              role="tab"
              [attr.aria-selected]="selectedArchTab() === 'testing-cicd'"
            >
              🧪 xUnit &amp; CI/CD
            </button>
          </div>

          <div class="arch-content">
            @if (selectedArchTab() === 'clean-arch') {
              <div class="arch-panel">
                <div class="arch-layers">
                  <div class="arch-layer-item">
                    <span class="layer-badge">Presentation</span>
                    <strong>Angular 17+ (SPA)</strong>
                    <small>Standalone Components · Reactive Forms · Route Guards · RxJS State Management</small>
                  </div>
                  <div class="layer-arrow">▼ RESTful API (JSON / HTTPS)</div>
                  <div class="arch-layer-item">
                    <span class="layer-badge">API Layer</span>
                    <strong>ASP.NET Core (.NET 8) Web API</strong>
                    <small>Dependency Injection · Rate Limiting · Global Exception Handling · Swagger / OpenAPI</small>
                  </div>
                  <div class="layer-arrow">▼ Service Contracts &amp; DTOs</div>
                  <div class="arch-layer-item">
                    <span class="layer-badge">Application Layer</span>
                    <strong>Business Logic &amp; Orchestration</strong>
                    <small>Services &amp; CQRS · FluentValidation · Business DTOs · Error Handling Policies</small>
                  </div>
                  <div class="layer-arrow">▼ Core Domain Aggregates</div>
                  <div class="arch-layer-item">
                    <span class="layer-badge">Domain Core</span>
                    <strong>Enterprise Entities &amp; Business Rules</strong>
                    <small>Pure C# Entities · Aggregate Roots · Value Objects (Zero External Third-Party Dependencies)</small>
                  </div>
                  <div class="layer-arrow">▼ Repository / Unit of Work Pattern</div>
                  <div class="arch-layer-item">
                    <span class="layer-badge">Infrastructure &amp; Persistence</span>
                    <strong>EF Core 8 &amp; SQL Server</strong>
                    <small>Code-First Migrations · ACID Transactions · Non-Clustered Composite Indexes · JWT Security</small>
                  </div>
                </div>
              </div>
            }

            @if (selectedArchTab() === 'security') {
              <div class="arch-panel arch-grid-2">
                <div class="arch-box">
                  <h4>Authentication &amp; Identity</h4>
                  <ul>
                    <li><strong>ASP.NET Core Identity:</strong> Secure password hashing (PBKDF2) and email confirmation workflows.</li>
                    <li><strong>JWT Token Lifecycle:</strong> Stateless access tokens with cryptographic signatures and refresh token rotation.</li>
                    <li><strong>Angular HTTP Interceptor:</strong> Automatic bearer token attachment and 401 Unauthorized handling.</li>
                  </ul>
                </div>
                <div class="arch-box">
                  <h4>Authorization &amp; Protection</h4>
                  <ul>
                    <li><strong>Role-Based Access Control (RBAC):</strong> Granular permissions per endpoint using <code>[Authorize(Roles = "...")]</code>.</li>
                    <li><strong>Angular Route Guards:</strong> <code>CanActivate</code> guards prevent unauthorized client navigation.</li>
                    <li><strong>API Hardening:</strong> Strict CORS policies, anti-forgery protection, and standardized <code>ProblemDetails</code> error responses.</li>
                  </ul>
                </div>
              </div>
            }

            @if (selectedArchTab() === 'database') {
              <div class="arch-panel arch-grid-2">
                <div class="arch-box">
                  <h4>EF Core Optimization</h4>
                  <ul>
                    <li><strong>Read Efficiency:</strong> <code>AsNoTracking()</code> on read-heavy queries to eliminate EF change tracker overhead.</li>
                    <li><strong>Eager vs. Explicit Loading:</strong> Intentional <code>Include()</code> usage to eliminate N+1 query problems.</li>
                    <li><strong>Code-First Migrations:</strong> Strictly version-controlled database schema evolution with automated rollbacks.</li>
                  </ul>
                </div>
                <div class="arch-box">
                  <h4>SQL Server Performance</h4>
                  <ul>
                    <li><strong>Indexing Strategy:</strong> Non-clustered and composite indexes on foreign keys and frequently filtered columns.</li>
                    <li><strong>T-SQL Stored Procedures:</strong> Precompiled execution plans for critical batch transaction queries.</li>
                    <li><strong>Connection Resilience:</strong> Execution strategies with automatic retry on transient cloud database failures.</li>
                  </ul>
                </div>
              </div>
            }

            @if (selectedArchTab() === 'testing-cicd') {
              <div class="arch-panel arch-grid-2">
                <div class="arch-box">
                  <h4>Automated Testing Suite</h4>
                  <ul>
                    <li><strong>xUnit &amp; Moq:</strong> Unit testing controller endpoints, service classes, and domain validators in isolation.</li>
                    <li><strong>Repository Mocking:</strong> Decoupled unit tests running in milliseconds without spinning up SQL Server.</li>
                    <li><strong>Jasmine &amp; Karma:</strong> Component and service spec testing for Angular reactive forms and state.</li>
                  </ul>
                </div>
                <div class="arch-box">
                  <h4>DevOps &amp; CI/CD Pipelines</h4>
                  <ul>
                    <li><strong>GitHub Actions:</strong> Automated build, linting, and test runs triggered on every pull request.</li>
                    <li><strong>Containerization:</strong> Multi-stage Dockerfiles packaging ASP.NET Core APIs and Angular Nginx builds.</li>
                    <li><strong>Zero-Downtime Releases:</strong> Automated staging and production deployments on verified main branch commits.</li>
                  </ul>
                </div>
              </div>
            }
          </div>
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
      .project-card:only-child .proj-badge-center {
        gap: 8px;
      }
      .project-card:only-child .proj-title-big {
        font-size: clamp(2rem, 4vw, 3rem);
      }
      .project-card:only-child .proj-body {
        padding: 26px 28px 24px;
      }
      .project-card:only-child .proj-desc {
        max-width: 68ch;
      }
      .proj-visual {
        position: relative;
        height: 200px;
        border-radius: var(--radius-2xl) var(--radius-2xl) 0 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .proj-video {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.86;
        transition: opacity 0.3s ease, transform 0.4s ease;
      }
      .project-card:hover .proj-video {
        opacity: 1;
        transform: scale(1.03);
      }
      .video-label {
        position: absolute;
        left: 12px;
        bottom: 12px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 999px;
        background: rgba(10, 14, 26, 0.78);
        border: 1px solid rgba(255, 255, 255, 0.12);
        backdrop-filter: blur(8px);
        font-size: 0.7rem;
        font-weight: 600;
        color: var(--text);
        letter-spacing: 0.02em;
        z-index: 2;
        pointer-events: none;
      }
      .video-label i {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #22c55e;
        box-shadow: 0 0 8px #22c55e;
      }
      .video-open {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(10, 14, 26, 0.7);
        backdrop-filter: blur(8px);
        color: var(--text);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 3;
        transition: transform 0.2s ease, background 0.2s ease;
      }
      .video-open:hover {
        transform: scale(1.08);
        background: rgba(77, 163, 255, 0.35);
      }
      .video-open span {
        font-size: 0.75rem;
        margin-left: 2px;
      }
      .proj-glow {
        position: absolute;
        inset: -20%;
        background: radial-gradient(
          circle at center,
          rgba(255, 255, 255, 0.25),
          transparent 60%
        );
        filter: blur(24px);
      }
      .proj-badge-center {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
      }
      .proj-title-big {
        font-size: 2.2rem;
        font-weight: 800;
        letter-spacing: -0.03em;
        color: #fff;
      }
      .proj-subtag {
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.7);
      }
      .proj-body {
        padding: 24px;
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      .proj-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
      }
      .proj-top h3 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 800;
        letter-spacing: -0.02em;
      }
      .proj-flag {
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        padding: 3px 8px;
        border-radius: 999px;
        background: rgba(77, 163, 255, 0.15);
        color: var(--blue);
        border: 1px solid rgba(77, 163, 255, 0.3);
      }
      .proj-tagline {
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--blue);
        margin-top: 4px;
        margin-bottom: 10px;
      }
      .proj-desc {
        color: var(--muted);
        font-size: 0.9rem;
        line-height: 1.6;
        margin-bottom: 16px;
        flex: 1;
      }
      .proj-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 20px;
      }
      .proj-actions {
        display: flex;
        gap: 14px;
        align-items: center;
      }
      .proj-link {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--text);
        transition: color 0.2s ease, transform 0.2s ease;
      }
      .proj-link:hover {
        color: var(--blue);
        transform: translateY(-1px);
      }

      /* Architecture & Engineering Standards Showcase */
      .arch-showcase {
        margin-top: 44px;
        padding: 32px;
        border-radius: var(--radius-2xl);
      }
      .arch-head {
        margin-bottom: 24px;
      }
      .arch-title {
        font-size: 1.45rem;
        font-weight: 800;
        letter-spacing: -0.02em;
        margin: 0 0 6px;
      }
      .arch-subtitle {
        color: var(--muted);
        font-size: 0.92rem;
        line-height: 1.6;
        margin: 0;
        max-width: 72ch;
      }
      .arch-tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 24px;
      }
      .arch-tab {
        padding: 8px 14px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--stroke);
        color: var(--muted);
        font-size: 0.82rem;
        font-weight: 600;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        transition: all 0.2s ease;
      }
      .arch-tab:hover {
        color: var(--text);
        background: rgba(255, 255, 255, 0.08);
      }
      .arch-tab.active {
        background: rgba(77, 163, 255, 0.18);
        border-color: rgba(77, 163, 255, 0.5);
        color: #93c5fd;
      }
      .arch-content {
        background: rgba(0, 0, 0, 0.22);
        border: 1px solid var(--stroke);
        border-radius: 16px;
        padding: 24px;
      }
      .arch-layers {
        display: flex;
        flex-direction: column;
        gap: 6px;
        align-items: center;
      }
      .arch-layer-item {
        width: 100%;
        max-width: 680px;
        padding: 12px 18px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--stroke);
        display: flex;
        flex-direction: column;
        gap: 4px;
        transition: border-color 0.2s ease;
      }
      .arch-layer-item:hover {
        border-color: rgba(77, 163, 255, 0.4);
      }
      .layer-badge {
        display: inline-block;
        align-self: flex-start;
        font-size: 0.68rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--blue);
        background: rgba(77, 163, 255, 0.12);
        padding: 2px 6px;
        border-radius: 4px;
      }
      .arch-layer-item strong {
        font-size: 0.95rem;
        color: var(--text);
      }
      .arch-layer-item small {
        font-size: 0.8rem;
        color: var(--muted2);
      }
      .layer-arrow {
        font-size: 0.72rem;
        font-weight: 700;
        color: var(--muted2);
        letter-spacing: 0.05em;
        padding: 2px 0;
      }
      .arch-grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }
      .arch-box {
        padding: 18px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--stroke);
      }
      .arch-box h4 {
        margin: 0 0 12px;
        font-size: 0.95rem;
        color: var(--blue);
        font-weight: 700;
      }
      .arch-box ul {
        margin: 0;
        padding-left: 18px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: var(--muted);
        font-size: 0.84rem;
        line-height: 1.5;
      }
      .arch-box li strong {
        color: var(--text);
      }
      .arch-box code {
        background: rgba(255, 255, 255, 0.08);
        padding: 1px 5px;
        border-radius: 4px;
        font-size: 0.78rem;
        color: #93c5fd;
      }

      /* Video Modal */
      .video-modal {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(6, 9, 18, 0.85);
        backdrop-filter: blur(12px);
        padding: 24px;
      }
      .video-modal-panel {
        position: relative;
        width: min(920px, 94vw);
        max-height: 90vh;
        border-radius: 16px;
        overflow: hidden;
        background: #000;
        border: 1px solid rgba(255, 255, 255, 0.15);
        box-shadow: 0 24px 64px rgba(0, 0, 0, 0.7);
      }
      .video-close {
        position: absolute;
        top: 14px;
        right: 14px;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.3);
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        font-size: 1.4rem;
        line-height: 1;
        cursor: pointer;
        z-index: 5;
        transition: transform 0.2s ease, background 0.2s ease;
      }
      .video-close:hover {
        transform: scale(1.1);
        background: rgba(255, 255, 255, 0.2);
      }
      .full-video {
        width: 100%;
        display: block;
        max-height: 80vh;
      }

      @media (max-width: 1024px) {
        .projects-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
      }
      @media (max-width: 768px) {
        .projects-grid {
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .arch-grid-2 {
          grid-template-columns: 1fr;
        }
        .arch-showcase {
          padding: 20px 16px;
          border-radius: 16px;
        }
        .arch-content {
          padding: 16px 14px;
        }
        .video-modal {
          padding: 12px;
        }
      }
      @media (max-width: 480px) {
        .proj-body {
          padding: 18px 16px;
        }
        .proj-title-big {
          font-size: 1.6rem;
        }
        .arch-title {
          font-size: 1.25rem;
        }
        .arch-tabs {
          gap: 6px;
          margin-bottom: 18px;
        }
        .arch-tab {
          padding: 6px 10px;
          font-size: 0.74rem;
        }
        .arch-layer-item {
          padding: 10px 12px;
        }
        .arch-layer-item strong {
          font-size: 0.88rem;
        }
        .arch-layer-item small {
          font-size: 0.74rem;
        }
      }
    `,
  ],
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
  readonly activeVideo = signal<string | null>(null);
  readonly selectedArchTab = signal<'clean-arch' | 'security' | 'database' | 'testing-cicd'>('clean-arch');

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
