import TrustBadge from './TrustBadge';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with CSS gradient fallback */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=1080&fit=crop&q=80"
          alt="Preshy Luxury Home - Luxury Nigerian Fashion"
          className="w-full h-full object-cover object-center"
          loading="eager"
          onError={(e) => {
            // Fallback to gradient if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #000000 50%, #1a1a1a 100%)';
          }}
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        {/* Gold accent glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto pt-20">
        {/* Trust Badge */}
        <div className="mb-6 sm:mb-8">
          <TrustBadge />
        </div>

        {/* Brand Name */}
        <h2 className="text-amber-400 text-sm sm:text-base font-light tracking-[0.3em] uppercase mb-4">
          Preshy Luxury Home
        </h2>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
          Luxury Wears,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
            Delivered to Your Doorstep.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/70 text-sm sm:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
          Curated collection of premium Nigerian fashion. From Ankara to Aso-Oke, 
          we bring elegance to your wardrobe.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#catalog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold px-8 py-4 rounded-full text-sm sm:text-base hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
          >
            <span>Shop Collection</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="https://wa.me/2349078274666?text=Hi%20Preshy%20Luxury%20Home%2C%20I%20would%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-sm sm:text-base hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-10 sm:mt-14 flex items-center justify-center gap-6 sm:gap-10">
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold text-amber-400">500+</p>
            <p className="text-[10px] sm:text-xs text-white/50">Happy Clients</p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold text-amber-400">36</p>
            <p className="text-[10px] sm:text-xs text-white/50">States Served</p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold text-amber-400">100%</p>
            <p className="text-[10px] sm:text-xs text-white/50">Quality</p>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
    </section>
  );
}
