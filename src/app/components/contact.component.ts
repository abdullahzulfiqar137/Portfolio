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
            Have an open role, project in mind, or want to discuss full-stack opportunities? Reach out via email, WhatsApp, or LinkedIn.
          </p>
        </div>

        <div class="contact-grid">
          <div class="reveal contact-info" [appReveal]="80">
            <div class="contact-tz-card glass">
              <span class="tz-dot"></span>
              <div>
                <strong>Global Remote Availability</strong>
                <small>{{ profile.timezone }}</small>
              </div>
            </div>

            <div class="contact-item glass email-item">
              <a [href]="'mailto:' + profile.email" class="email-link">
                <span class="ci-icon ci-email" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                </span>
                <span>
                  <small>Email</small>
                  <strong>{{ profile.email }}</strong>
                </span>
              </a>
              <button
                class="copy-btn"
                type="button"
                (click)="copyEmail()"
                [attr.aria-label]="copied() ? 'Email copied to clipboard' : 'Copy email address'"
                [title]="copied() ? 'Copied!' : 'Copy email'"
              >
                @if (copied()) {
                  <span class="copied-pill">Copied ✓</span>
                } @else {
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                }
              </button>
            </div>

            <a class="contact-item glass" [href]="profile.whatsappUrl" target="_blank" rel="noopener">
              <span class="ci-icon ci-phone" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </span>
              <span>
                <small>WhatsApp / Phone</small>
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
              <textarea id="message" name="message" rows="4" [(ngModel)]="model.message" required minlength="10" #message="ngModel" placeholder="Tell me about your project, team, or role..." [attr.aria-invalid]="message.invalid && message.touched"></textarea>
              @if (message.invalid && message.touched) { <small class="field-error">Please add at least 10 characters.</small> }
            </div>

            <button class="btn btn-premium btn-primary-premium submit-btn" type="submit" [disabled]="form.invalid || sending()">
              {{ sending() ? 'Sending…' : 'Send Message' }}
            </button>

            @if (sent()) {
              <div class="form-note success-box" role="status">
                <strong>✓ Message sent successfully!</strong>
                <p>Thank you for reaching out. I have received your message and will reply promptly.</p>
              </div>
            }

            @if (showFallback()) {
              <div class="fallback-card glass">
                <div class="fallback-header">
                  <span class="fallback-icon">✉️</span>
                  <div>
                    <strong>Message Prepared for Abdullah</strong>
                    <small>Launching your email client to send directly. You can also chat on WhatsApp:</small>
                  </div>
                </div>
                <div class="fallback-actions">
                  <a class="fallback-btn email-btn" [href]="fallbackMailtoUrl()">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                    <span>Open Email App</span>
                  </a>
                  <a class="fallback-btn wa-btn" [href]="fallbackWhatsAppUrl()" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                    <span>Send via WhatsApp</span>
                  </a>
                  <button type="button" class="fallback-btn copy-draft-btn" (click)="copyDraft()">
                    <span>{{ copiedDraft() ? 'Draft Copied ✓' : 'Copy Draft' }}</span>
                  </button>
                </div>
              </div>
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
      .contact-tz-card {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 18px;
        border-radius: var(--radius-xl);
        background: rgba(34, 197, 94, 0.08);
        border: 1px solid rgba(34, 197, 94, 0.28);
      }
      .tz-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #22c55e;
        box-shadow: 0 0 10px #22c55e;
        flex-shrink: 0;
      }
      .contact-tz-card strong {
        display: block;
        font-size: 0.9rem;
        color: #22c55e;
      }
      .contact-tz-card small {
        display: block;
        font-size: 0.78rem;
        color: var(--muted);
      }
      .contact-item {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 16px 20px;
        border-radius: var(--radius-xl);
        transition: transform 0.25s ease, border-color 0.25s ease;
        text-decoration: none;
        color: inherit;
      }
      .contact-item:hover {
        transform: translateY(-2px);
        border-color: rgba(77, 163, 255, 0.4);
      }
      .email-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      .email-link {
        display: flex;
        align-items: center;
        gap: 16px;
        text-decoration: none;
        color: inherit;
        flex: 1;
        min-width: 0;
      }
      .email-link strong {
        word-break: break-all;
      }
      .copy-btn {
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid var(--stroke);
        border-radius: 8px;
        color: var(--text);
        padding: 6px 10px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        font-size: 0.76rem;
      }
      .copy-btn:hover {
        background: rgba(77, 163, 255, 0.15);
        border-color: rgba(77, 163, 255, 0.4);
      }
      .copied-pill {
        color: #22c55e;
        font-weight: 600;
        font-size: 0.74rem;
      }
      .ci-icon {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--stroke);
        flex-shrink: 0;
      }
      .ci-email { color: var(--blue); }
      .ci-phone { color: #25d366; }
      .ci-linkedin { color: #0a66c2; }
      .ci-github { color: #fff; }
      .contact-item small {
        display: block;
        font-size: 0.76rem;
        color: var(--muted2);
        margin-bottom: 2px;
      }
      .contact-item strong {
        font-size: 0.95rem;
      }
      .contact-form {
        padding: 28px;
        border-radius: var(--radius-2xl);
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .field {
        display: flex;
        flex-direction: column;
        gap: 6px;
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
        font-family: inherit;
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
        opacity: 0.7;
        cursor: not-allowed;
      }
      .success-box {
        padding: 14px 16px;
        border-radius: 12px;
        background: rgba(34, 197, 94, 0.12);
        border: 1px solid rgba(34, 197, 94, 0.35);
        color: #86efac;
        font-size: 0.85rem;
      }
      .success-box strong {
        display: block;
        margin-bottom: 4px;
        color: #4ade80;
      }
      .success-box p {
        margin: 0;
        color: rgba(255, 255, 255, 0.85);
      }
      .fallback-card {
        padding: 16px;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(77, 163, 255, 0.3);
        display: flex;
        flex-direction: column;
        gap: 12px;
        animation: fadeIn 0.25s ease;
      }
      .fallback-header {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .fallback-icon {
        font-size: 1.25rem;
      }
      .fallback-header strong {
        display: block;
        font-size: 0.88rem;
        color: #93c5fd;
      }
      .fallback-header small {
        display: block;
        font-size: 0.78rem;
        color: var(--muted);
        line-height: 1.4;
      }
      .fallback-actions {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }
      .fallback-btn {
        flex: 1;
        min-width: 130px;
        padding: 9px 12px;
        border-radius: 10px;
        font-size: 0.82rem;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        text-decoration: none;
        cursor: pointer;
        transition: transform 0.2s ease, opacity 0.2s ease;
        border: 1px solid transparent;
      }
      .fallback-btn:hover {
        transform: translateY(-1px);
        opacity: 0.95;
      }
      .email-btn {
        background: rgba(77, 163, 255, 0.18);
        border-color: rgba(77, 163, 255, 0.4);
        color: #93c5fd;
      }
      .wa-btn {
        background: rgba(37, 211, 102, 0.16);
        border-color: rgba(37, 211, 102, 0.4);
        color: #86efac;
      }
      .copy-draft-btn {
        background: rgba(255, 255, 255, 0.06);
        border-color: var(--stroke);
        color: var(--text);
      }
      @media (max-width: 820px) {
        .contact-grid {
          grid-template-columns: 1fr;
        }
        .fallback-actions {
          flex-direction: column;
        }
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(6px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `,
  ],
})
export class ContactComponent {
  readonly profile = PROFILE;
  readonly sent = signal(false);
  readonly sending = signal(false);
  readonly showFallback = signal(false);
  readonly copied = signal(false);
  readonly copiedDraft = signal(false);
  readonly fallbackMailtoUrl = signal('');
  readonly fallbackWhatsAppUrl = signal('');

  // FormSubmit verified endpoint token generated for abdullahzulfiqar137@gmail.com
  private readonly endpointToken = '464f84267efdc42f20a4c6d99195abab';

  model = { name: '', email: '', message: '' };

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2200);
    } catch {
      // clipboard fallback
    }
  }

  async copyDraft(): Promise<void> {
    try {
      const draft = `From: ${this.model.name} (${this.model.email})\n\n${this.model.message}`;
      await navigator.clipboard.writeText(draft);
      this.copiedDraft.set(true);
      setTimeout(() => this.copiedDraft.set(false), 2200);
    } catch {
      // clipboard fallback
    }
  }

  async submit(form: NgForm): Promise<void> {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.sending.set(true);
    this.sent.set(false);
    this.showFallback.set(false);

    const subject = `Portfolio Inquiry from ${this.model.name}`;
    const mailto = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Hi Abdullah,\n\n${this.model.message}\n\n---\nSender: ${this.model.name}\nEmail: ${this.model.email}`
    )}`;
    const waText = `Hi Abdullah, I am ${this.model.name} (${this.model.email}). ${this.model.message}`;
    const waUrl = `https://wa.me/923334320471?text=${encodeURIComponent(waText)}`;

    this.fallbackMailtoUrl.set(mailto);
    this.fallbackWhatsAppUrl.set(waUrl);

    // 8s timeout allows external email delivery without prematurely aborting
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
      const formData = new FormData();
      formData.append('name', this.model.name);
      formData.append('email', this.model.email);
      formData.append('message', this.model.message);
      formData.append('_subject', subject);
      formData.append('_captcha', 'false');

      const response = await fetch(`https://formsubmit.co/ajax/${this.endpointToken}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      if (data && (data.success === 'false' || data.success === false)) {
        throw new Error(data.message || 'Needs activation');
      }

      this.sent.set(true);
      this.model = { name: '', email: '', message: '' };
      form.resetForm(this.model);
    } catch {
      clearTimeout(timeoutId);
      // Seamlessly launch email client with prefilled details
      this.showFallback.set(true);
      try {
        window.location.href = mailto;
      } catch {
        // user can click button
      }
    } finally {
      this.sending.set(false);
    }
  }
}
