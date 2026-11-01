import { Github, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import type { ReactNode } from 'react';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { ContactForm } from '../components/ContactForm';
import { profile } from '../data/profile';

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent-glow">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
        {value && href ? (
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="break-all text-slate-200 hover:text-accent-glow"
          >
            {value}
          </a>
        ) : value ? (
          <p className="text-slate-200">{value}</p>
        ) : (
          <p className="text-slate-500">Not added yet</p>
        )}
      </div>
    </li>
  );
}

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="15 · Contact"
      title="Contact"
      description="Open to conversations about QA automation and software quality roles."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <ul className="card space-y-6 p-6 sm:p-8">
            <ContactRow
              icon={<Mail size={20} aria-hidden="true" />}
              label="Email"
              value={profile.email}
              href={profile.email ? `mailto:${profile.email}` : undefined}
            />
            <ContactRow
              icon={<Github size={20} aria-hidden="true" />}
              label="GitHub"
              value={profile.github}
              href={profile.github || undefined}
            />
            <ContactRow
              icon={<Linkedin size={20} aria-hidden="true" />}
              label="LinkedIn"
              value={profile.linkedin}
              href={profile.linkedin || undefined}
            />
            <ContactRow
              icon={<Instagram size={20} aria-hidden="true" />}
              label="Instagram"
              value={profile.instagram}
              href={profile.instagram || undefined}
            />
            <ContactRow
              icon={<MapPin size={20} aria-hidden="true" />}
              label="Location"
              value={`${profile.location} (from ${profile.hometown.replace(', India', '')})`}
            />
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
