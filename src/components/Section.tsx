import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
}

export function Section({ children, className = '', variant = 'light' }: SectionProps) {
  const variantClass = variant === 'dark' ? 'campus-dark' : 'campus-light';
  return (
    <section className={`campus-section ${variantClass} ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}
