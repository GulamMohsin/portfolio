import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { SkillCategoryCard } from '../components/SkillCategoryCard';
import { levelOrder, levels } from '../data/levels';
import { skillCategories } from '../data/skills';
import type { SkillLevel } from '../types';

type Filter = SkillLevel | 'all';

export function Skills() {
  const [filter, setFilter] = useState<Filter>('all');

  const counts = useMemo(() => {
    const result: Record<SkillLevel, number> = { learning: 0, basic: 0, practical: 0, proficient: 0 };
    skillCategories.forEach((category) =>
      category.skills.forEach((skill) => {
        result[skill.level] += 1;
      }),
    );
    return result;
  }, []);

  const visibleCategories = useMemo(
    () =>
      skillCategories
        .map((category) => ({
          ...category,
          skills: filter === 'all' ? category.skills : category.skills.filter((skill) => skill.level === filter),
        }))
        .filter((category) => category.skills.length > 0),
    [filter],
  );

  const total = Object.values(counts).reduce((sum, value) => sum + value, 0);

  return (
    <Section
      id="skills"
      eyebrow="02 · Skills"
      title="Technical Skills"
      description="Skills are grouped by category and labelled by how I have actually used them. There are no percentages: a skill only reaches Demonstrated Proficiency when public work backs it up."
      alt
    >
      <Reveal>
        <div role="group" aria-label="Filter skills by level" className="flex flex-wrap gap-2">
          <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
            All levels ({total})
          </FilterButton>
          {levelOrder.map((level) => (
            <FilterButton key={level} active={filter === level} onClick={() => setFilter(level)}>
              <span aria-hidden="true" className={`mr-2 inline-block h-2 w-2 rounded-full ${levels[level].dot}`} />
              {levels[level].label} ({counts[level]})
            </FilterButton>
          ))}
        </div>

        <p aria-live="polite" className="mt-4 min-h-[1.5rem] text-sm text-slate-500">
          {filter === 'all'
            ? 'Hover or focus a skill to see where I have used it.'
            : levels[filter].description}
        </p>
      </Reveal>

      {visibleCategories.length === 0 ? (
        <div className="card mt-8 p-8 text-center text-slate-400">
          Nothing is claimed at this level yet. This will be filled in once public repositories and reports
          can back it up.
        </div>
      ) : (
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {visibleCategories.map((category) => (
            <SkillCategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </Section>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center rounded-full border px-4 py-1.5 text-sm transition ${
        active
          ? 'border-accent bg-accent/15 text-white'
          : 'border-white/10 text-slate-400 hover:border-white/25 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}
