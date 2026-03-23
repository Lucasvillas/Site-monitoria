import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
  target?: string;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  target,
  className = '',
}: ButtonProps) {
  const baseClass = `btn-${variant}`;

  if (href) {
    return (
      <a href={href} target={target} className={`${baseClass} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClass} ${className}`}>
      {children}
    </button>
  );
}
