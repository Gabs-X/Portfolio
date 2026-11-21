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
  // Mesmo estado inicial no HTML pré-renderizado e no navegador (evita erro de hidratação).
  // Movimento reduzido e navegação sem JS são tratados no CSS (.animate-pending).
  const [visible, setVisible] = useState(trigger === 'load');

  useEffect(() => {
    if (visible) return;

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
  }, [visible]);

  const animClass = direction === 'down' ? 'animate-fade-in-down' : 'animate-fade-in-up';

  return (
    <div
      ref={ref}
      className={`${visible ? animClass : 'animate-pending'} ${className}`}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
