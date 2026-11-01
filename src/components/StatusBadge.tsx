import type { ProjectStatus } from '../types';

const styles: Record<ProjectStatus, { label: string; classes: string }> = {
  planned: {
    label: 'Planned',
    classes: 'border-amber-400/30 bg-amber-400/10 text-amber-200',
  },
  'in-progress': {
    label: 'In Progress',
    classes: 'border-blue-400/30 bg-blue-400/10 text-blue-200',
  },
  completed: {
    label: 'Completed',
    classes: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
  },
  academic: {
    label: 'Academic Project',
    classes: 'border-violet-400/30 bg-violet-400/10 text-violet-200',
  },
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { label, classes } = styles[status];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide ${classes}`}
    >
      {label}
    </span>
  );
}
