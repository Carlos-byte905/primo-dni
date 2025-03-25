import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Funda Clásica de Cuero',
    price: 49.99,
    description: 'Nuestra funda clásica de cuero genuino está diseñada para proteger tu Biblia con elegancia. Fabricada con los mejores materiales y acabados artesanales que garantizan durabilidad y estilo.',
    shortDescription: 'Elegante funda de cuero genuino con acabados artesanales.',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    features: [
      'Cuero genuino de primera calidad',
      'Costuras reforzadas',
      'Bolsillos interiores',
      'Cierre magnético'
    ],
    colors: ['Negro', 'Marrón', 'Café']
  },
  {
    id: '2',
    name: 'Funda Premium Dorada',
    price: 69.99,
    description: 'Una funda excepcional con detalles en dorado que añaden un toque de distinción. Perfecta para quienes buscan protección y elegancia en un mismo producto.',
    shortDescription: 'Funda premium con elegantes detalles dorados.',
    image: 'https://images.unsplash.com/photo-1589203832113-de9d1e9c3d74?auto=format&fit=crop&q=80&w=800',
    features: [
      'Acabados en dorado',
      'Interior acolchado',
      'Marca páginas incorporado',
      'Resistente al agua'
    ],
    colors: ['Negro/Dorado', 'Blanco/Dorado']
  },
  {
    id: '3',
    name: 'Funda Moderna Minimalista',
    price: 39.99,
    description: 'Diseño contemporáneo que combina simplicidad y funcionalidad. Ideal para un estilo de vida activo sin comprometer la protección de tu Biblia.',
    shortDescription: 'Diseño moderno y minimalista para uso diario.',
    image: 'https://images.unsplash.com/photo-1544947987-f6c64329ab16?auto=format&fit=crop&q=80&w=800',
    features: [
      'Diseño ultraligero',
      'Material resistente',
      'Fácil de limpiar',
      'Portabolígrafo incluido'
    ],
    colors: ['Gris', 'Azul', 'Rosa']
  }
];