import {
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  Inject,
  OnInit,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective implements OnInit, OnDestroy {
  @Input('appParallax') speed = 0.15;

  private handler = () => this.update();

  constructor(
    private el: ElementRef<HTMLElement>,
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.handler, { passive: true });
      window.addEventListener('resize', this.handler, { passive: true });
      this.update();
    });
  }

  private update(): void {
    const node = this.el.nativeElement;
    const rect = node.getBoundingClientRect();
    const offset = rect.top + window.scrollY;
    const delta = window.scrollY - offset + window.innerHeight / 2;
    node.style.transform = `translate3d(0, ${(-delta * this.speed).toFixed(2)}px, 0)`;
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.handler);
      window.removeEventListener('resize', this.handler);
    }
  }
}
