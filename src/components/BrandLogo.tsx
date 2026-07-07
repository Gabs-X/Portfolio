import logo from '../assets/GabrielAnthony.png';

const sizes = {
  sm: 'h-8 w-auto',
  md: 'h-28 w-auto sm:h-32',
  lg: 'w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] h-auto',
} as const;

interface BrandLogoProps {
  size?: keyof typeof sizes;
  className?: string;
}

export default function BrandLogo({ size = 'md', className = '' }: BrandLogoProps) {
  return (
    <img
      src={logo}
      alt="Gabriel Anthony"
      className={`object-contain ${sizes[size]} ${className}`}
      decoding="async"
    />
  );
}
