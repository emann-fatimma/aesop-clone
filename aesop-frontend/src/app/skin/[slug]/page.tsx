import { getProductsByCategory, getCategories } from '@/lib/api';
import { ProductGrid } from '@/components/ProductGrid';
import CategoryBanner from '@/components/CategoryBanner';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Configure revalidation - 1 hour = 3600 seconds
export const revalidate = 3600;

function CircularLoader() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-neutral-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-stone-700 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

// Updated type definition to match Next.js App Router expectations
type CategoryPageProps = {
  params: Promise<{ slug: string; }>;
};

// Generate metadata for SEO
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    // Get all categories to find the current one by slug
    const categories = await getCategories();
    const currentCategory = categories.find(cat => cat.slug === slug);
    
    if (!currentCategory) {
      return {
        title: 'Category Not Found',
        description: 'The requested category could not be found.',
      };
    }

    // Get products count for this category
    const products = await getProductsByCategory(slug);
    const productCount = products.length;

    return {
      title: `${currentCategory.Name} - Browse ${productCount} Products`,
      description: currentCategory.Description 
        ? `${currentCategory.Description} - Discover ${productCount} products in our ${currentCategory.Name} category.`
        : `Browse ${productCount} products in our ${currentCategory.Name} category. Find the perfect items for your needs.`,
      keywords: `${currentCategory.Name}, products, shop, ${slug}`,
      openGraph: {
        title: `${currentCategory.Name} - Browse ${productCount} Products`,
        description: currentCategory.Description || `Browse ${productCount} products in our ${currentCategory.Name} category.`,
        type: 'website',
        ...(currentCategory.Image && {
          images: [
            {
              url: currentCategory.Image.url,
              width: currentCategory.Image.width ?? undefined,
              height: currentCategory.Image.height ?? undefined,
              alt: currentCategory.Image.alternativeText || currentCategory.Name,
            }
          ]
        })
      },
      twitter: {
        card: 'summary_large_image',
        title: `${currentCategory.Name} - Browse ${productCount} Products`,
        description: currentCategory.Description || `Browse ${productCount} products in our ${currentCategory.Name} category.`,
        ...(currentCategory.Image && {
          images: [currentCategory.Image.url]
        })
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Category Products',
      description: 'Browse our product categories',
    };
  }
}

// Generate static params for better performance 
export async function generateStaticParams() {
  try {
    const categories = await getCategories();
    
    return categories.map((category) => ({
      slug: category.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Main Category Content Component
async function CategoryContent({ slug }: { slug: string }) {
  // Fetch data with Promise.all for better performance
  const [products, categories] = await Promise.all([
    getProductsByCategory(slug),
    getCategories()
  ]);

  // Check if category exists
  const currentCategory = categories.find(cat => cat.slug === slug);
  if (!currentCategory) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Banner at the top */}
      <CategoryBanner slug={slug} />

      {/* Product Grid Section */}
      <div className="container mx-auto py-8">
        {/* Category Info Section */}
        {/* <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentCategory.Name}</h1>
          {currentCategory.Description && (
            <p className="text-gray-600 text-lg mb-4">{currentCategory.Description}</p>
          )}
          <p className="text-gray-500">
            {products.length} {products.length === 1 ? 'product' : 'products'} found
          </p>
        </div> */}

        {/* Products */}
        {products.length > 0 ? (
          <ProductGrid products={products} categorySlug={slug} />
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No products found</h2>
            <p className="text-gray-500 text-lg">
              We dont have any products in the {currentCategory.Name} category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  // Await the params since they're now a Promise in newer Next.js versions
  const { slug } = await params;

  return (
    <Suspense fallback={<CircularLoader />}>
      <CategoryContent slug={slug} />
    </Suspense>
  );
}