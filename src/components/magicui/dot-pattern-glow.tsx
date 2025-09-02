import { cn } from "@/lib/utils";

interface DotPatternGlowProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  glowColor?: string;
  dotColor?: string;
  glowIntensity?: number;
  [key: string]: any;
}

export default function DotPatternGlow({
  width = 20,
  height = 20,
  x = 0,
  y = 0,
  cx = 10,
  cy = 10,
  cr = 1.5,
  className,
  glowColor = "#3b82f6",
  dotColor = "#94a3b8",
  glowIntensity = 0.8,
  ...props
}: DotPatternGlowProps) {
  const id = `pattern-${Math.random().toString(36).substr(2, 9)}`;
  const filterId = `glow-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
      {...props}
    >
      <defs>
        <filter id={filterId}>
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle 
            cx={cx} 
            cy={cy} 
            r={cr}
            fill={dotColor}
            opacity={0.3}
          />
          <circle 
            cx={cx} 
            cy={cy} 
            r={cr * 0.7}
            fill={glowColor}
            opacity={glowIntensity}
            filter={`url(#${filterId})`}
            className="animate-pulse"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      <rect 
        width="100%" 
        height="100%" 
        fill="url(#gradient-overlay)" 
        opacity="0.4"
      />
      <defs>
        <radialGradient id="gradient-overlay">
          <stop offset="0%" stopColor={glowColor} stopOpacity="0.1" />
          <stop offset="50%" stopColor={glowColor} stopOpacity="0.05" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}