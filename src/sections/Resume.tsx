import { Download, FileText } from 'lucide-react';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { LinkButton } from '../components/LinkButton';
import { profile } from '../data/profile';

export function Resume() {
  const { available, file } = profile.resume;

  return (
    <Section id="resume" eyebrow="14 · Resume" title="Resume" alt>
      <Reveal>
        <div className="card flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-glow">
              <FileText size={24} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-medium text-white">{profile.name} – Resume</h3>
              <p className="mt-1 text-sm text-slate-400">
                {available
                  ? 'PDF format. Includes education, internship and academic projects.'
                  : 'The resume file has not been added yet and will be available here soon.'}
              </p>
              {!available && import.meta.env.DEV && (
                <p className="mt-2 text-xs text-amber-300">
                  Developer note: place the PDF at <code>public{file}</code> and set{' '}
                  <code>resume.available</code> to true in <code>src/data/profile.ts</code>.
                </p>
              )}
            </div>
          </div>
          <LinkButton
            href={available ? file : ''}
            variant="primary"
            download
            missingHint="Resume will be available soon"
          >
            <Download size={16} aria-hidden="true" /> Download Resume
          </LinkButton>
        </div>
      </Reveal>
    </Section>
  );
}
