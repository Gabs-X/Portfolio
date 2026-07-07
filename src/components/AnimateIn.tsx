import { useEffect, useRef, useState, type ReactNode } from 'react';

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down';
  trigger?: 'load' | 'view';
}

export default function AnimateIn({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  trigger = 'view',
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(() => {
    if (trigger === 'load') return true;
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (trigger === 'load' || visible) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [trigger, visible]);

  const animClass = direction === 'down' ? 'animate-fade-in-down' : 'animate-fade-in-up';

  return (
    <div
      ref={ref}
      className={`${visible ? animClass : 'opacity-0'} ${className}`}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
