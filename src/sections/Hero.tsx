import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Instagram, Linkedin, MapPin, User } from 'lucide-react';
import { profile } from '../data/profile';
import { LinkButton } from '../components/LinkButton';
import { Tilt } from '../components/Tilt';

/** Small glass labels that float around the photo. */
const floaters = [
  { label: 'Playwright', className: 'left-0 top-8 sm:-left-8', delay: 0 },
  { label: 'API Testing', className: 'right-0 top-1/2 sm:-right-8', delay: 1.2 },
  { label: 'SQL', className: 'bottom-6 left-4 sm:-left-4', delay: 2.4 },
];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40"
    >
      <div aria-hidden="true" className="grid-bg absolute inset-0" />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="font-mono text-sm text-accent-glow">Hello, I am</p>
          <h1
            id="home-title"
            className="mt-3 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </h1>
          <p className="mt-4 bg-gradient-to-r from-accent-glow via-blue-400 to-royal bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
            {profile.role}
          </p>
          <p className="mt-2 text-sm text-slate-500">{profile.identities.join('  |  ')}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">{profile.tagline}</p>

          <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
            <MapPin size={16} aria-hidden="true" />
            {profile.location}
            <span className="text-slate-600">·</span>
            <span>Originally from {profile.hometown.replace(', India', '')}</span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              Explore My Work <ArrowRight size={16} aria-hidden="true" />
            </a>
            <LinkButton
              href={profile.resume.available ? profile.resume.file : ''}
              download
              missingHint="Resume will be available soon"
            >
              <Download size={16} aria-hidden="true" /> Download Resume
            </LinkButton>
            <LinkButton href={profile.github} missingHint="GitHub link not added yet">
              <Github size={16} aria-hidden="true" /> GitHub
            </LinkButton>
            <LinkButton href={profile.linkedin} missingHint="LinkedIn link not added yet">
              <Linkedin size={16} aria-hidden="true" /> LinkedIn
            </LinkButton>
            <LinkButton href={profile.instagram} missingHint="Instagram link not added yet">
              <Instagram size={16} aria-hidden="true" /> Instagram
            </LinkButton>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          {/* Soft coloured glow behind the photo */}
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-accent/30 via-royal/20 to-teal-glow/20 blur-2xl"
          />

          <Tilt max={7}>
            <div className="card relative overflow-hidden p-3">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  className="aspect-square w-full rounded-xl object-cover object-top"
                />
              ) : (
                <div
                  role="img"
                  aria-label="Photograph placeholder"
                  className="flex aspect-square w-full flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-ink-900 text-slate-600"
                >
                  <User size={48} aria-hidden="true" />
                  <span className="mt-2 text-xs uppercase tracking-wide">Photo</span>
                </div>
              )}
              <dl className="px-3 pb-3 pt-4 text-sm">
                <dt className="sr-only">Degree</dt>
                <dd className="font-medium text-white">B.Tech, Computer Science and Engineering</dd>
                <dt className="sr-only">Graduation period</dt>
                <dd className="mt-0.5 text-slate-400">2022 – 2026</dd>
              </dl>
            </div>
          </Tilt>

          {floaters.map((item) => (
            <motion.span
              key={item.label}
              aria-hidden="true"
              className={`absolute rounded-full border border-white/15 bg-ink-800/70 px-3.5 py-1.5 font-mono text-xs text-accent-glow shadow-lg shadow-black/30 backdrop-blur-md ${item.className}`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
            >
              {item.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
