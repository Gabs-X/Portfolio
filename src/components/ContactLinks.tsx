import { CONTACT } from '../config';

interface ContactLinksProps {
  className?: string;
}

/** E-mail, LinkedIn e GitHub como texto visível (legível por pessoas, ATS e buscadores). */
export default function ContactLinks({ className = '' }: ContactLinksProps) {
  const linkClass = 'hover:text-cyan-400 transition-colors underline-offset-4 hover:underline';

  return (
    <ul className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-slate-400 ${className}`}>
      <li>
        <a href={`mailto:${CONTACT.email}`} className={linkClass}>
          {CONTACT.email}
        </a>
      </li>
      <li>
        <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
          LinkedIn &#8599;
        </a>
      </li>
      <li>
        <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
          GitHub &#8599;
        </a>
      </li>
    </ul>
  );
}
