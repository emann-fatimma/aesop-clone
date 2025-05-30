// app/skin/[slug]/[product]/page.tsx
import { getProducts, getCategories } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface ProductPageProps {
  params: {
    slug: string;
    product: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  // AWAIT the params - this is the fix for Next.js 15
  const { slug: categorySlug, product: productSlug } = await params;

// ADD DEBUGGING HERE - RIGHT AFTER PARAMS
  console.log('=== DEBUGGING START ===');
  console.log('Category slug from URL:', categorySlug);
  console.log('Product slug from URL:', productSlug);
  console.log('Full params:', params);


  // Rest of your code stays exactly the same...
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  // ADD ALL DEBUGGING HERE - AFTER THE DATA FETCH
  const problematicCategories = categories.filter(cat => 
    cat.Name.includes('Treat') || cat.Name.includes('Cleansers')
  );
  console.log('Problematic categories:', problematicCategories);
// After your existing debugging, add this:
console.log('Looking for product slug:', "${productSlug}");
console.log('Available product slugs:', products.map(p => p.slug));

// Check if the specific product exists
const productExists = products.some(p => p.slug === productSlug);
console.log('Product exists:', productExists);


// export default async function ProductPage({ params }: ProductPageProps) {
//   const { slug: categorySlug, product: productSlug } = params;

//   // Fetch all products and categories
//   const [products, categories] = await Promise.all([
//     getProducts(),
//     getCategories(),
//   ]);

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
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      {/* <header className="px-8 py-6">
        <h1 className="text-2xl font-light text-black">Aesop.</h1>
      </header> */}

      {/* Main Content */}
      <div className="flex min-h-[calc(100vh-120px)]">
        {/* Left Side - Product Image (70%) */}
        <div className="w-[70%] flex items-center justify-center bg-neutral-100">
          {currentProduct.Image ? (
            <div className="relative w-full max-w-2xl aspect-square">
              <Image
                src={imageUrl}
                alt={currentProduct.Image.alternativeText || currentProduct.Name}
                fill
                className="object-contain"
                priority
              />
            </div>
          ) : (
            <div className="w-full max-w-2xl aspect-square bg-neutral-200 flex items-center justify-center">
              <span className="text-neutral-400 text-lg">No image available</span>
            </div>
          )}
        </div>

        {/* Right Side - Product Details (30%) */}
        <div className="  w-[30%] bg-white px-12 py-16 flex flex-col ">
            <div className='h-40 bg-transparent'></div>
            <div className='relative left-4 '>
          {/* Breadcrumb */}
          <div className="mb-8">
            <p className="text-sm text-neutral-600 font-medium">
              Skin • {currentCategory.Name}
            </p>
          </div>

          {/* Product Name */}
          <h1 className="text-4xl font-light text-black mb-8 leading-loose">
            {currentProduct.Name}
          </h1>

          {/* Long Description */}
          <div className="mb-8 flex-grow">
            <p className="text-base text-neutral-700 leading-relaxed">
              {currentProduct.long_description}
            </p>
          </div><br/>

          {/* Price */}
          <div className="mb-8">
            <p className="text-2xl font-semibold text-black">
              ${currentProduct.Price.toFixed(2)}
            </p>
          </div>

<div className='relative top-25'>
          {/* Add to Cart Button */}
          <div className="mb-6 ">
            <Button 
              className="w-full bg-black text-white hover:bg-neutral-800 h-12 text-base font-medium leading-loose"
              size="lg"
            >
              Add to your cart
            </Button>
          </div><br/>

          {/* Save to Cabinet Button */}
          <div className="mb-12">
            <Button 
              variant="ghost" 
              className="w-full justify-start p-0 h-auto text-base font-normal text-neutral-700 hover:text-black hover:bg-transparent leading leading-loose"
            >
              <Heart className="w-4 h-4 mr-2" />
              Save to cabinet
            </Button>
            
          </div><br/><hr/>
</div>
          </div>
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

// // Generate metadata for SEO
// export async function generateMetadata({ params }: ProductPageProps) {
//   const { product: productSlug } = params;
//   const products = await getProducts();
//   const currentProduct = products.find(
//     (product) => product.slug === productSlug
//   );

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







