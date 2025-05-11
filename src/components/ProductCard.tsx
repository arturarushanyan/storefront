import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import ProductRating from './ProductRating';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="h-full w-full object-contain object-center group-hover:opacity-75"
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm text-gray-700 truncate">{product.title}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">${product.price.toFixed(2)}</p>
          <ProductRating rating={product.rating} />
        </div>
      </div>
    </Link>
  );
}
