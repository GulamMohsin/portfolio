import { Check } from 'lucide-react';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { Icon } from '../components/Icon';
import { CodeBlock } from '../components/CodeBlock';
import { FlowDiagram } from '../components/FlowDiagram';
import { StatusBadge } from '../components/StatusBadge';
import { playwrightArchitecture, playwrightFolderStructure } from '../data/topics';

const framework = {
  title: 'Playwright with JavaScript',
  stack: 'JavaScript · Node.js',
  items: [
    'Built-in test runner',
    'Page Object Model',
    'Fixtures for setup and clean-up',
    'Cross-browser runs (Chromium, Firefox, WebKit)',
    'Parallel execution',
    'Screenshots, videos and Trace Viewer',
    'HTML reports',
  ],
};

const reasons = [
  'One tool for UI tests and API tests',
  'Auto-waiting reduces flaky tests',
  'Runs on Chromium, Firefox and WebKit',
  'Reports and traces come built in',
  'Easy to run in GitHub Actions',
];

export function Frameworks() {
  return (
    <Section
      id="frameworks"
      eyebrow="05 · Automation Frameworks"
      title="Automation Frameworks"
      description="I am focusing on one tool and learning it well: Playwright with JavaScript."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <article className="card card-hover h-full p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-glow">
                <Icon name="play" size={20} />
              </span>
              <StatusBadge status="planned" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">{framework.title}</h3>
            <p className="mt-1 font-mono text-xs text-accent-glow">{framework.stack}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
              {framework.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-glow" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="card card-hover h-full p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-glow">
              <Icon name="target" size={20} />
            </span>
            <h3 className="mt-4 text-lg font-medium text-white">Why Playwright</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-3">
                  <Check size={16} className="mt-0.5 shrink-0 text-accent-glow" aria-hidden="true" />
                  {reason}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-glow">Architecture</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Playwright Automation Architecture</h3>
            <p className="mt-4 leading-relaxed text-slate-400">
              The target architecture for my planned Playwright framework. It shows how a test specification flows
              through the runner, page objects and browser to a report.
            </p>
            <div className="mt-6">
              <CodeBlock code={playwrightFolderStructure} label="planned layout" />
            </div>
          </div>
        </Reveal>
        <div className="lg:col-span-3">
          <FlowDiagram steps={playwrightArchitecture} label="Playwright automation architecture" />
        </div>
      </div>
    </Section>
  );
}
