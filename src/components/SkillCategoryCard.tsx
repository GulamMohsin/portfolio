import type { SkillCategory } from '../types';
import { levels } from '../data/levels';
import { Icon } from './Icon';
import { Tilt } from './Tilt';

interface SkillCategoryCardProps {
  category: SkillCategory;
}

export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  return (
    <Tilt className="h-full">
    <article className="card card-hover h-full p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-glow">
          <Icon name={category.icon} size={20} />
        </span>
        <div>
          <h3 className="font-medium text-white">{category.title}</h3>
          <p className="text-xs text-slate-500">{category.skills.length} shown</p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{category.blurb}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li
            key={`${category.id}-${skill.name}`}
            title={skill.note ? `${levels[skill.level].label}: ${skill.note}` : levels[skill.level].label}
            className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs ${levels[skill.level].chip}`}
          >
            <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${levels[skill.level].dot}`} />
            {skill.name}
            <span className="sr-only"> ({levels[skill.level].label})</span>
          </li>
        ))}
      </ul>
    </article>
    </Tilt>
  );
}
