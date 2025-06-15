import { getProducts, getCategories } from '@/lib/api';
import { notFound } from 'next/navigation';
import LogoHeader from '@/components/LogoHeader';
import ProductImageSection from '@/components/ProductImageSection';
import ProductDetailsSection from '@/components/ProductDetailsSection';
import { getImageUrl } from '@/lib/imageUrlHelper';
import { Product, Category } from '@/lib/types';
import { Suspense } from 'react';
import { Metadata } from 'next';

// Configure revalidation - 1 hour = 3600 seconds
export const revalidate = 3600;

// Inline Circular Loader Component
function CircularLoader() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-neutral-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-stone-700 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

// Updated type definition to match Next.js App Router expectations
type ProductPageProps = {
  params: Promise<{ slug: string; product: string; }>;
};

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { product: productSlug, slug: categorySlug } = await params;
  
  try {
    // Fetch data with Promise.all for better performance
    const [products, categories] = await Promise.all([
      getProducts(),
      getCategories(),
    ]);

    const currentProduct: Product | undefined = products.find(
      (product) => product.slug === productSlug
    );

    const currentCategory: Category | undefined = categories.find(
      (category) => category.slug === categorySlug
    );

    if (!currentProduct) {
      return {
        title: 'Product Not Found',
        description: 'The requested product could not be found.',
      };
    }

    const imageUrl = currentProduct.Image?.url 
      ? getImageUrl(currentProduct.Image.url) 
      : '/placeholder-image.jpg';

    return {
      title: `${currentProduct.Name} - ${currentCategory?.Name || 'Aesop'}`,
      description: currentProduct.short_description || 
        `Discover ${currentProduct.Name} from our ${currentCategory?.Name || 'premium'} collection. High-quality products for your needs.`,
      keywords: `${currentProduct.Name}, ${currentCategory?.Name}, products, shop, ${productSlug}`,
      openGraph: {
        title: `${currentProduct.Name} - ${currentCategory?.Name || 'Aesop'}`,
        description: currentProduct.short_description || 
          `Discover ${currentProduct.Name} from our ${currentCategory?.Name || 'premium'} collection.`,
        type: 'website',
        images: [
          {
            url: imageUrl,
            width: currentProduct.Image?.width || 800,
            height: currentProduct.Image?.height || 800,
            alt: currentProduct.Image?.alternativeText || currentProduct.Name,
          }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        title: `${currentProduct.Name} - ${currentCategory?.Name || 'Aesop'}`,
        description: currentProduct.short_description || 
          `Discover ${currentProduct.Name} from our ${currentCategory?.Name || 'premium'} collection.`,
        images: [imageUrl]
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Product Details',
      description: 'Browse our premium products',
    };
  }
}

// Generate static params for better performance
export async function generateStaticParams() {
  try {
    const [products, categories] = await Promise.all([
      getProducts(),
      getCategories(),
    ]);

    const params = [];
    
    // Generate params for products that belong to categories
    for (const category of categories) {
      for (const product of products) {
        // Only include if product belongs to this category
        // You might need to adjust this logic based on your data structure
        params.push({
          slug: category.slug,
          product: product.slug,
        });
      }
    }

    return params;
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Main Product Content Component
async function ProductContent({ categorySlug, productSlug }: { categorySlug: string; productSlug: string }) {
  // Fetch data with Promise.all for better performance
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  const currentProduct: Product | undefined = products.find(
    (product) => product.slug === productSlug
  );

  const currentCategory: Category | undefined = categories.find(
    (category) => category.slug === categorySlug
  );

  // Check if product and category exist
  if (!currentProduct || !currentCategory) {
    notFound();
  }

  const imageUrl = currentProduct.Image?.url 
    ? getImageUrl(currentProduct.Image.url) 
    : '/placeholder-image.jpg';

  return (
    <div className="min-h-screen lg:h-screen bg-neutral-50 lg:overflow-hidden">
      <LogoHeader />
      
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:h-full">
        <ProductImageSection 
          product={currentProduct} 
          imageUrl={imageUrl} 
        />
        <ProductDetailsSection 
          product={currentProduct} 
          category={currentCategory} 
        />
      </div>
    </div>
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  // Await the params since they're now a Promise in newer Next.js versions
  const { slug: categorySlug, product: productSlug } = await params;

  return (
    <Suspense fallback={<CircularLoader />}>
      <ProductContent 
        categorySlug={categorySlug} 
        productSlug={productSlug} 
      />
    </Suspense>
  );
}
