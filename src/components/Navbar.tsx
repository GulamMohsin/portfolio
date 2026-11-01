import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';

/** Every section id in page order (used for scroll tracking). */
export const sectionIds = [
  'home',
  'about',
  'skills',
  'manual-testing',
  'automation-testing',
  'frameworks',
  'api-testing',
  'database-testing',
  'projects',
  'dev-projects',
  'experience',
  'education',
  'certifications',
  'github',
  'resume',
  'contact',
];

/** Navigation groups. A link is highlighted while any section of its group is in view. */
const links: { label: string; target: string; group: string[] }[] = [
  { label: 'About', target: 'about', group: ['about'] },
  { label: 'Skills', target: 'skills', group: ['skills'] },
  {
    label: 'Testing',
    target: 'manual-testing',
    group: ['manual-testing', 'automation-testing', 'frameworks', 'api-testing', 'database-testing'],
  },
  { label: 'Projects', target: 'projects', group: ['projects', 'dev-projects'] },
  { label: 'Experience', target: 'experience', group: ['experience', 'education', 'certifications'] },
  { label: 'GitHub', target: 'github', group: ['github'] },
  { label: 'Contact', target: 'contact', group: ['contact'] },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition duration-200 ${
        scrolled || open
          ? 'border-b border-white/10 bg-ink-950/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 font-mono text-sm text-accent-glow">
            GM
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = link.group.includes(active);
            return (
              <li key={link.label}>
                <a
                  href={`#${link.target}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`rounded-md px-3 py-2 text-sm transition ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li className="ml-2">
            <a href="#resume" className="btn-ghost !px-4 !py-2">
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-slate-300 hover:bg-white/5 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 md:hidden">
          <ul className="container-x flex flex-col py-3">
            {[...links, { label: 'Resume', target: 'resume', group: ['resume'] }].map((link) => (
              <li key={link.label}>
                <a
                  href={`#${link.target}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
