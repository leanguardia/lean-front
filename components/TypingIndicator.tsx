'use client';

import ShinyText from '@/components/ShinyText';

export default function TypingIndicator() {
  return (
    <div className="flex items-center text-gray-600 text-sm">
      <span className="inline-flex items-center gap-1 px-3 py-2">
        <span className="font-medium italic">
          <ShinyText
            text="escribiendo…"
            color="#888"
            shineColor="#34d399"
            speed={1.25}
            yoyo
            className="font-semibold tracking-wide"
          />
        </span>
      </span>
    </div>
  );
}

