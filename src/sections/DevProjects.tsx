import { useCallback, useState } from 'react';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { developmentProjects } from '../data/projects';
import type { Project } from '../types';

export function DevProjects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <Section
      id="dev-projects"
      eyebrow="09 · Development Projects"
      title="Software Development Projects"
      description="Academic projects from my B.Tech programme. They show the software development foundations behind my testing work."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {developmentProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.07}>
            <ProjectCard project={project} onOpen={setSelected} />
          </Reveal>
        ))}
      </div>
      <ProjectModal project={selected} onClose={close} />
    </Section>
  );
}
