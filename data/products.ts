export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  images: string[];
  featured?: boolean;
  material?: string;
  dimensions?: string;
  color?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Nordic Oak Dining Table',
    category: 'Dining',
    price: 1899,
    shortDescription: 'Handcrafted solid oak table with clean Scandinavian lines.',
    longDescription: 'Our signature Nordic Oak Dining Table brings warmth and durability to your space. Crafted from sustainably sourced European oak with a natural oil finish. The generous surface accommodates six to eight guests, while the tapered legs add lightness and timeless appeal.',
    images: [
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
      'https://images.unsplash.com/photo-1595428774223-ef52651320b2?w=800',
    ],
    featured: true,
    material: 'Solid European Oak',
    dimensions: '200 × 95 × 75 cm',
    color: 'Natural Oak',
  },
  {
    id: '2',
    name: 'Velvet Lounge Chair',
    category: 'Seating',
    price: 749,
    shortDescription: 'Deep-seat lounge chair in premium velvet.',
    longDescription: 'Sink into comfort with our Velvet Lounge Chair. A deep seat and soft back support make it ideal for reading or relaxing. Upholstered in fade-resistant velvet with a solid walnut frame. Available in multiple colors to match your interior.',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800',
    ],
    featured: true,
    material: 'Velvet, Walnut',
    dimensions: '85 × 92 × 78 cm',
    color: 'Sage Green',
  },
  {
    id: '3',
    name: 'Modular Bookshelf System',
    category: 'Storage',
    price: 1299,
    shortDescription: 'Configurable shelving that grows with your collection.',
    longDescription: 'Design your own layout with our Modular Bookshelf System. Each unit can be stacked, extended, or rearranged. Made from birch plywood with optional brass or black metal brackets. Perfect for books, plants, and objects.',
    images: [
      'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800',
      'https://images.unsplash.com/photo-1595428774223-ef52651320b2?w=800',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
    ],
    featured: true,
    material: 'Birch Plywood, Metal',
    dimensions: 'Modular (90 × 30 × 200 cm per unit)',
    color: 'Natural / Black',
  },
  {
    id: '4',
    name: 'Minimalist Bed Frame',
    category: 'Bedroom',
    price: 1599,
    shortDescription: 'Low-profile platform bed in blackened ash.',
    longDescription: 'A calm, grounding presence in the bedroom. The Minimalist Bed Frame features a low silhouette and clean lines. The headboard is upholstered in linen; the base is blackened ash. No box spring required—mattress sits directly on slats.',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800',
      'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800',
    ],
    featured: true,
    material: 'Blackened Ash, Linen',
    dimensions: 'King: 208 × 218 × 45 cm',
    color: 'Charcoal',
  },
  {
    id: '5',
    name: 'Ceramic Table Lamp',
    category: 'Lighting',
    price: 289,
    shortDescription: 'Hand-thrown ceramic base with linen shade.',
    longDescription: 'Soft, diffused light from a hand-thrown ceramic base and natural linen shade. Each piece is unique. Uses an E27 bulb (not included). Ideal for bedside or side table.',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800',
    ],
    material: 'Ceramic, Linen',
    dimensions: '35 × 22 cm',
    color: 'Terracotta',
  },
  {
    id: '6',
    name: 'Leather Sofa',
    category: 'Seating',
    price: 3299,
    shortDescription: 'Three-seater in full-grain leather.',
    longDescription: 'A timeless three-seater in vegetable-tanned full-grain leather that develops a rich patina over time. Deep cushions and a supportive back. Oak legs optional in natural or smoked finish.',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
    ],
    material: 'Full-grain Leather, Oak',
    dimensions: '220 × 95 × 78 cm',
    color: 'Cognac',
  },
  {
    id: '7',
    name: 'Round Marble Coffee Table',
    category: 'Tables',
    price: 2199,
    shortDescription: 'Single-slab marble top on powder-coated steel.',
    longDescription: 'A striking centerpiece for your living room. The Round Marble Coffee Table features a single slab of honed marble—each piece unique in veining. The base is powder-coated steel in your choice of matte black or warm white.',
    images: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800',
    ],
    material: 'Marble, Steel',
    dimensions: 'Ø 100 × 42 cm',
    color: 'Calacatta / Black base',
  },
  {
    id: '8',
    name: 'Bentwood Side Chair',
    category: 'Seating',
    price: 449,
    shortDescription: 'Classic bentwood design with cane seat.',
    longDescription: 'Inspired by mid-century European design, the Bentwood Side Chair combines a steam-bent beech frame with a woven cane seat. Light, stackable, and durable. Set of two or four available.',
    images: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
    ],
    material: 'Beech, Cane',
    dimensions: '48 × 52 × 82 cm',
    color: 'Natural',
  },
];

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

export const getFeaturedProducts = (): Product[] =>
  products.filter((p) => p.featured);
