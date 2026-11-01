import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Info, X } from 'lucide-react';
import type { Project } from '../types';
import { CodeBlock } from './CodeBlock';
import { StatusBadge } from './StatusBadge';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && <ModalBody key={project.id} project={project} onClose={onClose} />}
    </AnimatePresence>
  );
}

const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function ModalBody({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseRef.current();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;

      // Keep keyboard focus inside the dialog.
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  const titleId = `project-${project.id}-title`;
  const notBuilt = project.status === 'planned';

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="card max-h-[92vh] w-full max-w-3xl overflow-y-auto bg-ink-800 p-6 sm:p-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.25 }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <StatusBadge status={project.status} />
            <h3 id={titleId} className="mt-3 text-2xl font-semibold text-white">
              {project.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="rounded-md p-2 text-slate-400 hover:bg-white/5 hover:text-white"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {notBuilt && (
          <p className="mt-5 flex gap-3 rounded-lg border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
            <Info size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
            <span>
              This project is planned. No code, test runs or results exist yet. What follows is the
              intended design, not a finished deliverable.
            </span>
          </p>
        )}

        <p className="mt-5 leading-relaxed text-slate-300">{project.summary}</p>

        <h4 className="mt-6 text-sm font-medium uppercase tracking-wide text-slate-500">Technologies</h4>
        <ul className="mt-2 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        <h4 className="mt-6 text-sm font-medium uppercase tracking-wide text-slate-500">
          {notBuilt ? 'Planned scope' : 'Highlights'}
        </h4>
        <ul className="mt-2 grid gap-x-6 gap-y-1.5 text-sm text-slate-300 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-glow" />
              {feature}
            </li>
          ))}
        </ul>

        {project.folderStructure && (
          <div className="mt-6">
            <CodeBlock code={project.folderStructure} label={notBuilt ? 'planned folder structure' : 'folder structure'} />
          </div>
        )}
        {project.install && (
          <div className="mt-4">
            <CodeBlock code={project.install.join('\n')} label="installation" />
          </div>
        )}
        {project.commands && (
          <div className="mt-4">
            <CodeBlock code={project.commands.join('\n')} label="test execution commands" />
          </div>
        )}

        {project.note && <p className="mt-6 text-sm text-slate-400">{project.note}</p>}

        <div className="mt-6 flex flex-wrap gap-3">
          {project.repoUrl ? (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              GitHub repository <ExternalLink size={16} aria-hidden="true" />
            </a>
          ) : (
            <span className="btn-disabled">Repository: not published yet</span>
          )}
          {project.reportUrl ? (
            <a href={project.reportUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Live report <ExternalLink size={16} aria-hidden="true" />
            </a>
          ) : project.category !== 'web' && project.category !== 'ml' && project.category !== 'data' ? (
            <span className="btn-disabled">Live report: not available yet</span>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
}
