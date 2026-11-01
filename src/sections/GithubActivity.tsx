import { useEffect, useState } from 'react';
import { ExternalLink, GitFork, Github, Loader2, Star } from 'lucide-react';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { LinkButton } from '../components/LinkButton';
import { githubUsername, profile } from '../data/profile';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
}

type State =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'error' }
  | { kind: 'ready'; repos: Repo[] };

export function GithubActivity() {
  const username = githubUsername();
  const [state, setState] = useState<State>(username ? { kind: 'loading' } : { kind: 'idle' });

  useEffect(() => {
    if (!username) return;
    const controller = new AbortController();
    setState({ kind: 'loading' });

    fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=12`, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub responded with ${response.status}`);
        return response.json() as Promise<Repo[]>;
      })
      .then((repos) => {
        setState({ kind: 'ready', repos: repos.filter((repo) => !repo.fork).slice(0, 6) });
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        setState({ kind: 'error' });
      });

    return () => controller.abort();
  }, [username]);

  return (
    <Section
      id="github"
      eyebrow="13 · GitHub Activity"
      title="GitHub Activity"
      description="Public repositories pulled live from GitHub. Nothing here is typed in by hand."
    >
      {state.kind === 'idle' && (
        <Reveal>
          <div className="card flex flex-col items-start gap-4 p-8">
            <Github size={28} className="text-slate-500" aria-hidden="true" />
            <p className="max-w-xl text-slate-400">
              The GitHub profile link has not been added yet. Once it is set, my latest public repositories will
              show up here automatically.
            </p>
            <LinkButton href="" missingHint="GitHub link not added yet">
              <Github size={16} aria-hidden="true" /> GitHub profile
            </LinkButton>
          </div>
        </Reveal>
      )}

      {state.kind === 'loading' && (
        <p role="status" className="flex items-center gap-2 text-slate-400">
          <Loader2 size={18} className="animate-spin" aria-hidden="true" /> Loading repositories…
        </p>
      )}

      {state.kind === 'error' && (
        <div className="card p-8 text-slate-400">
          <p>Repositories could not be loaded right now. You can still view them directly on GitHub.</p>
          <div className="mt-4">
            <LinkButton href={profile.github}>
              <Github size={16} aria-hidden="true" /> Open GitHub profile
            </LinkButton>
          </div>
        </div>
      )}

      {state.kind === 'ready' && (
        <>
          {state.repos.length === 0 ? (
            <div className="card p-8 text-slate-400">No public repositories to show yet.</div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {state.repos.map((repo, index) => (
                <Reveal key={repo.id} delay={index * 0.05}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card card-hover flex h-full flex-col p-6"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-medium text-white">{repo.name}</h3>
                      <ExternalLink size={16} className="shrink-0 text-slate-500" aria-hidden="true" />
                    </div>
                    <p className="mt-2 flex-1 text-sm text-slate-400">
                      {repo.description ?? 'No description provided.'}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                      {repo.language && <span>{repo.language}</span>}
                      <span className="inline-flex items-center gap-1">
                        <Star size={13} aria-hidden="true" /> {repo.stargazers_count}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitFork size={13} aria-hidden="true" /> {repo.forks_count}
                      </span>
                      <span>Updated {new Date(repo.updated_at).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          )}
          <div className="mt-8">
            <LinkButton href={profile.github}>
              <Github size={16} aria-hidden="true" /> View all on GitHub
            </LinkButton>
          </div>
        </>
      )}
    </Section>
  );
}
