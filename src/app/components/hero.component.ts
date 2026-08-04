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
      position: relative;
      overflow: hidden;
      padding: 130px 0 34px;
      background:
        radial-gradient(circle at 61% 37%, rgba(255, 67, 29, .42), transparent 22%),
        radial-gradient(circle at 73% 42%, rgba(156, 25, 13, .22), transparent 36%),
        linear-gradient(115deg, #09090a 0%, #100a0a 46%, #190a08 75%, #080809 100%);
    }
    .hero-grid {
      position: absolute; inset: 80px 8% 130px 35%; opacity: .17;
      background-image: linear-gradient(rgba(255,98,66,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,98,66,.3) 1px, transparent 1px);
      background-size: 145px 145px;
      mask-image: radial-gradient(circle, #000 20%, transparent 72%);
    }
    .hero-orbit {
      position: absolute; width: 390px; aspect-ratio: 1; border-radius: 50%;
      left: 59%; top: 43%; transform: translate(-50%, -50%);
      background: radial-gradient(circle, rgba(255,91,45,.7), rgba(200,39,16,.22) 48%, transparent 70%);
      box-shadow: 0 0 100px rgba(255,54,20,.27);
    }
    .hero-layout {
      min-height: 510px; position: relative; z-index: 2;
      display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(300px, .8fr) 230px;
      align-items: center; gap: 20px;
    }
    .hello { margin: 0 0 10px; color: #ff6243; font-weight: 700; font-size: .92rem; }
    .hello span { color: #ffc04b; }
    h1 { margin: 0; color: #fff; text-transform: uppercase; font-size: clamp(2.8rem, 5.2vw, 5.35rem); line-height: .98; letter-spacing: -.045em; font-weight: 900; }
    h1 em, h2 em { color: #ff4c32; font-style: normal; }
    .intro { max-width: 570px; margin: 20px 0 0; color: #aaa3a1; line-height: 1.7; font-size: 1rem; }
    .actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 26px; }
    .actions a { display: inline-flex; align-items: center; justify-content: center; gap: 24px; padding: 13px 20px; border-radius: 7px; font-weight: 700; font-size: .88rem; transition: .2s ease; }
    .actions a:hover { transform: translateY(-3px); }
    .primary-action { color: white; background: linear-gradient(135deg, #ff5d3c, #e83b25); box-shadow: 0 10px 28px rgba(245,70,37,.3); }
    .secondary-action { color: #f2efee; border: 1px solid rgba(255,91,58,.65); background: rgba(20,12,12,.55); }
    .secondary-action span { color: #ff5839; }
    .portrait-wrap { position: relative; align-self: end; height: 555px; display: flex; justify-content: center; z-index: -1; }
    .portrait-glow { position: absolute; width: 340px; height: 340px; top: 75px; border-radius: 50%; background: rgba(246,54,20,.32); filter: blur(22px); }
    .portrait { position: relative; height: 100%; width: auto; object-fit: contain; filter: drop-shadow(0 26px 30px rgba(0,0,0,.6)); }
    .expertise { display: flex; flex-direction: column; gap: 13px; }
    .expertise article { display: flex; align-items: center; gap: 15px; min-height: 72px; padding: 15px 17px; border: 1px solid rgba(255,114,79,.2); border-radius: 7px; background: linear-gradient(135deg, rgba(84,35,28,.56), rgba(43,22,19,.65)); box-shadow: inset 0 1px rgba(255,255,255,.04); }
    .expertise .icon { color: #ff583c; font-size: 1.25rem; width: 26px; text-align: center; }
    .expertise strong { color: #f6f2f0; font-size: .76rem; line-height: 1.35; text-transform: uppercase; }
    .overview { position: relative; z-index: 4; display: grid; grid-template-columns: 2.1fr repeat(4, .7fr); gap: 18px; align-items: stretch; padding: 25px 34px; border: 1px solid rgba(255,105,70,.17); border-radius: 22px; background: linear-gradient(100deg, rgba(35,20,19,.95), rgba(46,25,22,.88)); box-shadow: 0 25px 70px rgba(0,0,0,.45); }
    .kicker { color: #ff5a3d; font-size: .68rem; font-weight: 800; text-transform: uppercase; }
    .overview h2 { font-size: clamp(1.25rem, 2vw, 1.8rem); margin: 9px 0; line-height: 1.12; color: white; }
    .overview-copy p { margin: 0; color: #9c9492; line-height: 1.55; font-size: .78rem; max-width: 380px; }
    .stat { min-height: 100px; border: 1px solid rgba(255,113,80,.13); border-radius: 8px; background: rgba(255,255,255,.025); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; text-align: center; }
    .stat > span { color: #ff5036; font-size: 1.25rem; }.stat small { color: #9d9694; font-size: .68rem; }.stat strong { color: white; font-size: .88rem; }
    @media (max-width: 1000px) {
      .hero-layout { grid-template-columns: 1.1fr .9fr; }
      .expertise { display: none; }.portrait-wrap { height: 500px; }
      .overview { grid-template-columns: 1.6fr repeat(2, 1fr); }.overview-copy { grid-row: span 2; }
    }
    @media (max-width: 720px) {
      .hero { padding-top: 110px; }.hero-layout { display: flex; flex-direction: column; text-align: center; }.intro { margin-inline: auto; }
      .actions { justify-content: center; }.portrait-wrap { height: 420px; order: 2; margin-top: -35px; }.hero-copy { order: 1; z-index: 2; }
      .hero-orbit { left: 50%; top: 61%; width: 310px; }.overview { margin-top: -45px; grid-template-columns: 1fr 1fr; padding: 22px; }.overview-copy { grid-column: 1 / -1; grid-row: auto; text-align: center; }
    }
  `]
})
export class HeroComponent {
  readonly profile = PROFILE;
}
