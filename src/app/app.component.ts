import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Inject,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService } from './services/theme.service';
import { GradientBgComponent } from './components/gradient-bg.component';
import { ScrollProgressComponent } from './components/scroll-progress.component';
import { ParticlesComponent } from './components/particles.component';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { SkillsComponent } from './components/skills.component';
import { ExperienceComponent } from './components/experience.component';
import { ProjectsComponent } from './components/projects.component';
import { ServicesComponent } from './components/services.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    GradientBgComponent,
    ScrollProgressComponent,
    ParticlesComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('cursor') cursorRef?: ElementRef<HTMLElement>;
  @ViewChild('toTop') toTopRef?: ElementRef<HTMLElement>;
  loading = true;

  private cursorX = 0;
  private cursorY = 0;
  private raf = 0;
  private scrollHandler = () => this.onScroll();

  constructor(
    public theme: ThemeService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      this.animateCursor();
      window.addEventListener('mousemove', (e) => this.onMouseMove(e));
      window.addEventListener('mousedown', () => this.toggleCursor(true));
      window.addEventListener('mouseup', () => this.toggleCursor(false));
      const hover = document.querySelectorAll('a, button, .project-card, input, textarea');
      hover.forEach((el) =>
        el.addEventListener('mouseenter', () => this.scaleCursor(true)),
      );
      hover.forEach((el) =>
        el.addEventListener('mouseleave', () => this.scaleCursor(false)),
      );
    }

    window.addEventListener('scroll', this.scrollHandler, { passive: true });

    const hide = () => (this.loading = false);
    if (document.readyState === 'complete') {
      setTimeout(hide, 100);
    } else {
      window.addEventListener('load', () => setTimeout(hide, 100));
    }
    setTimeout(hide, 1000);
  }

  private onMouseMove(e: MouseEvent): void {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;
    this.cursorRef?.nativeElement.classList.add('is-visible');
  }
  private toggleCursor(down: boolean): void {
    this.cursorRef?.nativeElement.classList.toggle('is-down', down);
  }
  private scaleCursor(big: boolean): void {
    this.cursorRef?.nativeElement.classList.toggle('is-hover', big);
  }
  private animateCursor = (): void => {
    const el = this.cursorRef?.nativeElement;
    if (el) {
      el.style.left = `${this.cursorX}px`;
      el.style.top = `${this.cursorY}px`;
    }
    this.raf = requestAnimationFrame(this.animateCursor);
  };

  private onScroll(): void {
    this.toTopRef?.nativeElement.classList.toggle(
      'is-visible',
      window.scrollY > 600,
    );
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf);
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }
}
