import { Component } from '@angular/core';
import { PROFILE } from '../data/portfolio.data';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="home" class="hero">
      <div class="hero-mesh" aria-hidden="true"></div>
      <div class="hero-grid" aria-hidden="true"></div>

      <div class="container hero-layout">
        <!-- Left Column: Copy & CTAs -->
        <div class="hero-copy">
          <div class="reveal status-pill" [appReveal]="0">
            <span class="status-dot"></span>
            <span>Available for Full-Time &amp; Remote Roles</span>
          </div>

          <h1 class="reveal hero-title" [appReveal]="40">
            Architecting Scalable<br />
            <span class="gradient-text">.NET &amp; Angular</span><br />
            Enterprise Systems.
          </h1>

          <p class="reveal intro" [appReveal]="80">
            Full Stack .NET Developer with 1+ year of hands-on experience building
            high-throughput RESTful APIs with ASP.NET Core (.NET 8), Entity Framework Core,
            SQL Server, and reactive Angular interfaces following Clean Architecture.
          </p>

          <div class="reveal tech-chips" [appReveal]="120">
            <span class="chip">.NET 8</span>
            <span class="chip">ASP.NET Core</span>
            <span class="chip">Angular</span>
            <span class="chip">C#</span>
            <span class="chip">SQL Server</span>
            <span class="chip">Clean Architecture</span>
          </div>

          <div class="reveal actions" [appReveal]="160">
            <a class="primary-action" href="#contact">
              <span>Start a project</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <a class="secondary-action" [href]="profile.resumeUrl" download="Abdullah_Zulfiqar_Resume.pdf">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span>Download résumé</span>
            </a>
          </div>
        </div>

        <!-- Right Column: Interactive Code & Architecture Mockup -->
        <div class="reveal ide-mockup-wrap" [appReveal]="120">
          <div class="ide-glow" aria-hidden="true"></div>

          <!-- Top Status Pill -->
          <div class="ide-float-pill">
            <span class="pulse-dot"></span>
            <span>SQL Server · 12ms · 200 OK</span>
          </div>

          <!-- Glass Code Window -->
          <div class="ide-window glass">
            <div class="ide-header">
              <div class="window-controls">
                <span class="ctrl ctrl-close"></span>
                <span class="ctrl ctrl-min"></span>
                <span class="ctrl ctrl-max"></span>
              </div>
              <div class="ide-tabs">
                <div class="ide-tab active">
                  <span class="tab-lang csharp">C#</span>
                  <span>BizOpsController.cs</span>
                </div>
                <div class="ide-tab">
                  <span class="tab-lang ts">TS</span>
                  <span>dashboard.component.ts</span>
                </div>
              </div>
            </div>

            <div class="ide-body">
              <pre class="code-block"><code><span class="c-comment">// ASP.NET Core (.NET 8) · Clean Architecture</span>
<span class="c-attr">[ApiController]</span>
<span class="c-attr">[Route(<span class="c-str">"api/v1/[controller]"</span>)]</span>
<span class="c-kw">public class</span> <span class="c-type">BizOpsController</span> : <span class="c-type">ControllerBase</span>
&#123;
    <span class="c-kw">private readonly</span> <span class="c-type">IOrderService</span> <span class="c-var">_service</span>;

    <span class="c-attr">[HttpGet(<span class="c-str">"analytics"</span>)]</span>
    <span class="c-attr">[Authorize(Roles = <span class="c-str">"Admin,Lead"</span>)]</span>
    <span class="c-kw">public async</span> <span class="c-type">Task</span>&lt;<span class="c-type">IActionResult</span>&gt; <span class="c-fn">GetMetrics</span>()
    &#123;
        <span class="c-kw">var</span> <span class="c-var">data</span> = <span class="c-kw">await</span> <span class="c-var">_service</span>.<span class="c-fn">GetAggregatesAsync</span>();
        <span class="c-kw">return</span> <span class="c-fn">Ok</span>(<span class="c-kw">new</span> &#123; success = <span class="c-kw">true</span>, data &#125;);
    &#125;
&#125;</code></pre>
            </div>
          </div>

          <!-- Floating Badges -->
          <div class="ide-float-badge badge-left glass">
            <div class="badge-icon">⚡</div>
            <div>
              <strong>Clean Architecture</strong>
              <small>Repository &amp; DI Patterns</small>
            </div>
          </div>

          <div class="ide-float-badge badge-right glass">
            <div class="badge-icon">🛡️</div>
            <div>
              <strong>Enterprise Security</strong>
              <small>JWT &amp; ASP.NET Identity</small>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Metrics Overview -->
      <div class="container overview reveal" [appReveal]="200">
        <div class="stat-card glass">
          <span class="stat-num">1+</span>
          <div class="stat-meta">
            <strong>Years Experience</strong>
            <small>Full Stack .NET &amp; Angular</small>
          </div>
        </div>
        <div class="stat-card glass">
          <span class="stat-num">3+</span>
          <div class="stat-meta">
            <strong>Enterprise Projects</strong>
            <small>SaaS &amp; Operations Systems</small>
          </div>
        </div>
        <div class="stat-card glass">
          <span class="stat-num">95+</span>
          <div class="stat-meta">
            <strong>Google Lighthouse</strong>
            <small>Speed &amp; Code Quality</small>
          </div>
        </div>
        <div class="stat-card glass">
          <span class="stat-num">100%</span>
          <div class="stat-meta">
            <strong>Clean Code</strong>
            <small>Maintainable &amp; Reliable</small>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .hero {
      min-height: clamp(680px, 100vh, 920px);
      position: relative;
      overflow: hidden;
      padding: 120px 0 40px;
      background: #06080F;
    }
    .hero-mesh {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 18% 22%, rgba(59, 130, 246, 0.18), transparent 40%),
        radial-gradient(circle at 82% 28%, rgba(139, 92, 246, 0.22), transparent 45%),
        radial-gradient(circle at 50% 65%, rgba(30, 58, 138, 0.12), transparent 50%);
      pointer-events: none;
      z-index: 1;
    }
    .hero-grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(ellipse at center, rgba(0,0,0,0.8) 20%, transparent 75%);
      pointer-events: none;
      z-index: 1;
    }
    .hero-layout {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      align-items: center;
      gap: 40px;
      min-height: 520px;
    }
    .hero-copy {
      max-width: 620px;
    }
    .status-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      border-radius: 999px;
      background: rgba(34, 197, 94, 0.1);
      border: 1px solid rgba(34, 197, 94, 0.35);
      color: #4ade80;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.02em;
      margin-bottom: 18px;
      width: fit-content;
      box-shadow: 0 4px 16px rgba(34, 197, 94, 0.12);
    }
    .status-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #22c55e;
      box-shadow: 0 0 10px #22c55e;
      animation: pulseDot 2s infinite ease-in-out;
    }
    @keyframes pulseDot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.85); }
    }
    .hero-title {
      font-size: clamp(2.3rem, 4.4vw, 3.8rem);
      font-weight: 900;
      line-height: 1.08;
      letter-spacing: -0.04em;
      color: #fff;
      margin: 0 0 16px;
    }
    .gradient-text {
      background: linear-gradient(135deg, #38BDF8 0%, #818CF8 50%, #C084FC 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      display: inline-block;
    }
    .intro {
      color: #94A3B8;
      font-size: 1.02rem;
      line-height: 1.68;
      margin: 0 0 20px;
    }
    .tech-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 26px;
    }
    .chip {
      padding: 5px 12px;
      border-radius: 8px;
      font-size: 0.76rem;
      font-weight: 600;
      color: #CBD5E1;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: all 0.2s ease;
    }
    .chip:hover {
      background: rgba(77, 163, 255, 0.12);
      border-color: rgba(77, 163, 255, 0.35);
      color: #38BDF8;
      transform: translateY(-1px);
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      align-items: center;
    }
    .primary-action {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 13px 26px;
      border-radius: 10px;
      background: linear-gradient(135deg, #2563EB, #7C3AED);
      color: #fff;
      font-weight: 700;
      font-size: 0.92rem;
      box-shadow: 0 10px 28px rgba(37, 99, 235, 0.38);
      transition: all 0.2s ease;
    }
    .primary-action:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 34px rgba(37, 99, 235, 0.48);
      color: #fff;
    }
    .secondary-action {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 13px 24px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.14);
      color: #E2E8F0;
      font-weight: 700;
      font-size: 0.92rem;
      backdrop-filter: blur(10px);
      transition: all 0.2s ease;
    }
    .secondary-action:hover {
      transform: translateY(-2px);
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(77, 163, 255, 0.5);
      color: #fff;
    }

    /* Right Column: Code Window */
    .ide-mockup-wrap {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .ide-glow {
      position: absolute;
      width: 400px;
      height: 340px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(123, 92, 255, 0.28), rgba(59, 130, 246, 0.15), transparent 70%);
      filter: blur(40px);
      z-index: 0;
      pointer-events: none;
    }
    .ide-float-pill {
      position: absolute;
      top: -14px;
      right: 18px;
      z-index: 4;
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 6px 13px;
      border-radius: 999px;
      background: rgba(10, 14, 28, 0.85);
      border: 1px solid rgba(34, 197, 94, 0.4);
      backdrop-filter: blur(12px);
      font-size: 0.72rem;
      font-weight: 700;
      color: #86efac;
      letter-spacing: 0.02em;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    }
    .pulse-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #22c55e;
      box-shadow: 0 0 8px #22c55e;
      animation: pulseDot 1.8s infinite;
    }
    .ide-window {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 490px;
      border-radius: 14px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: linear-gradient(160deg, rgba(15, 23, 42, 0.85), rgba(7, 10, 24, 0.95));
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
      overflow: hidden;
    }
    .ide-header {
      display: flex;
      align-items: center;
      padding: 11px 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(0, 0, 0, 0.28);
      gap: 14px;
    }
    .window-controls {
      display: flex;
      gap: 7px;
    }
    .ctrl {
      width: 11px;
      height: 11px;
      border-radius: 50%;
      display: inline-block;
    }
    .ctrl-close { background: #ef4444; }
    .ctrl-min { background: #f59e0b; }
    .ctrl-max { background: #10b981; }
    .ide-tabs {
      display: flex;
      gap: 6px;
      overflow-x: auto;
    }
    .ide-tab {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 0.74rem;
      color: #64748B;
      background: transparent;
      white-space: nowrap;
    }
    .ide-tab.active {
      color: #E2E8F0;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.06);
    }
    .tab-lang {
      font-size: 0.62rem;
      font-weight: 800;
      padding: 1px 4px;
      border-radius: 4px;
    }
    .tab-lang.csharp { background: #68217a; color: #fff; }
    .tab-lang.ts { background: #3178c6; color: #fff; }
    .ide-body {
      padding: 18px 20px;
      overflow-x: auto;
    }
    .code-block {
      margin: 0;
      font-family: 'Fira Code', Consolas, Monaco, monospace;
      font-size: 0.8rem;
      line-height: 1.6;
      color: #E2E8F0;
    }
    .c-comment { color: #64748B; font-style: italic; }
    .c-attr { color: #38BDF8; }
    .c-kw { color: #C084FC; font-weight: 600; }
    .c-type { color: #60A5FA; font-weight: 600; }
    .c-fn { color: #FBBF24; }
    .c-str { color: #34D399; }
    .c-var { color: #F1F5F9; }

    .ide-float-badge {
      position: absolute;
      z-index: 4;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(15, 23, 42, 0.9);
      backdrop-filter: blur(14px);
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
    }
    .ide-float-badge.badge-left {
      bottom: -18px;
      left: -16px;
    }
    .ide-float-badge.badge-right {
      bottom: 24px;
      right: -20px;
    }
    .badge-icon {
      font-size: 1.25rem;
    }
    .ide-float-badge strong {
      display: block;
      font-size: 0.78rem;
      color: #fff;
      font-weight: 700;
    }
    .ide-float-badge small {
      display: block;
      font-size: 0.68rem;
      color: #94A3B8;
    }

    /* Overview Metrics Row */
    .overview {
      position: relative;
      z-index: 3;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-top: 50px;
    }
    .stat-card {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 18px 22px;
      border-radius: 14px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(15, 23, 42, 0.55);
      backdrop-filter: blur(12px);
      transition: all 0.2s ease;
    }
    .stat-card:hover {
      border-color: rgba(77, 163, 255, 0.35);
      transform: translateY(-2px);
      background: rgba(15, 23, 42, 0.75);
    }
    .stat-num {
      font-size: 1.85rem;
      font-weight: 900;
      letter-spacing: -0.04em;
      background: linear-gradient(135deg, #38BDF8, #818CF8);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      line-height: 1;
    }
    .stat-meta strong {
      display: block;
      font-size: 0.82rem;
      color: #fff;
      font-weight: 700;
      margin-bottom: 2px;
    }
    .stat-meta small {
      display: block;
      font-size: 0.72rem;
      color: #94A3B8;
    }

    @media (max-width: 1040px) {
      .hero-layout {
        grid-template-columns: 1fr;
        gap: 50px;
      }
      .hero-copy {
        max-width: 100%;
        text-align: center;
      }
      .status-pill {
        margin-inline: auto;
      }
      .tech-chips, .actions {
        justify-content: center;
      }
      .ide-float-badge.badge-left {
        left: 0;
      }
      .ide-float-badge.badge-right {
        right: 0;
      }
      .overview {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .hero { padding-top: 100px; }
      .hero-title { font-size: 2.1rem; }
      .intro { font-size: 0.92rem; }
      .actions { flex-direction: column; width: 100%; }
      .actions a { width: 100%; justify-content: center; }
      .ide-float-badge { display: none; }
      .ide-float-pill { top: 8px; right: 8px; font-size: 0.65rem; }
      .code-block { font-size: 0.72rem; }
      .overview { grid-template-columns: 1fr; gap: 12px; margin-top: 36px; }
    }
  `]
})
export class HeroComponent {
  readonly profile = PROFILE;
}
