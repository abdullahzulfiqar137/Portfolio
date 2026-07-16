import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  Inject,
  OnInit,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appTilt]',
  standalone: true,
  host: {
    '(pointerenter)': 'enable()',
    '(pointermove)': 'move($event)',
    '(pointerleave)': 'reset()',
  },
})
export class TiltDirective implements OnInit, OnDestroy {
  @Input('appTilt') max = 10;
  @Input() glare = true;

  private enabled = false;
  private raf = 0;

  constructor(
    private el: ElementRef<HTMLElement>,
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (window.matchMedia('(hover: none)').matches) return;
      this.el.nativeElement.style.transformStyle = 'preserve-3d';
      this.el.nativeElement.style.willChange = 'transform';
    }
  }

  enable(): void {
    this.enabled = true;
  }

  move(e: PointerEvent): void {
    if (!this.enabled || !isPlatformBrowser(this.platformId)) return;
    const node = this.el.nativeElement;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = (-py * this.max).toFixed(2);
    const ry = (px * this.max).toFixed(2);
    this.zone.runOutsideAngular(() => {
      cancelAnimationFrame(this.raf);
      this.raf = requestAnimationFrame(() => {
        node.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
        if (this.glare) {
          node.style.setProperty('--glare-x', `${(px + 0.5) * 100}%`);
          node.style.setProperty('--glare-y', `${(py + 0.5) * 100}%`);
        }
      });
    });
  }

  reset(): void {
    this.enabled = false;
    const node = this.el.nativeElement;
    node.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateZ(0)';
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf);
  }
}
