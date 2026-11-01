import { Check } from 'lucide-react';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { TopicGroups } from '../components/TopicGroups';
import { ApiFlowIllustration } from '../components/Illustrations';
import { apiChecklist, apiGroups } from '../data/topics';

export function ApiTesting() {
  return (
    <Section
      id="api-testing"
      eyebrow="06 · API Testing"
      title="API Testing"
      description="Testing the layer beneath the user interface: requests, responses, authentication and error handling."
      alt
    >
      <TopicGroups groups={apiGroups} />

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <article className="card h-full p-6">
            <h3 className="font-medium text-white">What I check on an endpoint</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              {apiChecklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check size={16} className="mt-0.5 shrink-0 text-accent-glow" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <ApiFlowIllustration />
        </Reveal>
      </div>
    </Section>
  );
}
