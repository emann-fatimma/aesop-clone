import { getProducts, getCategories } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface ProductPageProps {
  params: Promise<{
    slug: string;
    product: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  // AWAIT the params - this is the fix for Next.js 15
  const { slug: categorySlug, product: productSlug } = await params;

  // Rest of your code stays exactly the same...
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  // Find the current product
  const currentProduct = products.find(
    (product) => product.slug === productSlug
  );

  // Find the current category
  const currentCategory = categories.find(
    (category) => category.slug === categorySlug
  );

  // If product or category not found, show 404
  if (!currentProduct || !currentCategory) {
    notFound();
  }

  // Fixed image URL construction
  const getImageUrl = (imageUrl: string) => {
    if (!imageUrl) return '/placeholder-image.jpg';
    
    // If the URL is already absolute (starts with http:// or https://), use it as is
    if (imageUrl?.startsWith('http://') || imageUrl?.startsWith('https://')) {
      return imageUrl;
    }
    
    // If it's a relative URL, prepend the Strapi base URL
    return `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageUrl}`;
  };

  const imageUrl = currentProduct.Image?.url 
    ? getImageUrl(currentProduct.Image.url)
    : '/placeholder-image.jpg';

  return (
    <div className="min-h-screen lg:h-screen bg-neutral-50 lg:overflow-hidden">
      {/* Logo - Desktop only */}
      <div className="relative top-10 left-10 hidden lg:block flex justify-center">
        <h1 className="text-5xl font-serif">
          Aēsop.
        </h1>
      </div>

      {/* Mobile Logo */}
      <div className="lg:hidden p-5 text-center">
        <h1 className="text-3xl font-serif">
          Aēsop.
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:h-full">
        {/* Product Image Section */}
        <div className="w-full lg:w-[70%] flex items-center justify-center bg-transparent min-h-[50vh] lg:min-h-0">
          {currentProduct.Image ? (
            <div className="relative w-full max-w-sm lg:max-w-xl aspect-square flex items-center justify-center">
              <div className="w-4/5 h-4/5 relative">
                <Image
                  src={imageUrl}
                  alt={currentProduct.Image.alternativeText || currentProduct.Name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          ) : (
            <div className="w-full max-w-sm lg:max-w-xl aspect-square bg-transparent flex items-center justify-center">
              <span className="text-neutral-400 text-lg">No image available</span>
            </div>
          )}
        </div>

        {/* Product Details Section */}
        <div className="w-full lg:w-[30%] text-neutral-400 bg-transparent relative p-5 lg:px-8 lg:py-12 flex flex-col justify-center lg:overflow-y-auto lg:right-15">
          {/* Breadcrumb */}
          <div className="mb-6">
            <p className="text-sm text-neutral-600 font-medium">
              Skin • {currentCategory.Name}
            </p>
          </div>
          <br className="hidden lg:block"/>
          
          {/* Product Name */}
          <h1 className="text-2xl lg:text-3xl font-aria text-black mb-6 lg:mb-8 leading-tight">
            {currentProduct.Name}
          </h1>
          <br className="hidden lg:block"/>
          
          {/* Long Description */}
          <div className="mb-6">
            <p className="text-sm text-neutral-700 leading-relaxed">
              {currentProduct.long_description}
            </p>
          </div>
          <br className="hidden lg:block"/>
          
          {/* Size */}
          <div className="mb-6 lg:mb-8">
            <p className="text-sm text-neutral-600 mb-1">Size</p>
            <p className="text-sm text-black">60 mL</p>
          </div>
          <br className="hidden lg:block"/>
          
          {/* Price */}
          <div className="mb-6 lg:mb-8">
            <p className="text-2xl font-semibold text-black">
              ${currentProduct.Price.toFixed(2)}
            </p>
          </div>
          <br className="hidden lg:block"/>
          
          {/* Add to Cart Button */}
          <div className="mb-4">
            <Button 
              className="w-full bg-stone-700 text-white hover:bg-neutral-800 h-12 lg:h-17 text-sm font-normal rounded-none"
              size="lg"
            >
              Add to your cart
            </Button>
          </div>
          <br className="hidden lg:block"/>
          <br className="hidden lg:block"/>
          
          {/* Save to Cabinet Button */}
          <div className="mb-6 lg:mb-8">
            <Button 
              variant="ghost" 
              className="w-full justify-start p-0 h-auto text-sm font-normal text-neutral-700 hover:text-black hover:bg-transparent"
            >
              <Heart className="w-4 h-4 mr-2" />
              Save to cabinet
            </Button>
          </div>
          
          <hr className="border-black" />
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: ProductPageProps) {
  // AWAIT params here too
  const { product: productSlug } = await params;
  
  const products = await getProducts();
  const currentProduct = products.find(
    (product) => product.slug === productSlug
  );

  if (!currentProduct) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${currentProduct.Name} - Aesop`,
    description: currentProduct.short_description,
  };
}

// Generate static params for static generation (optional)
export async function generateStaticParams() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  const params = [];
  
  for (const category of categories) {
    for (const product of products) {
      params.push({
        slug: category.slug,
        product: product.slug,
      });
    }
  }

  return params;
}


