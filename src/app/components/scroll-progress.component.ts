import {
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  template: `<div class="progress-bar" #bar></div>`,
  styles: [
    `
      :host {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        z-index: 200;
        background: transparent;
        pointer-events: none;
      }
      .progress-bar {
        height: 100%;
        width: 0%;
        background: linear-gradient(90deg, var(--blue), var(--violet), var(--pink));
        box-shadow: 0 0 12px rgba(77, 163, 255, 0.6);
        transition: width 0.08s linear;
      }
    `,
  ],
})
export class ScrollProgressComponent implements OnInit, OnDestroy {
  private handler = () => this.update();

  constructor(
    private el: ElementRef,
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.handler, { passive: true });
      this.update();
    });
  }

  private update(): void {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    const bar = this.el.nativeElement.querySelector('.progress-bar') as HTMLElement;
    if (bar) bar.style.width = `${pct}%`;
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.handler);
    }
  }
}
