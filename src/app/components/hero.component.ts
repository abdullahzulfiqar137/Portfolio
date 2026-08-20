import { Component } from '@angular/core';
import { PROFILE } from '../data/portfolio.data';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="home" class="hero">
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="hero-orbit" aria-hidden="true"></div>

      <div class="container hero-layout">
        <div class="hero-copy">
          <p class="reveal hello" [appReveal]="0">Hey! I'm Abdullah <span>✦</span></p>
          <h1 class="reveal" [appReveal]="80">
            I build digital<br />
            <em>experiences</em><br />
            that matter.
          </h1>
          <p class="reveal intro" [appReveal]="160">
            Full Stack .NET Developer crafting fast, scalable and user-focused
            products with Angular, ASP.NET Core and SQL Server.
          </p>
          <div class="reveal actions" [appReveal]="240">
            <a class="primary-action" href="#contact">Start a project <span>→</span></a>
            <a class="secondary-action" [href]="profile.resumeUrl" download>
              Download résumé <span>↓</span>
            </a>
          </div>
        </div>

        <div class="reveal portrait-wrap" [appReveal]="180">
          <div class="portrait-glow" aria-hidden="true"></div>
          <img
            class="portrait"
            src="assets/images/developer-character.webp"
            alt="Stylized illustration of Abdullah Zulfiqar"
            width="733"
            height="1100"
            fetchpriority="high"
          />
        </div>

        <div class="reveal expertise" [appReveal]="280" aria-label="Core expertise">
          <article><span class="icon">&lt;/&gt;</span><strong>Full stack<br />developer</strong></article>
          <article><span class="icon">⌘</span><strong>Angular<br />specialist</strong></article>
          <article><span class="icon">✦</span><strong>Problem<br />solver</strong></article>
        </div>
      </div>

      <div class="container overview reveal" [appReveal]="360">
        <div class="overview-copy">
          <span class="kicker">● About me</span>
          <h2>Building ideas into<br />powerful <em>digital products.</em></h2>
          <p>I turn business requirements into clean, reliable software with thoughtful interfaces.</p>
        </div>
        <div class="stat"><span>▣</span><small>Experience</small><strong>1+ Years</strong></div>
        <div class="stat"><span>⌁</span><small>Featured project</small><strong>BizOps</strong></div>
        <div class="stat"><span>◉</span><small>Core stack</small><strong>.NET · Angular</strong></div>
        <div class="stat"><span>⌖</span><small>Based in</small><strong>Lahore</strong></div>
      </div>

    </section>
  `,
  styles: [`
    :host { display: block; }
    .hero {
      min-height: 100vh;
      min-height: 100svh;
      position: relative;
      overflow: hidden;
      padding: 130px 0 34px;
      background:
        radial-gradient(circle at 61% 37%, rgba(100, 60, 255, .38), transparent 22%),
        radial-gradient(circle at 73% 42%, rgba(30, 20, 180, .22), transparent 36%),
        linear-gradient(115deg, #05060f 0%, #080a1e 46%, #0d0830 75%, #05060f 100%);
    }
    .hero-grid {
      position: absolute; inset: 80px 8% 130px 35%; opacity: .17;
      background-image: linear-gradient(rgba(77,163,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(77,163,255,.25) 1px, transparent 1px);
      background-size: 145px 145px;
      mask-image: radial-gradient(circle, #000 20%, transparent 72%);
    }
    .hero-orbit {
      position: absolute; width: 390px; aspect-ratio: 1; border-radius: 50%;
      left: 59%; top: 43%; transform: translate(-50%, -50%);
      background: radial-gradient(circle, rgba(100,80,255,.65), rgba(50,20,200,.22) 48%, transparent 70%);
      box-shadow: 0 0 100px rgba(80,60,255,.27);
    }
    .hero-layout {
      min-height: 510px; position: relative; z-index: 2;
      display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(300px, .8fr) 230px;
      align-items: center; gap: 20px;
    }
    .hello { margin: 0 0 10px; color: #4DA3FF; font-weight: 700; font-size: .92rem; }
    .hello span { color: #7B5CFF; }
    h1 { margin: 0; color: #fff; text-transform: uppercase; font-size: clamp(2.8rem, 5.2vw, 5.35rem); line-height: .98; letter-spacing: -.045em; font-weight: 900; }
    h1 em, h2 em { color: #4DA3FF; font-style: normal; }
    .intro { max-width: 570px; margin: 20px 0 0; color: #aaa3a1; line-height: 1.7; font-size: 1rem; }
    .actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 26px; }
    .actions a { display: inline-flex; align-items: center; justify-content: center; gap: 24px; padding: 13px 20px; border-radius: 7px; font-weight: 700; font-size: .88rem; transition: .2s ease; }
    .actions a:hover { transform: translateY(-3px); }
    .primary-action { color: white; background: linear-gradient(135deg, #5c7cff, #7B5CFF); box-shadow: 0 10px 28px rgba(100,80,255,.3); }
    .secondary-action { color: #eef2ff; border: 1px solid rgba(100,120,255,.55); background: rgba(5,6,25,.55); }
    .secondary-action span { color: #4DA3FF; }
    .portrait-wrap { position: relative; align-self: end; height: 555px; display: flex; justify-content: center; z-index: -1; }
    .portrait-glow { position: absolute; width: 340px; height: 340px; top: 75px; border-radius: 50%; background: rgba(100,80,255,.32); filter: blur(22px); }
    .portrait { position: relative; height: 100%; width: auto; object-fit: contain; filter: drop-shadow(0 26px 30px rgba(0,0,0,.6)); }
    .expertise { display: flex; flex-direction: column; gap: 13px; }
    .expertise article { display: flex; align-items: center; gap: 15px; min-height: 72px; padding: 15px 17px; border: 1px solid rgba(100,120,255,.2); border-radius: 7px; background: linear-gradient(135deg, rgba(20,15,55,.56), rgba(10,8,35,.65)); box-shadow: inset 0 1px rgba(255,255,255,.04); }
    .expertise .icon { color: #4DA3FF; font-size: 1.25rem; width: 26px; text-align: center; }
    .expertise strong { color: #f6f2f0; font-size: .76rem; line-height: 1.35; text-transform: uppercase; }
    .overview { position: relative; z-index: 4; display: grid; grid-template-columns: 2.1fr repeat(4, .7fr); gap: 18px; align-items: stretch; padding: 25px 34px; border: 1px solid rgba(77,163,255,.17); border-radius: 22px; background: linear-gradient(100deg, rgba(10,8,35,.95), rgba(15,12,50,.88)); box-shadow: 0 25px 70px rgba(0,0,0,.45); }
    .kicker { color: #4DA3FF; font-size: .68rem; font-weight: 800; text-transform: uppercase; }
    .overview h2 { font-size: clamp(1.25rem, 2vw, 1.8rem); margin: 9px 0; line-height: 1.12; color: white; }
    .overview-copy p { margin: 0; color: #9c9492; line-height: 1.55; font-size: .78rem; max-width: 380px; }
    .stat { min-height: 100px; border: 1px solid rgba(77,163,255,.13); border-radius: 8px; background: rgba(255,255,255,.025); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; text-align: center; }
    .stat > span { color: #4DA3FF; font-size: 1.25rem; }.stat small { color: #8891a8; font-size: .68rem; }.stat strong { color: white; font-size: .88rem; }
    @media (max-width: 1000px) {
      .hero-layout { grid-template-columns: 1.1fr .9fr; }
      .expertise { display: none; }.portrait-wrap { height: 500px; }
      .overview { grid-template-columns: 1.6fr repeat(2, 1fr); }.overview-copy { grid-row: span 2; }
    }
    @media (max-width: 720px) {
      .hero { padding: 105px 0 28px; }.hero-layout { display: flex; flex-direction: column; text-align: center; min-height: auto; }.intro { margin-inline: auto; }
      .actions { justify-content: center; }.portrait-wrap { height: 420px; order: 2; margin-top: -35px; }.hero-copy { order: 1; z-index: 2; }
      .hero-orbit { left: 50%; top: 61%; width: 310px; }.overview { margin-top: -45px; grid-template-columns: 1fr 1fr; padding: 22px; }.overview-copy { grid-column: 1 / -1; grid-row: auto; text-align: center; }
    }
    @media (max-width: 480px) {
      .hero { padding-top: 92px; }
      h1 { font-size: clamp(2.35rem, 12vw, 3.25rem); }
      .hello { font-size: .82rem; }
      .intro { font-size: .92rem; line-height: 1.6; }
      .actions { width: 100%; gap: 10px; }
      .actions a { width: 100%; min-height: 48px; gap: 14px; }
      .portrait-wrap { height: 350px; margin-top: -24px; }
      .hero-orbit { top: 59%; width: 250px; }
      .overview { margin-top: -30px; gap: 10px; padding: 18px 12px; border-radius: 14px; }
      .overview h2 { font-size: 1.2rem; }
      .stat { min-height: 88px; padding: 8px 4px; }
      .stat strong { font-size: .76rem; }
    }
  `]
})
export class HeroComponent {
  readonly profile = PROFILE;
}
