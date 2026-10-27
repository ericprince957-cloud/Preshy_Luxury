/**
 * PRODUCT DATA - Preshy Luxury Home
 * 
 * INSTRUCTIONS: Replace the image URLs with real product photos.
 * Replace placeholder names with real product names.
 * Replace placeholder prices with real prices.
 * 
 * WhatsApp link auto-generates with product name and price.
 * To change WhatsApp number, update the WHATSAPP_NUMBER constant below.
 */

export const WHATSAPP_NUMBER = "2349078274666"; // Replace with actual number

export interface Product {
  id: number;
  name: string;
  price: string; // Using string to allow "₦####" placeholder format
  image: string; // Replace with real product photos
  category: string;
  description: string;
}

// TODO: Replace these Unsplash placeholder URLs with real product photos
// TODO: Replace "Product Name" placeholders with actual product names
// TODO: Replace "₦####" price placeholders with actual prices
export const products: Product[] = [
  {
    id: 1,
    name: "Product Name",
    price: "₦####",
    image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=400&h=500&fit=crop&q=80",
    category: "Gowns",
    description: "Elegant Ankara print gown with modern silhouette"
  },
  {
    id: 2,
    name: "Product Name",
    price: "₦####",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&h=500&fit=crop&q=80",
    category: "Traditional",
    description: "Handwoven Aso-Oke set for special occasions"
  },
  {
    id: 3,
    name: "Product Name",
    price: "₦####",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop&q=80",
    category: "Kaftans",
    description: "Luxurious kaftan with intricate gold embroidery"
  },
  {
    id: 4,
    name: "Product Name",
    price: "₦####",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop&q=80",
    category: "Evening Wear",
    description: "Stunning velvet dress for evening events"
  },
  {
    id: 5,
    name: "Product Name",
    price: "₦####",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop&q=80",
    category: "Blouses",
    description: "Sparkling sequin blouse for parties and events"
  },
  {
    id: 6,
    name: "Product Name",
    price: "₦####",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=400&h=500&fit=crop&q=80",
    category: "Bridal",
    description: "Exquisite French lace bridal ensemble"
  },
  {
    id: 7,
    name: "Product Name",
    price: "₦####",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=500&fit=crop&q=80",
    category: "Corporate",
    description: "Modern Ankara blazer for the professional woman"
  },
  {
    id: 8,
    name: "Product Name",
    price: "₦####",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop&q=80",
    category: "Casual",
    description: "Hand-dyed Adire silk wrap dress"
  }
];

/**
 * Generate WhatsApp order link
 * @param product - Product object
 * @returns WhatsApp URL with pre-filled message
 */
export function getWhatsAppLink(product: Product): string {
  const message = encodeURIComponent(
    `Hi Preshy Luxury Home, I am interested in ordering the ${product.name} for ${product.price}.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
