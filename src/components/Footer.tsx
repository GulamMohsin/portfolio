import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-x flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Built with React, Vite, TypeScript, Tailwind CSS and Framer Motion.</p>
      </div>
    </footer>
  );
}
