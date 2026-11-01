import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  /** Slightly different background to separate neighbouring sections. */
  alt?: boolean;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, alt, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`section ${
        alt ? 'border-y border-white/5 bg-gradient-to-b from-ink-900/80 via-ink-900/50 to-ink-900/80' : ''
      }`}
    >
      <div className="container-x">
        <Reveal>
          <header className="mb-12 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-glow">{eyebrow}</p>
            <h2
              id={`${id}-title`}
              className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              {title}
            </h2>
            {description && <p className="mt-4 leading-relaxed text-slate-400">{description}</p>}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
