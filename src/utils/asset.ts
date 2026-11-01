/**
 * Turns a path like "/images/profile.jpg" into a URL that also works when the
 * site is hosted under a sub-path (GitHub Pages: /portfolio/). Full URLs and
 * empty strings are returned unchanged.
 */
export function asset(path: string): string {
  if (!path || /^(https?:)?\/\//i.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
