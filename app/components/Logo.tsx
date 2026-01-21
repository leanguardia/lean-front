'use client';

import { useEffect, useState } from 'react';

interface LogoProps {
  className?: string;
  alt?: string;
}

export default function Logo({ className = '', alt = 'Logo' }: LogoProps) {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    fetch('/logomark.svg')
      .then((res) => res.text())
      .then((text) => setSvgContent(text))
      .catch((err) => console.error('Failed to load SVG:', err));
  }, []);

  if (!svgContent) {
    return (
      <div className={`flex items-center justify-center w-full h-full ${className}`}>
        <div className="h-full w-auto aspect-square bg-transparent" />
      </div>
    );
  }

  return (
    <div 
      className={`flex items-center justify-center w-full h-full ${className}`}
      style={{ color: 'var(--color-accent)' }}
    >
      <div 
        className="flex items-center justify-center h-full w-auto [&>svg]:h-full [&>svg]:w-auto"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
}
