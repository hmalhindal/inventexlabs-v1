// @/components/icons/SignIcons.tsx
// A collection of simple, line-art SVG icons inspired by the provided image.

type IconProps = { className?: string };

export const AllSignsIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="46" height="30" rx="4" stroke="currentColor" strokeWidth="2"/>
    <text x="24" y="21" fontFamily="sans-serif" fontSize="16" fontWeight="bold" textAnchor="middle" fill="currentColor">ALL</text>
  </svg>
);

export const ABoardIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 21h16" /><path d="M7 21l5 -12l5 12" /><path d="M10 11h4" />
  </svg>
);

export const LightBoxesIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="4" width="46" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
    <text x="24" y="21" fontFamily="sans-serif" fontSize="8" fontWeight="bold" textAnchor="middle" fill="currentColor">LIGHTBOX</text>
  </svg>
);

export const CinemaLightBoxesIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="44" height="28" rx="2"/>
    <rect x="6" y="6" width="36" height="20" rx="1"/>
    <circle cx="10" cy="10" r="1" fill="currentColor" /><circle cx="16" cy="10" r="1" fill="currentColor" /><circle cx="22" cy="10" r="1" fill="currentColor" /><circle cx="28" cy="10" r="1" fill="currentColor" /><circle cx="34" cy="10" r="1" fill="currentColor" /><circle cx="38" cy="10" r="1" fill="currentColor" />
    <circle cx="10" cy="22" r="1" fill="currentColor" /><circle cx="16" cy="22" r="1" fill="currentColor" /><circle cx="22" cy="22" r="1" fill="currentColor" /><circle cx="28" cy="22" r="1" fill="currentColor" /><circle cx="34" cy="22" r="1" fill="currentColor" /><circle cx="38" cy="22" r="1" fill="currentColor" />
  </svg>
);

export const MenuCasesIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 48" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="28" height="44" rx="2"/>
    <rect x="6" y="6" width="20" height="28" rx="1"/>
    <line x1="8" y1="10" x2="22" y2="10" /><line x1="8" y1="14" x2="22" y2="14" /><line x1="8" y1="18" x2="18" y2="18" />
  </svg>
);

export const MenuBoardsIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="44" height="28" rx="2"/><line x1="8" y1="8" x2="40" y2="8" /><line x1="8" y1="14" x2="40" y2="14" /><line x1="8" y1="20" x2="30" y2="20" /><line x1="8" y1="26" x2="35" y2="26" />
  </svg>
);

export const LightLettersIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12,4 h8 a6,6 0 0 1 0,12 h-8 M12,16 h10 a6,6 0 0 1 0,12 h-10 z" />
    <circle cx="10" cy="10" r="1" fill="currentColor" /><circle cx="18" cy="10" r="1" fill="currentColor" /><circle cx="18" cy="22" r="1" fill="currentColor" />
  </svg>
);

export const LedNeonSignsIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 48 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="24" fontFamily="cursive" fontSize="18" fontWeight="bold">Neon</text>
  </svg>
);

export const ProjectingSignsIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="10" width="20" height="12" rx="1"/>
    <line x1="22" y1="12" x2="28" y2="12" /><line x1="22" y1="20" x2="28" y2="20" />
    <line x1="28" y1="10" x2="28" y2="22" />
  </svg>
);

export const SaleIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 48 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="24" fontFamily="cursive" fontSize="20" fontWeight="bold">Sale</text>
  </svg>
);

export const GiantOutdoorArrowsIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 16 L20 4 L20 12 L46 12 L46 20 L20 20 L20 28 Z" />
  </svg>
);

export const GiantLettersIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <text x="4" y="28" fontFamily="sans-serif" fontSize="32" fontWeight="bold">R</text>
  </svg>
);

export const AcrylicLightLettersIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <text x="4" y="28" fontFamily="sans-serif" fontSize="32" fontWeight="bold">A</text>
  </svg>
);

export const InfinityMirrorsIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 2 L30 16 L16 30 L2 16 Z" />
    <path d="M16 6 L26 16 L16 26 L6 16 Z" />
  </svg>
);

export const HouseNumbersIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <text x="2" y="26" fontFamily="sans-serif" fontSize="24" fontWeight="bold">23</text>
  </svg>
);

export const EcoSignsIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 10 a5 5 0 0 1 5 5 v 8 a5 5 0 0 1 -10 0 v -8 a5 5 0 0 1 5 -5" />
    <path d="M12 8 s-4 -6 0 -6 s4 6 0 6" />
    <path d="M20 8 s-4 -6 0 -6 s4 6 0 6" />
    <path d="M12 18 h8" />
  </svg>
);

export const ArtworkingHoursIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 22 L10 14 L18 22 L22 18" />
    <path d="M20 6 L30 16" />
    <path d="M28 2 L30 4 L20 14 L18 12 Z" />
  </svg>
);

export const MossLettersIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 48 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="24" fontFamily="sans-serif" fontSize="18" fontWeight="900" fontStyle="italic">RAW</text>
  </svg>
);

export const HomewareDeskwareIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="24" height="24" rx="2" />
    <text x="16" y="21" fontFamily="sans-serif" fontSize="12" fontWeight="bold" textAnchor="middle" fill="currentColor">LDN</text>
  </svg>
);

export const GgMerchandiseIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4 h24 l-4 8 h-16 Z" />
    <path d="M10 12 v16 h12 v-16" />
    <path d="M12 4 a4 4 0 0 1 8 0" />
  </svg>
);

export const PrintedSignsIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 16 L20 8 L46 8 L46 24 L20 24 Z" />
    <text x="12" y="20" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="currentColor">GRILL</text>
  </svg>
);

export const ConcreteLettersIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <text x="4" y="28" fontFamily="sans-serif" fontSize="32" fontWeight="bold">N</text>
  </svg>
);

export const TheGoodsLondonLogo = ({ className }: IconProps) => (
  <div className={className}>
    <div className="text-center font-headline border-2 border-current p-2">
      <div className="text-lg font-bold">signs</div>
    </div>
  </div>
);
