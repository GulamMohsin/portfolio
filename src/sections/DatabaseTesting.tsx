import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { TopicGroups } from '../components/TopicGroups';
import { DatabaseIllustration } from '../components/Illustrations';
import { databaseGroups } from '../data/topics';

export function DatabaseTesting() {
  return (
    <Section
      id="database-testing"
      eyebrow="07 · Database Testing"
      title="Database Testing"
      description="Confirming that what the application shows is what is actually stored, and that stored data stays consistent."
    >
      <TopicGroups groups={databaseGroups} />

      <Reveal className="mt-8">
        <DatabaseIllustration />
      </Reveal>
    </Section>
  );
}
