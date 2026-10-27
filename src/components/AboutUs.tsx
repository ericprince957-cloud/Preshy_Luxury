import { ShieldCheck, Truck, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Registered Business',
    description: 'Verified & registered Nigerian brand you can trust'
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'Premium fabrics and expert tailoring on every piece'
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'We deliver to all 36 states across Nigeria'
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Your satisfaction is our top priority, always'
  }
];

export default function AboutUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,175,55,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-amber-400 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-3">
            The Preshy Promise
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto rounded-full" />
          <p className="text-white/60 text-sm sm:text-base max-w-lg mx-auto mt-4">
            We are more than a fashion brand — we are a promise of quality, 
            elegance, and trust delivered to your doorstep.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 rounded-2xl bg-white/5 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 hover:bg-white/10"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-500/10 mb-3 sm:mb-4">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-14">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-full px-5 sm:px-8 py-3 sm:py-4">
            <span className="text-amber-400 text-xs sm:text-sm font-medium">
              📍 Based in Nigeria | 🚚 Delivering Nationwide | 💬 Chat with us anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
