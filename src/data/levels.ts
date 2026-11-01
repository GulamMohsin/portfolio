import type { SkillLevel } from '../types';

export interface LevelMeta {
  label: string;
  description: string;
  /** Tailwind classes for a skill chip at this level. */
  chip: string;
  /** Tailwind class for the small coloured dot. */
  dot: string;
}

/**
 * Honest skill levels. There are deliberately no percentages or star ratings.
 * A skill is only placed in "proficient" when public, verifiable work exists.
 */
export const levels: Record<SkillLevel, LevelMeta> = {
  learning: {
    label: 'Currently Learning',
    description: 'Actively studying and practising. Not yet demonstrated in a public project.',
    chip: 'border-blue-400/30 bg-blue-400/10 text-blue-200',
    dot: 'bg-blue-400',
  },
  basic: {
    label: 'Basic Familiarity',
    description: 'Understand the fundamentals, with limited hands-on use.',
    chip: 'border-slate-400/30 bg-slate-400/10 text-slate-200',
    dot: 'bg-slate-400',
  },
  practical: {
    label: 'Practical Project Experience',
    description: 'Used in an academic project, internship or personal build.',
    chip: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
    dot: 'bg-emerald-400',
  },
  proficient: {
    label: 'Demonstrated Proficiency',
    description:
      'Backed by public, verifiable work such as a repository, test report or certificate. Nothing is claimed here yet.',
    chip: 'border-violet-400/30 bg-violet-400/10 text-violet-200',
    dot: 'bg-violet-400',
  },
};

export const levelOrder: SkillLevel[] = ['learning', 'basic', 'practical', 'proficient'];
