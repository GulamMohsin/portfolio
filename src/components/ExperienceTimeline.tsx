import { Briefcase, MapPin } from 'lucide-react';
import type { ExperienceItem } from '../types';
import { Reveal } from './Reveal';

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative space-y-8 border-l border-white/10 pl-8">
      {items.map((item, index) => (
        <li key={item.id} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[45px] flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-ink-900 text-accent-glow"
          >
            <Briefcase size={16} />
          </span>
          <Reveal delay={index * 0.05}>
            <article className="card p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-accent-glow">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
              <p className="mt-1 text-slate-300">{item.company}</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                <MapPin size={14} aria-hidden="true" />
                {item.location}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-glow" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
