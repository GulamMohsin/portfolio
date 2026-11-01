import { useState } from 'react';
import type { FormEvent } from 'react';
import { CheckCircle2, Loader2, Mail, Send } from 'lucide-react';
import { profile } from '../data/profile';

type Status = 'idle' | 'sending' | 'success' | 'error' | 'mailto';

const endpoint = import.meta.env.VITE_FORM_ENDPOINT ?? '';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Two modes:
 *  1. VITE_FORM_ENDPOINT is set  -> the message is posted to that service (e.g. Formspree).
 *  2. Not set                    -> "Send" opens the visitor's email app with the message
 *                                   already written to profile.email. Works with no setup.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const useService = endpoint.length > 0;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot field: real visitors never fill it in.
    if (String(data.get('company') ?? '').length > 0) return;

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const nextErrors: Record<string, string> = {};
    if (name.length < 2) nextErrors.name = 'Please enter your name.';
    if (!emailPattern.test(email)) nextErrors.email = 'Please enter a valid email address.';
    if (message.length < 10) nextErrors.message = 'Please write at least 10 characters.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!useService) {
      if (!profile.email) {
        setStatus('error');
        return;
      }
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  const fieldClass =
    'mt-1.5 w-full rounded-lg border border-white/10 bg-ink-950 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-accent focus:outline-none';

  return (
    <form onSubmit={onSubmit} noValidate className="card relative space-y-5 p-6 sm:p-8" aria-label="Contact form">
      {!useService && (
        <p className="flex gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
          <Mail size={18} className="mt-0.5 shrink-0 text-accent-glow" aria-hidden="true" />
          <span>Sending opens your email app with this message ready to go.</span>
        </p>
      )}

      <div>
        <label htmlFor="cf-name" className="text-sm text-slate-300">
          Name
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'cf-name-error' : undefined}
          className={fieldClass}
          placeholder="Your name"
        />
        {errors.name && (
          <p id="cf-name-error" className="mt-1 text-xs text-red-300">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="cf-email" className="text-sm text-slate-300">
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'cf-email-error' : undefined}
          className={fieldClass}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id="cf-email-error" className="mt-1 text-xs text-red-300">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="cf-message" className="text-sm text-slate-300">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'cf-message-error' : undefined}
          className={fieldClass}
          placeholder="How can I help?"
        />
        {errors.message && (
          <p id="cf-message-error" className="mt-1 text-xs text-red-300">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from people and assistive technology. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === 'sending' ? (
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
          ) : (
            <Send size={16} aria-hidden="true" />
          )}
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>

        <p role="status" aria-live="polite" className="text-sm">
          {status === 'success' && (
            <span className="inline-flex items-center gap-1.5 text-emerald-300">
              <CheckCircle2 size={16} aria-hidden="true" /> Message sent. Thank you!
            </span>
          )}
          {status === 'mailto' && (
            <span className="text-slate-300">
              Your email app should open. If it did not, write to {profile.email}.
            </span>
          )}
          {status === 'error' && (
            <span className="text-red-300">
              Something went wrong. Please email {profile.email || 'me'} directly.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
