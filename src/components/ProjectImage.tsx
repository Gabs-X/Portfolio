interface ProjectImageProps {
  /** Caminho em public/projects/ (ex.: /projects/stackmatch.webp). null/undefined = sem print. */
  src?: string | null;
  alt: string;
  pendingLabel: string;
  className?: string;
}

/**
 * Print do projeto em 16:9 (1280x720 em WebP).
 * Sem print: em produção não mostra nada; em `npm run dev` mostra um placeholder tracejado
 * para lembrar que o print está pendente.
 */
export default function ProjectImage({ src, alt, pendingLabel, className = '' }: ProjectImageProps) {
  if (!src) {
    if (!import.meta.env.DEV) return null;
    return (
      <div
        className={`aspect-video flex items-center justify-center rounded-xl border-2 border-dashed border-amber-500/60 bg-amber-500/5 text-amber-400 text-xs font-mono uppercase tracking-wider ${className}`}
      >
        {pendingLabel}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={1280}
      height={720}
      loading="lazy"
      decoding="async"
      className={`aspect-video w-full object-cover object-top rounded-xl border border-slate-800 ${className}`}
    />
  );
}
