'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#87CEEB] flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold text-[#2C5F75]">SOMETHING WENT WRONG</h2>
        <p className="text-lg text-[#3D6B7D]">The penguins encountered an unexpected blizzard.</p>
        <button
          onClick={reset}
          className="btn-primary text-lg px-12"
        >
          TRY AGAIN
        </button>
      </div>
    </div>
  );
}
