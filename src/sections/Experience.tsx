import { Section } from '../components/Section';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { experience } from '../data/experience';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="10 · Experience"
      title="Professional Experience"
      description="A short internship in JavaScript development."
      alt
    >
      <ExperienceTimeline items={experience} />
    </Section>
  );
}
