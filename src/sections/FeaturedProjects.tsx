import { useCallback, useMemo, useState } from 'react';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { automationProjects } from '../data/projects';
import type { Project, ProjectCategory } from '../types';

type Filter = 'all' | ProjectCategory;

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'ui', label: 'UI Automation' },
  { id: 'api', label: 'API' },
  { id: 'database', label: 'Database' },
  { id: 'cicd', label: 'CI/CD' },
];

export function FeaturedProjects() {
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  const visible = useMemo(
    () => (filter === 'all' ? automationProjects : automationProjects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <Section
      id="projects"
      eyebrow="08 · Featured Projects"
      title="Automation Engineering Projects"
      description="These are the automation projects I am planning to build. Each one is labelled with its real status. Repositories and live reports will be linked only after the work exists and has been verified."
      alt
    >
      <Reveal>
        <div role="group" aria-label="Filter projects by type" className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                filter === item.id
                  ? 'border-accent bg-accent/15 text-white'
                  : 'border-white/10 text-slate-400 hover:border-white/25 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="sr-only">
          Showing {visible.length} project{visible.length === 1 ? '' : 's'}
        </p>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.05} className={project.priority ? 'lg:col-span-2' : ''}>
            <ProjectCard project={project} onOpen={setSelected} />
          </Reveal>
        ))}
      </div>

      <ProjectModal project={selected} onClose={close} />
    </Section>
  );
}
