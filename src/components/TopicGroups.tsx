import type { TopicGroup } from '../types';
import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { Tilt } from './Tilt';

/** Grid of titled cards, each with a chip list. Used by every testing section. */
export function TopicGroups({ groups }: { groups: TopicGroup[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {groups.map((group, index) => (
        <Reveal key={group.title} delay={index * 0.05}>
          <Tilt className="h-full">
          <article className="card card-hover h-full p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-glow">
                <Icon name={group.icon} size={20} />
              </span>
              <h3 className="text-lg font-medium text-white">{group.title}</h3>
            </div>
            {group.description && (
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{group.description}</p>
            )}
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          </Tilt>
        </Reveal>
      ))}
    </div>
  );
}
