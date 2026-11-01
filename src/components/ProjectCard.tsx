import { ArrowRight } from 'lucide-react';
import type { Project } from '../types';
import { StatusBadge } from './StatusBadge';
import { Tilt } from './Tilt';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

/**
 * The whole card is clickable through a "stretched" button inside the heading
 * (the ::after pseudo-element covers the card). This keeps the HTML valid and
 * gives screen readers a normal heading plus a real button.
 */
export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <Tilt className="h-full">
    <article
      className={`card card-hover group relative flex h-full flex-col p-6 ${
        project.priority ? 'ring-1 ring-accent/30' : ''
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge status={project.status} />
        {project.priority && (
          <span className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide text-slate-400">
            Top priority
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white">
        <button
          type="button"
          onClick={() => onOpen(project)}
          aria-haspopup="dialog"
          className="text-left after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-accent-glow"
        >
          {project.title}
          <span className="sr-only"> – view details</span>
        </button>
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{project.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li key={tech} className="chip">
            {tech}
          </li>
        ))}
      </ul>

      <span aria-hidden="true" className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent-glow">
        View details
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </span>
    </article>
    </Tilt>
  );
}
