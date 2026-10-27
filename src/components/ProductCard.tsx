import { MessageCircle } from 'lucide-react';
import { Product, getWhatsAppLink } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappLink = getWhatsAppLink(product);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100">
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-amber-400 text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full">
          {product.category}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-5">
        {/* Product Name */}
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 line-clamp-1">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-500 mb-3 line-clamp-1">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-center mb-4">
          <span className="text-lg sm:text-xl font-bold text-gray-900">
            {product.price}
          </span>
        </div>

        {/* WhatsApp Order Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 sm:py-3.5 rounded-xl text-sm sm:text-base hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Order via WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
