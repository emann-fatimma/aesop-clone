import BottomBanner from '@/components/BottomBanner';
import CategoriesGrid from '@/components/CategoriesGrid';
import GridContinuation from '@/components/GridContinuation';
// import ProductSliderBox from '@/components/ProductSliderBox';
import SkinCareBanner from '@/components/SkinCareBanner';
import SkinTypesFormulations from '@/components/SkinTypesFormulations';
import Slider from '@/components/Slider';
import { Suspense } from 'react';
import { Metadata } from 'next';
// import { getProducts } from '@/lib/api';

// Configure revalidation - 1 hour = 3600 seconds
export const revalidate = 3600;

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

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  try {
    return {
      title: 'Aesop - Premium Skincare & Beauty Products',
      description: 'Discover our premium collection of skincare and beauty products. Explore different skin types, formulations, and find the perfect products for your skincare routine.',
      keywords: 'skincare, beauty products, premium cosmetics, skin types, formulations, Aesop',
      openGraph: {
        title: 'Aesop - Premium Skincare & Beauty Products',
        description: 'Discover our premium collection of skincare and beauty products. Explore different skin types, formulations, and find the perfect products for your skincare routine.',
        type: 'website',
        url: '/',
        siteName: 'Aesop',
        locale: 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Aesop - Premium Skincare & Beauty Products',
        description: 'Discover our premium collection of skincare and beauty products. Explore different skin types, formulations, and find the perfect products for your skincare routine.',
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      verification: {
        // Add your verification tokens here if needed
        // google: 'your-google-verification-code',
        // yandex: 'your-yandex-verification-code',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Aesop - Premium Skincare Products',
      description: 'Discover our premium skincare collection',
    };
  }
}

// Main Home Content Component
async function HomeContent() {
  try {
    // Uncomment when you need to fetch products
    // const products = await getProducts();

    return (
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section>
          <SkinCareBanner />
        </section>

        {/* Categories Section */}
        <section className="py-8 md:py-12">
          <CategoriesGrid />
        </section>

        {/* Slider Section */}
        <section className="py-8 md:py-12">
          <Slider />
        </section>

        {/* Grid Continuation Section */}
        <section className="py-8 md:py-12">
          <GridContinuation />
        </section>

        {/* Skin Types & Formulations Section */}
        <section className="py-8 md:py-12">
          <SkinTypesFormulations />
        </section>

        {/* Bottom Banner Section */}
        <section>
          <BottomBanner />
        </section>

        {/* Product Slider Section - Uncomment when needed */}
        {/* <section className="py-8 md:py-12">
          <ProductSliderBox products={products} />
        </section> */}
      </main>
    );
  } catch (error) {
    console.error('Error loading home content:', error);
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Something went wrong
          </h1>
          <p className="text-gray-600">
            We are having trouble loading the page. Please try again later.
          </p>
        </div>
      </main>
    );
  }
}

export default async function Home() {
  return (
    <Suspense fallback={<CircularLoader />}>
      <HomeContent />
    </Suspense>
  );
}