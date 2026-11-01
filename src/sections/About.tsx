import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { Icon } from '../components/Icon';
import { profile } from '../data/profile';
import type { IconName } from '../types';

const principles: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'target',
    title: 'Structured testing',
    text: 'Improving software quality through clear scenarios, well-designed test cases and repeatable approaches.',
  },
  {
    icon: 'layers',
    title: 'Maintainable automation',
    text: 'Aiming for reliable, maintainable and scalable automation frameworks rather than one-off scripts.',
  },
  {
    icon: 'bug',
    title: 'Defect awareness',
    text: 'Enjoying the work of understanding application behaviour and identifying defects.',
  },
];

export function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-4 leading-relaxed text-slate-300">
            {profile.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="card divide-y divide-white/10 text-sm">
            {[
              ['Based in', profile.location],
              ['Hometown', profile.hometown],
              ['Education', 'B.Tech, Computer Science and Engineering (2022 – 2026)'],
              ['Primary automation language', 'JavaScript'],
              ['Learning focus', 'Playwright, API testing, SQL'],
            ].map(([term, value]) => (
              <div key={term} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:justify-between sm:gap-6">
                <dt className="text-slate-500">{term}</dt>
                <dd className="text-slate-200 sm:text-right">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {principles.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.07}>
            <article className="card card-hover h-full p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-glow">
                <Icon name={item.icon} size={20} />
              </span>
              <h3 className="mt-4 font-medium text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
