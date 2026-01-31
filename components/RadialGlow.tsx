'use client';

/**
 * Radial gradient glow background effect.
 */
interface RadialGlowProps {
  innerColor?: string;
  outerColor?: string;
  opacity?: number;
  shape?: 'circle' | 'ellipse';
  position?: string; // e.g. 'center', '50% 30%'
  className?: string;
}

export default function RadialGlow({
  innerColor = 'var(--color-accent)',
  outerColor = 'var(--color-secondary)',
  opacity = 0.75,
  shape = 'circle',
  position = 'center',
  className = '',
}: RadialGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}
    >
      <div
        className="z-0 absolute w-full h-full"
        style={{
          background: `radial-gradient(${shape} at ${position}, ${innerColor} 0%, ${outerColor} 100%)`,
          opacity,
        }}
      />
    </div>
  );
}
