'use client';

import Particles from '@/components/Particles';

export default function ArticlePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="relative min-h-screen bg-background">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#C3FAE8"]}
          particleCount={300}
          particleSpread={3}
          speed={0.02}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={18}
          disableRotation={true}
          className="w-full h-full"
        />
      </div>

      {/* Content above particles */}
      <div className="relative z-10 min-h-screen">{children}</div>
    </article>
  );
}
