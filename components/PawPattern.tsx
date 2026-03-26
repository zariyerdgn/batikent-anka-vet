interface PawPatternProps {
  className?: string;
  variant?: 'default' | 'light';
}

export default function PawPattern({ className = '', variant = 'default' }: PawPatternProps) {
  const base = variant === 'light' ? 'paw-bg-light' : 'paw-bg';
  return <div className={`${base} ${className}`} />;
}
