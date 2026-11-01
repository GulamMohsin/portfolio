import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { TopicGroups } from '../components/TopicGroups';
import { FlowDiagram } from '../components/FlowDiagram';
import { automationGroups, workflowSteps } from '../data/topics';

export function AutomationTesting() {
  return (
    <Section
      id="automation-testing"
      eyebrow="04 · Automation Testing"
      title="Automation Testing"
      description="JavaScript with Playwright is my primary automation focus. These are the capabilities I am building towards."
      alt
    >
      <TopicGroups groups={automationGroups} />

      <div className="mt-20 grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-glow">My approach</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">My Automation Workflow</h3>
            <p className="mt-4 leading-relaxed text-slate-400">
              Automation is the middle of the process, not the start. Each stage feeds the next, from understanding
              requirements through to reporting results that people can act on.
            </p>
          </div>
        </Reveal>
        <div className="lg:col-span-3">
          <FlowDiagram steps={workflowSteps} label="Automation workflow from requirements to test reports" />
        </div>
      </div>
    </Section>
  );
}
