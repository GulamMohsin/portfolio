import { Award, ExternalLink, FileText } from 'lucide-react';
import type { Certification } from '../types';
import { asset } from '../utils/asset';

export function CertificateCard({ certification }: { certification: Certification }) {
  return (
    <article className="card card-hover flex h-full flex-col overflow-hidden">
      {certification.image && (
        <img
          src={asset(certification.image)}
          alt={`Certificate: ${certification.title}`}
          loading="lazy"
          className="h-40 w-full border-b border-white/10 object-cover"
        />
      )}
      <div className="flex flex-1 flex-col p-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-glow">
          <Award size={20} aria-hidden="true" />
        </span>
        <h3 className="mt-4 font-medium text-white">{certification.title}</h3>
        <p className="mt-1 text-sm text-slate-400">{certification.issuer}</p>
        <p className="mt-1 font-mono text-xs text-slate-500">{certification.issueDate}</p>
        <div className="mt-auto flex flex-wrap gap-3 pt-5 text-sm">
          {certification.credentialUrl && (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent-glow hover:underline"
            >
              Verify credential <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
          {certification.file && (
            <a
              href={asset(certification.file)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent-glow hover:underline"
            >
              View PDF <FileText size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/** Shown when no real certificates have been added yet. */
export function CertificatePlaceholder() {
  return (
    <article className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 p-6 text-center">
      <Award size={22} className="text-slate-600" aria-hidden="true" />
      <h3 className="mt-3 text-sm font-medium text-slate-400">Certificate placeholder</h3>
      <p className="mt-1 text-xs text-slate-500">Title, issuer and date will appear here once added.</p>
    </article>
  );
}
