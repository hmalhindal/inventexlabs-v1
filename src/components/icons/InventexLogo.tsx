// src/components/icons/InventexLogo.tsx
export function InventexLogo({ className, width = 180, height = 48 }: { className?: string, width?: number, height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 190 50" // Adjusted viewBox to better fit content
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Inventex Labs Logo"
    >
      {/* Stylized 'A' symbol part - simplified geometric shape */}
      <path
        d="M24 4L4 25L24 46H32L12 25L32 4H24Z"
        transform="translate(2, 0)" // Shift "A" slightly to the right
        fill="url(#logoIconGradient)"
      />
      <defs>
        <linearGradient id="logoIconGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(45, 70%, 45%)" /> {/* Darker Yellow for top of gradient */}
          <stop offset="100%" stopColor="hsl(var(--primary))" /> {/* Primary Yellow for bottom of gradient */}
        </linearGradient>
      </defs>

      {/* Text "Invent" */}
      <text
        x="45" // Start text after the 'A' symbol
        y="34" // Vertically center text better
        fontFamily="Space Grotesk, sans-serif"
        fontSize="26" // Slightly larger font
        fontWeight="bold"
        fill="hsl(var(--foreground))"
      >
        Invent
      </text>

      {/* Text "EX" */}
      <text
        x="125" // Position after "Invent"
        y="34" // Vertically center text better
        fontFamily="Space Grotesk, sans-serif"
        fontSize="26" // Slightly larger font
        fontWeight="bold"
        fill="hsl(var(--primary))" // Yellow
      >
        EX
      </text>

      {/* Simplified swoosh/tool shape */}
      <path
        d="M50 40 Q85 37, 130 42 L135 40 L130 38 Q85 33, 50 36 Z" // Adjusted swoosh path
        fill="hsl(var(--primary))" // Yellow
      />
    </svg>
  );
}
