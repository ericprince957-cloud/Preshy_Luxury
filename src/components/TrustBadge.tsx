import { ShieldCheck } from 'lucide-react';

export default function TrustBadge() {
  return (
    <div className="flex items-center justify-center gap-2 bg-black/80 backdrop-blur-sm border border-amber-500/30 rounded-full px-4 py-2 mx-auto w-fit">
      <ShieldCheck className="w-4 h-4 text-amber-400" />
      <span className="text-xs sm:text-sm font-medium text-amber-100 tracking-wide">
        ✓ Registered Brand
      </span>
    </div>
  );
}
