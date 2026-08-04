import { Injectable, signal, effect, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<ThemeMode>(this.initial());

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    effect(() => {
      const mode = this.theme();
      if (isPlatformBrowser(this.platformId)) {
        document.documentElement.setAttribute('data-theme', mode);
        localStorage.setItem('portfolio-theme', mode);
      }
    });
  }

  toggle(): void {
    this.theme.set('dark');
  }

  private initial(): ThemeMode {
    return 'dark';
  }
}
