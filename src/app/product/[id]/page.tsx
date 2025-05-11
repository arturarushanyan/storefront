import Image from 'next/image';
import { getProduct, getProducts } from '@/services/api';
import { notFound } from 'next/navigation';
import ProductRating from '@/components/ProductRating';

interface ProductPageProps {
  params: {
    id: string;
  };
}

// Generate static paths for all products
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Enable static generation with revalidation
export const revalidate = 3600; // Revalidate every hour

export default async function ProductPage({ params }: ProductPageProps) {
  // Check if the ID is a valid number
  const productId = parseInt(params.id);
  if (isNaN(productId)) {
    notFound();
  }

  try {
    const product = await getProduct(productId);

    if (!product) {
      notFound();
    }

    return (
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-2xl font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
            <ProductRating rating={product.rating} />
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Category</h2>
              <p className="text-gray-600 capitalize">{product.category}</p>
            </div>
            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    // Handle any API errors
    console.error('Error fetching product:', error);
    notFound();
  }
}
