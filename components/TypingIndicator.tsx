'use client';

import ShinyText from '@/components/ShinyText';

export default function TypingIndicator() {
  return (
    <div className="flex items-center text-white text-sm">
      <span className="inline-flex items-center gap-1 px-3 py-2">
        <span className="italic">
          <ShinyText
            text="escribiendo…"
            color="var(--color-gray-600)"
            shineColor="var(--color-accent-light)"
            speed={1.25}
            className="font-medium tracking-wide"
          />
        </span>
      </span>
    </div>
  );
}

