import { GraduationCap, MapPin } from 'lucide-react';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { educationHistory } from '../data/experience';

export function Education() {
  return (
    <Section id="education" eyebrow="11 · Education" title="Education">
      <div className="space-y-5">
        {educationHistory.map((item, index) => {
          const details = [
            item.stream && { label: 'Stream', value: item.stream },
            item.board && { label: 'Board', value: item.board },
            item.score && { label: 'Score', value: item.score },
          ].filter((entry): entry is { label: string; value: string } => Boolean(entry));

          return (
            <Reveal key={item.id} delay={index * 0.07}>
              <article className="card flex flex-col gap-5 p-6 sm:flex-row sm:p-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-glow">
                  <GraduationCap size={24} aria-hidden="true" />
                </span>
                <div>
                  {item.period ? (
                    <p className="font-mono text-xs uppercase tracking-wide text-accent-glow">{item.period}</p>
                  ) : (
                    <p className="font-mono text-xs uppercase tracking-wide text-slate-600">Year not added yet</p>
                  )}
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                  <p className={`mt-1 ${item.institution ? 'text-slate-300' : 'text-slate-500'}`}>
                    {item.institution || 'School / college name not added yet'}
                  </p>

                  {item.location && (
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                      <MapPin size={14} aria-hidden="true" />
                      {item.location}
                    </p>
                  )}

                  {details.length > 0 && (
                    <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm">
                      {details.map((detail) => (
                        <div key={detail.label}>
                          <dt className="text-xs uppercase tracking-wide text-slate-500">{detail.label}</dt>
                          <dd className="text-slate-200">{detail.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {item.coursework && item.coursework.length > 0 && (
                    <>
                      <h4 className="mt-5 text-sm font-medium uppercase tracking-wide text-slate-500">Coursework</h4>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {item.coursework.map((course) => (
                          <li key={course} className="chip">
                            {course}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {item.focus && item.focus.length > 0 && (
                    <>
                      <h4 className="mt-5 text-sm font-medium uppercase tracking-wide text-slate-500">
                        Areas I am building alongside my degree
                      </h4>
                      <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
                        {item.focus.map((focus) => (
                          <li key={focus} className="flex gap-2">
                            <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-glow" />
                            {focus}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
