import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import { ACHIEVEMENTS } from '../data/portfolio.data';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="section achievements">
      <div class="container">
        <div class="ach-grid">
          @for (a of achievements; track a.label; let i = $index) {
            <div class="reveal ach-card" [appReveal]="i * 90">
              <span class="ach-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path [attr.d]="a.icon" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <div class="counter" [attr.data-target]="a.value">
                {{ display[i] }}{{ a.suffix }}
              </div>
              <div class="ach-label">{{ a.label }}</div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .ach-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        padding: 40px 0;
        border-top: 1px solid var(--stroke);
        border-bottom: 1px solid var(--stroke);
      }
      .ach-card {
        text-align: center;
        padding: 10px;
      }
      .ach-icon {
        display: inline-grid;
        place-items: center;
        width: 52px;
        height: 52px;
        border-radius: 16px;
        background: rgba(77, 163, 255, 0.12);
        border: 1px solid rgba(77, 163, 255, 0.3);
        color: var(--blue);
        margin-bottom: 14px;
      }
      .counter {
        font-size: clamp(2rem, 4vw, 2.8rem);
        font-weight: 900;
        letter-spacing: -0.03em;
        background: linear-gradient(90deg, var(--blue), var(--violet));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-variant-numeric: tabular-nums;
      }
      .ach-label {
        color: var(--muted);
        font-size: 0.92rem;
        margin-top: 6px;
      }
      @media (max-width: 720px) {
        .ach-grid {
          grid-template-columns: 1fr 1fr;
          gap: 28px 16px;
        }
      }
    `,
  ],
})
export class AchievementsComponent implements OnInit, OnDestroy {
  readonly achievements = ACHIEVEMENTS;
  display = this.achievements.map(() => 0);
  private observer?: IntersectionObserver;
  private timers: number[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private el: ElementRef,
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId) || !('IntersectionObserver' in window)) {
      this.display = this.achievements.map((a) => a.value);
      return;
    }
    const node = this.el.nativeElement as HTMLElement;
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          this.runCounters();
          this.observer?.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    this.observer.observe(node);
  }

  private runCounters(): void {
    this.achievements.forEach((a, idx) => {
      const duration = 1400;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        this.display[idx] = Math.round(eased * a.value);
        if (t < 1) {
          this.timers.push(requestAnimationFrame(step));
        } else {
          this.display[idx] = a.value;
        }
      };
      this.timers.push(requestAnimationFrame(step));
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.timers.forEach((t) => cancelAnimationFrame(t));
  }
}
