import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RevealDirective } from '../directives/reveal.directive';
import { PROFILE } from '../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RevealDirective],
  template: `
    <section id="contact" class="section contact">
      <div class="container">
        <div class="reveal contact-head" [appReveal]="0">
          <span class="eyebrow">Contact</span>
          <h2 class="section-title">Let's build something great</h2>
          <p class="section-subtitle">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div class="contact-grid">
          <div class="reveal contact-info" [appReveal]="80">
            <a class="contact-item glass" [href]="'mailto:' + profile.email">
              <span class="ci-icon ci-email" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
              </span>
              <span>
                <small>Email</small>
                <strong>{{ profile.email }}</strong>
              </span>
            </a>
            <a class="contact-item glass" [href]="tel">
              <span class="ci-icon ci-phone" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span>
                <small>Phone</small>
                <strong>{{ profile.phone }}</strong>
              </span>
            </a>
            <a class="contact-item glass" [href]="profile.linkedin" target="_blank" rel="noopener">
              <span class="ci-icon ci-linkedin" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4z"/></svg>
              </span>
              <span>
                <small>LinkedIn</small>
                <strong>abdullah-zulfiqar-</strong>
              </span>
            </a>
            <a class="contact-item glass" [href]="profile.github" target="_blank" rel="noopener">
              <span class="ci-icon ci-github" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.34 9.34 0 0112 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0022 12.25C22 6.58 17.52 2 12 2z"/></svg>
              </span>
              <span>
                <small>GitHub</small>
                <strong>abdullahzulfiqar137</strong>
              </span>
            </a>
          </div>

          <form
            class="reveal glass contact-form"
            [appReveal]="160"
            #form="ngForm"
            (ngSubmit)="submit(form)"
          >
            <div class="field">
              <label for="name">Name</label>
              <input id="name" name="name" type="text" [(ngModel)]="model.name" required minlength="2" autocomplete="name" #name="ngModel" placeholder="Your name" [attr.aria-invalid]="name.invalid && name.touched" />
              @if (name.invalid && name.touched) { <small class="field-error">Please enter your name.</small> }
            </div>
            <div class="field">
              <label for="email">Email</label>
              <input id="email" name="email" type="email" [(ngModel)]="model.email" required email autocomplete="email" #email="ngModel" placeholder="you@company.com" [attr.aria-invalid]="email.invalid && email.touched" />
              @if (email.invalid && email.touched) { <small class="field-error">Please enter a valid email.</small> }
            </div>
            <div class="field">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="4" [(ngModel)]="model.message" required minlength="10" #message="ngModel" placeholder="Tell me about your project..." [attr.aria-invalid]="message.invalid && message.touched"></textarea>
              @if (message.invalid && message.touched) { <small class="field-error">Please add at least 10 characters.</small> }
            </div>
            <button class="btn btn-premium btn-primary-premium submit-btn" type="submit" [disabled]="form.invalid || sending()">
              {{ sending() ? 'Sending…' : 'Send Message' }}
            </button>
            @if (sent()) {
              <p class="form-note success" role="status">Message sent successfully. I’ll get back to you soon.</p>
            }
            @if (submitError()) {
              <p class="form-note error" role="alert">{{ submitError() }}</p>
            }
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .contact-head {
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
      .contact-grid {
        display: grid;
        grid-template-columns: 0.9fr 1.1fr;
        gap: 22px;
        align-items: start;
      }
      .contact-info {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .contact-item {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 16px 18px;
        border-radius: var(--radius-lg);
        transition: transform 0.2s ease, border-color 0.2s ease;
      }
      .contact-item:hover {
        transform: translateY(-3px);
        border-color: rgba(77, 163, 255, 0.5);
      }
      .ci-icon {
        width: 42px;
        height: 42px;
        flex: 0 0 42px;
        border-radius: 12px;
        display: grid;
        place-items: center;
        background: rgba(77, 163, 255, 0.14);
        border: 1px solid rgba(77, 163, 255, 0.32);
        color: var(--blue);
        font-weight: 800;
      }
      .ci-email {
        color: #ea4335;
        background: rgba(234, 67, 53, 0.14);
        border-color: rgba(234, 67, 53, 0.34);
      }
      .ci-phone {
        color: #25d366;
        background: rgba(37, 211, 102, 0.14);
        border-color: rgba(37, 211, 102, 0.34);
      }
      .ci-linkedin {
        color: #0a66c2;
        background: rgba(10, 102, 194, 0.14);
        border-color: rgba(10, 102, 194, 0.34);
      }
      .ci-github {
        color: #f5f5f5;
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.24);
      }
      :host-context([data-theme='light']) .ci-github {
        color: #181717;
        background: rgba(24, 23, 23, 0.08);
        border-color: rgba(24, 23, 23, 0.24);
      }
      .contact-item small {
        display: block;
        color: var(--muted2);
        font-size: 0.78rem;
      }
      .contact-item strong {
        color: var(--text);
        font-weight: 600;
        overflow-wrap: anywhere;
      }
      .contact-form {
        padding: 26px;
        border-radius: var(--radius-xl);
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .field {
        display: flex;
        flex-direction: column;
        gap: 7px;
      }
      .field label {
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--muted);
      }
      .field input,
      .field textarea {
        padding: 12px 14px;
        border-radius: 12px;
        border: 1px solid var(--stroke);
        background: rgba(255, 255, 255, 0.04);
        color: var(--text);
        outline: none;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
        resize: vertical;
      }
      .field input:focus,
      .field textarea:focus {
        border-color: rgba(77, 163, 255, 0.55);
        box-shadow: 0 0 0 4px rgba(77, 163, 255, 0.14);
      }
      .field input::placeholder,
      .field textarea::placeholder {
        color: var(--muted2);
      }
      .field-error { color: #ff8b8b; font-size: 0.78rem; }
      .submit-btn {
        width: 100%;
        justify-content: center;
        font-weight: 700;
        cursor: pointer;
      }
      .submit-btn:disabled {
        opacity: 0.8;
        cursor: default;
      }
      .form-note {
        margin: 0;
        font-size: 0.82rem;
        color: var(--muted2);
        line-height: 1.5;
      }
      .form-note.success { color: #72dda9; }
      .form-note.error { color: #ff8b8b; }
      @media (max-width: 820px) {
        .contact-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ContactComponent {
  readonly profile = PROFILE;
  readonly sent = signal(false);
  readonly sending = signal(false);
  readonly submitError = signal('');
  readonly tel = 'tel:' + PROFILE.phone.replace(/\s/g, '');
  model = { name: '', email: '', message: '' };

  async submit(form: NgForm): Promise<void> {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    this.sending.set(true);
    this.sent.set(false);
    this.submitError.set('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: this.model.name,
          email: this.model.email,
          message: this.model.message,
          _subject: `Portfolio enquiry from ${this.model.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) throw new Error('Message service unavailable');

      this.sent.set(true);
      this.model = { name: '', email: '', message: '' };
      form.resetForm(this.model);
    } catch {
      this.submitError.set(`Message could not be sent. Please email me directly at ${PROFILE.email}.`);
    } finally {
      this.sending.set(false);
    }
  }
}
