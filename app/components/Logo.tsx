'use client';

import MetallicPaint from '../../components/MetallicPaint';

interface LogoProps {
  className?: string;
  alt?: string;
}

export default function Logo({ className = '', alt = 'Logo' }: LogoProps) {
  return (
    <div 
      className={`flex items-center justify-center w-full h-full ${className}`}
    >
      <div className="h-full w-full max-w-full max-h-full flex items-center justify-center">
        <MetallicPaint
          imageSrc="/logomark.svg"
          seed={3}
          scale={3}
          refraction={0.02}
          blur={0.015}
          liquid={0.075}
          speed={0.1}
          brightness={1.3}
          contrast={0.7}
          angle={50}
          fresnel={1}
          lightColor="#A5D8FF"
          darkColor="#1E7CD6"
          patternSharpness={0.5}
          waveAmplitude={1}
          noiseScale={0.25}
          chromaticSpread={2}
          mouseAnimation={false}
          distortion={0.5}
          contour={0.2}
          tintColor="#69DB7C"
        />
      </div>
    </div>
  );
}
