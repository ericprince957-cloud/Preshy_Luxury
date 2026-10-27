import { useState, useEffect } from 'react';

export default function PreviewBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-dismiss after 8 seconds for better UX
    const timer = setTimeout(() => setIsVisible(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-black text-center py-2 px-4 text-xs sm:text-sm font-medium shadow-lg animate-pulse">
      <div className="flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 bg-black rounded-full animate-ping" />
        <span>✨ This is a custom concept preview for Preshy Luxury Home ✨</span>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-3 text-black/60 hover:text-black transition-colors"
          aria-label="Dismiss banner"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
