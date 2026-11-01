import type { ReactNode } from 'react';

interface LinkButtonProps {
  /** Empty string means "not configured yet": a disabled state is shown instead of a broken link. */
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  download?: boolean;
  /** Text used for the tooltip when the link is not configured. */
  missingHint?: string;
}

export function LinkButton({
  href,
  children,
  variant = 'ghost',
  download,
  missingHint = 'Not configured yet',
}: LinkButtonProps) {
  if (!href) {
    return (
      <span className="btn-disabled" role="link" aria-disabled="true" title={missingHint}>
        {children}
      </span>
    );
  }

  const external = /^https?:\/\//i.test(href);
  return (
    <a
      href={href}
      className={variant === 'primary' ? 'btn-primary' : 'btn-ghost'}
      download={download ? '' : undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
