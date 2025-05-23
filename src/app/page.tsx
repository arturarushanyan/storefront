import { getProducts } from '@/services/api';
import ProductCard from '@/components/ProductCard';
import { Metadata } from 'next';

// Enable static generation with revalidation
export const revalidate = 3600; // Revalidate every hour

// Generate metadata for the home page
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Store | Browse Our Products',
    description: 'Discover our wide range of products at great prices.',
    openGraph: {
      title: 'Store | Browse Our Products',
      description: 'Discover our wide range of products at great prices.',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Store | Browse Our Products',
      description: 'Discover our wide range of products at great prices.',
    },
  };
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
