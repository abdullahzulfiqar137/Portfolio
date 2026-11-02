import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Inject,
  NgZone,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input('appReveal') delay = 0;

  private observer?: IntersectionObserver;
  private fallbackTimer?: any;

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: object,
    private zone: NgZone,
  ) {}

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.classList.add('reveal');
    if (this.delay) node.style.transitionDelay = `${this.delay}ms`;

    if (!isPlatformBrowser(this.platformId) || !('IntersectionObserver' in window)) {
      node.classList.add('is-visible');
      return;
    }

    // Check if already visible or in view
    try {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100) {
        node.classList.add('is-visible');
        return;
      }
    } catch {
      node.classList.add('is-visible');
      return;
    }

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              node.classList.add('is-visible');
              if (this.observer) {
                this.observer.disconnect();
                this.observer = undefined;
              }
              if (this.fallbackTimer) {
                clearTimeout(this.fallbackTimer);
                this.fallbackTimer = undefined;
              }
            }
          }
        },
        { threshold: 0.01, rootMargin: '150px 0px 150px 0px' },
      );

      this.observer.observe(node);

      // Fail-safe: ensure content is never permanently hidden if observer is delayed or skipped
      this.fallbackTimer = setTimeout(() => {
        node.classList.add('is-visible');
      }, 1000 + (this.delay || 0));
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
    if (this.fallbackTimer) {
      clearTimeout(this.fallbackTimer);
      this.fallbackTimer = undefined;
    }
  }
}
