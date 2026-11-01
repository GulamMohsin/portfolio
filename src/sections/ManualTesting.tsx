import { ChevronRight } from 'lucide-react';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { TopicGroups } from '../components/TopicGroups';
import { bugReportFields, defectLifecycle, manualGroups } from '../data/topics';

export function ManualTesting() {
  return (
    <Section
      id="manual-testing"
      eyebrow="03 · Manual Testing"
      title="Manual Testing"
      description="Good automation starts with good test design. These are the manual testing areas I am studying and practising."
    >
      <TopicGroups groups={manualGroups} />

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <article className="card h-full p-6">
            <h3 className="font-medium text-white">Defect life cycle</h3>
            <p className="mt-1 text-sm text-slate-400">
              A typical path of a defect from discovery to closure (a rejected fix is reopened).
            </p>
            <ol className="mt-5 flex flex-wrap items-center gap-y-3 text-sm">
              {defectLifecycle.map((stage, index) => (
                <li key={stage} className="flex items-center">
                  <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200">
                    {stage}
                  </span>
                  {index < defectLifecycle.length - 1 && (
                    <ChevronRight size={16} className="mx-1 text-slate-600" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="card h-full p-6">
            <h3 className="font-medium text-white">Anatomy of a good bug report</h3>
            <p className="mt-1 text-sm text-slate-400">The fields I aim to include so a defect can be reproduced.</p>
            <dl className="mt-4 divide-y divide-white/10 text-sm">
              {bugReportFields.map((item) => (
                <div key={item.field} className="flex flex-col gap-0.5 py-2 sm:flex-row sm:gap-4">
                  <dt className="w-44 shrink-0 text-slate-200">{item.field}</dt>
                  <dd className="text-slate-400">{item.purpose}</dd>
                </div>
              ))}
            </dl>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
