import { Component, signal } from '@angular/core';
import { RevealDirective } from '../directives/reveal.directive';
import { PROFILE, EDUCATION, LANGUAGES } from '../data/portfolio.data';

interface TimezoneZone {
  id: string;
  label: string;
  location: string;
  overlapHours: string;
  localWindow: string;
  pktWindow: string;
  summary: string;
}

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
              <span class="badge-tech">Unit Testing (xUnit / Moq)</span>
              <span class="badge-tech">Docker &amp; CI/CD</span>
              <span class="badge-tech">Async Remote Collaboration</span>
              <span class="badge-tech">Problem Solver</span>
            </div>
          </div>

          <div class="about-side">
            <!-- Global Remote & Timezone Overlap Widget -->
            <div class="reveal glass remote-card card-hover" [appReveal]="120">
              <div class="remote-head">
                <span class="tz-live-dot"></span>
                <div>
                  <h3 class="side-title" style="margin: 0;">Global Remote Readiness</h3>
                  <small class="tz-sub">Lahore, PK · PKT (UTC+5) · Full-Time / Contract Ready</small>
                </div>
              </div>

              <!-- Interactive Timezone Selector Tabs with SVG Vector Flags -->
              <div class="tz-tabs" role="tablist" aria-label="Select recruiter timezone">
                @for (tz of timezones; track tz.id) {
                  <button
                    class="tz-tab"
                    [class.active]="selectedTz().id === tz.id"
                    (click)="selectTz(tz)"
                    type="button"
                    role="tab"
                    [attr.aria-selected]="selectedTz().id === tz.id"
                  >
                    <span class="flag-wrap">
                      @switch (tz.id) {
                        @case ('est') {
                          <!-- US Flag SVG -->
                          <svg class="flag-svg" viewBox="0 0 24 16" width="18" height="12" aria-hidden="true">
                            <rect width="24" height="16" fill="#b22234" rx="2"/>
                            <path d="M0 2.46h24v2.46H0zm0 4.92h24v2.46H0zm0 4.92h24v2.46H0z" fill="#fff"/>
                            <rect width="10" height="8.6" fill="#3c3b6e"/>
                            <circle cx="5" cy="4.3" r="2.2" fill="#fff"/>
                          </svg>
                        }
                        @case ('pst') {
                          <!-- US Flag SVG -->
                          <svg class="flag-svg" viewBox="0 0 24 16" width="18" height="12" aria-hidden="true">
                            <rect width="24" height="16" fill="#b22234" rx="2"/>
                            <path d="M0 2.46h24v2.46H0zm0 4.92h24v2.46H0zm0 4.92h24v2.46H0z" fill="#fff"/>
                            <rect width="10" height="8.6" fill="#3c3b6e"/>
                            <circle cx="5" cy="4.3" r="2.2" fill="#fff"/>
                          </svg>
                        }
                        @case ('gmt') {
                          <!-- UK Flag SVG -->
                          <svg class="flag-svg" viewBox="0 0 24 16" width="18" height="12" aria-hidden="true">
                            <rect width="24" height="16" fill="#012169" rx="2"/>
                            <path d="M0 0l24 16m0-16L0 16" stroke="#fff" stroke-width="3"/>
                            <path d="M0 0l24 16m0-16L0 16" stroke="#c8102e" stroke-width="1.8"/>
                            <path d="M12 0v16M0 8h24" stroke="#fff" stroke-width="5"/>
                            <path d="M12 0v16M0 8h24" stroke="#c8102e" stroke-width="3"/>
                          </svg>
                        }
                        @case ('cet') {
                          <!-- Europe EU Flag SVG -->
                          <svg class="flag-svg" viewBox="0 0 24 16" width="18" height="12" aria-hidden="true">
                            <rect width="24" height="16" fill="#003399" rx="2"/>
                            <circle cx="12" cy="8" r="4.6" fill="none" stroke="#ffcc00" stroke-width="1.4" stroke-dasharray="1.5 1.5"/>
                          </svg>
                        }
                        @case ('gst') {
                          <!-- UAE / Gulf Flag SVG -->
                          <svg class="flag-svg" viewBox="0 0 24 16" width="18" height="12" aria-hidden="true">
                            <rect width="24" height="5.33" fill="#00732f" rx="2"/>
                            <rect y="5.33" width="24" height="5.34" fill="#ffffff"/>
                            <rect y="10.67" width="24" height="5.33" fill="#000000"/>
                            <rect width="6" height="16" fill="#ff0000" rx="1"/>
                          </svg>
                        }
                      }
                    </span>
                    <span>{{ tz.label }}</span>
                  </button>
                }
              </div>

              <!-- Selected Zone Overlap Card -->
              <div class="tz-detail-box">
                <div class="tz-detail-header">
                  <div class="tz-title-wrap">
                    <span class="flag-wrap">
                      @switch (selectedTz().id) {
                        @case ('est') {
                          <svg class="flag-svg" viewBox="0 0 24 16" width="22" height="15" aria-hidden="true">
                            <rect width="24" height="16" fill="#b22234" rx="2"/>
                            <path d="M0 2.46h24v2.46H0zm0 4.92h24v2.46H0zm0 4.92h24v2.46H0z" fill="#fff"/>
                            <rect width="10" height="8.6" fill="#3c3b6e"/>
                            <circle cx="5" cy="4.3" r="2.2" fill="#fff"/>
                          </svg>
                        }
                        @case ('pst') {
                          <svg class="flag-svg" viewBox="0 0 24 16" width="22" height="15" aria-hidden="true">
                            <rect width="24" height="16" fill="#b22234" rx="2"/>
                            <path d="M0 2.46h24v2.46H0zm0 4.92h24v2.46H0zm0 4.92h24v2.46H0z" fill="#fff"/>
                            <rect width="10" height="8.6" fill="#3c3b6e"/>
                            <circle cx="5" cy="4.3" r="2.2" fill="#fff"/>
                          </svg>
                        }
                        @case ('gmt') {
                          <svg class="flag-svg" viewBox="0 0 24 16" width="22" height="15" aria-hidden="true">
                            <rect width="24" height="16" fill="#012169" rx="2"/>
                            <path d="M0 0l24 16m0-16L0 16" stroke="#fff" stroke-width="3"/>
                            <path d="M0 0l24 16m0-16L0 16" stroke="#c8102e" stroke-width="1.8"/>
                            <path d="M12 0v16M0 8h24" stroke="#fff" stroke-width="5"/>
                            <path d="M12 0v16M0 8h24" stroke="#c8102e" stroke-width="3"/>
                          </svg>
                        }
                        @case ('cet') {
                          <svg class="flag-svg" viewBox="0 0 24 16" width="22" height="15" aria-hidden="true">
                            <rect width="24" height="16" fill="#003399" rx="2"/>
                            <circle cx="12" cy="8" r="4.6" fill="none" stroke="#ffcc00" stroke-width="1.4" stroke-dasharray="1.5 1.5"/>
                          </svg>
                        }
                        @case ('gst') {
                          <svg class="flag-svg" viewBox="0 0 24 16" width="22" height="15" aria-hidden="true">
                            <rect width="24" height="5.33" fill="#00732f" rx="2"/>
                            <rect y="5.33" width="24" height="5.34" fill="#ffffff"/>
                            <rect y="10.67" width="24" height="5.33" fill="#000000"/>
                            <rect width="6" height="16" fill="#ff0000" rx="1"/>
                          </svg>
                        }
                      }
                    </span>
                    <div>
                      <strong>{{ selectedTz().location }}</strong>
                      <div class="tz-badge">{{ selectedTz().overlapHours }}</div>
                    </div>
                  </div>
                </div>

                <div class="tz-schedule">
                  <div class="tz-sched-col">
                    <span class="tz-sched-label">Your Local Time</span>
                    <strong class="tz-sched-val">{{ selectedTz().localWindow }}</strong>
                  </div>
                  <div class="tz-sched-arrow">⇄</div>
                  <div class="tz-sched-col">
                    <span class="tz-sched-label">Abdullah's Time (PKT)</span>
                    <strong class="tz-sched-val">{{ selectedTz().pktWindow }}</strong>
                  </div>
                </div>

                <p class="tz-summary">{{ selectedTz().summary }}</p>
              </div>

              <div class="remote-meta-list">
                <div class="meta-row">
                  <span class="meta-icon">✓</span>
                  <span><strong>Async-First:</strong> Clear PR reviews, Loom walkthroughs, and Swagger contracts.</span>
                </div>
                <div class="meta-row">
                  <span class="meta-icon">✓</span>
                  <span><strong>Communication:</strong> Fluent professional English for daily standups &amp; sprint planning.</span>
                </div>
              </div>
            </div>

            <!-- Education -->
            <div class="reveal glass edu-card" [appReveal]="160">
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

            <!-- Languages -->
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
      .about-grid {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 22px;
        align-items: start;
      }
      .about-copy {
        padding: 30px;
        border-radius: var(--radius-2xl);
        font-size: 1rem;
        line-height: 1.8;
        color: var(--muted);
      }
      .about-copy p + p {
        margin-top: 16px;
      }
      .about-copy strong {
        color: var(--text);
      }
      .about-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 24px;
      }
      .about-side {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .edu-card,
      .lang-card,
      .remote-card {
        padding: 22px;
        border-radius: var(--radius-2xl);
      }
      .remote-head {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 14px;
      }
      .tz-live-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #22c55e;
        box-shadow: 0 0 10px #22c55e;
        flex-shrink: 0;
      }
      .tz-sub {
        display: block;
        font-size: 0.76rem;
        color: var(--muted2);
        margin-top: 2px;
      }
      .tz-tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 14px;
      }
      .tz-tab {
        padding: 6px 11px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--stroke);
        color: var(--muted);
        font-size: 0.76rem;
        font-weight: 600;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        transition: all 0.2s ease;
      }
      .tz-tab:hover {
        color: var(--text);
        background: rgba(255, 255, 255, 0.08);
      }
      .tz-tab.active {
        background: rgba(77, 163, 255, 0.18);
        border-color: rgba(77, 163, 255, 0.5);
        color: #93c5fd;
      }
      .flag-wrap {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .flag-svg {
        display: block;
        border-radius: 2px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      }
      .tz-detail-box {
        padding: 14px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--stroke);
        margin-bottom: 12px;
      }
      .tz-detail-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 10px;
      }
      .tz-title-wrap {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .tz-title-wrap strong {
        font-size: 0.88rem;
        color: var(--text);
        display: block;
      }
      .tz-badge {
        display: inline-block;
        padding: 2px 7px;
        border-radius: 6px;
        background: rgba(34, 197, 94, 0.14);
        border: 1px solid rgba(34, 197, 94, 0.35);
        color: #86efac;
        font-size: 0.72rem;
        font-weight: 700;
        margin-top: 3px;
      }
      .tz-schedule {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 8px;
        background: rgba(0, 0, 0, 0.2);
        margin-bottom: 8px;
      }
      .tz-sched-col {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .tz-sched-label {
        font-size: 0.68rem;
        color: var(--muted2);
        text-transform: uppercase;
        letter-spacing: 0.06em;
      }
      .tz-sched-val {
        font-size: 0.8rem;
        color: var(--text);
      }
      .tz-sched-arrow {
        color: var(--blue);
        font-size: 0.9rem;
      }
      .tz-summary {
        margin: 0;
        font-size: 0.77rem;
        color: var(--muted);
        line-height: 1.45;
      }
      .remote-meta-list {
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 0.78rem;
        color: var(--muted);
      }
      .meta-row {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        line-height: 1.4;
      }
      .meta-icon {
        color: #22c55e;
        font-weight: 700;
        flex-shrink: 0;
      }
      .meta-row strong {
        color: var(--text);
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
          gap: 20px;
        }
      }
      @media (max-width: 480px) {
        .about-copy {
          padding: 22px 18px;
        }
        .edu-card,
        .lang-card,
        .remote-card {
          padding: 18px 16px;
        }
        .tz-detail-box {
          padding: 12px;
        }
        .tz-schedule {
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
        }
        .tz-sched-arrow {
          display: none;
        }
        .tz-tabs {
          gap: 5px;
        }
        .tz-tab {
          padding: 5px 9px;
          font-size: 0.72rem;
        }
      }
    `,
  ],
})
export class AboutComponent {
  readonly profile = PROFILE;
  readonly education = EDUCATION;
  readonly languages = LANGUAGES;

  readonly timezones: TimezoneZone[] = [
    {
      id: 'est',
      label: 'US East (EST)',
      location: 'New York, Boston (UTC-5)',
      overlapHours: '4–5 Hours Overlap',
      localWindow: '9:00 AM – 1:30 PM EST',
      pktWindow: '6:00 PM – 10:30 PM PKT',
      summary: 'Direct synchronous coverage for morning standups, sprint check-ins, and pair reviews.',
    },
    {
      id: 'gmt',
      label: 'UK (GMT)',
      location: 'London, Manchester (UTC+0)',
      overlapHours: 'Full Workday Overlap (7–8h)',
      localWindow: '9:00 AM – 5:00 PM GMT',
      pktWindow: '2:00 PM – 10:00 PM PKT',
      summary: 'Complete real-time collaboration across the entire European & British business day.',
    },
    {
      id: 'cet',
      label: 'Europe (CET)',
      location: 'Berlin, Amsterdam (UTC+1)',
      overlapHours: 'Full Workday Overlap (7–8h)',
      localWindow: '9:00 AM – 5:00 PM CET',
      pktWindow: '1:00 PM – 9:00 PM PKT',
      summary: 'Full workday sync with continental European teams, code reviews, and sprint check-ins.',
    },
    {
      id: 'pst',
      label: 'US West (PST)',
      location: 'San Francisco, Seattle (UTC-8)',
      overlapHours: '2–3 Hours Overlap',
      localWindow: '8:00 AM – 11:00 AM PST',
      pktWindow: '8:00 PM – 11:00 PM PKT',
      summary: 'Evening overlap for morning Pacific standups with reliable asynchronous handoffs.',
    },
    {
      id: 'gst',
      label: 'Gulf (GST)',
      location: 'Dubai, Riyadh (UTC+4)',
      overlapHours: 'All-Day Sync (8 Hours)',
      localWindow: '9:00 AM – 6:00 PM GST',
      pktWindow: '10:00 AM – 7:00 PM PKT',
      summary: 'Near-identical timezone (1h difference) with direct, real-time availability all day.',
    },
  ];

  readonly selectedTz = signal<TimezoneZone>(this.timezones[0]);

  selectTz(tz: TimezoneZone): void {
    this.selectedTz.set(tz);
  }
}
