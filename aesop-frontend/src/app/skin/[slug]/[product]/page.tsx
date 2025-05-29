// import ProductDetailPage from '@/components/ProductDetailPage';

// interface PageProps {
//   params: {
//     slug: string[];
//   };
// }

// export default function Page({ params }: PageProps) {
//   // Extract the category slug and product slug from the params
//   const [categorySlug, productSlug] = params.slug;

//   return (
//     <ProductDetailPage 
//       categorySlug={categorySlug} 
//       productSlug={productSlug} 
//     />
//   );
// }

// // Optional: Generate metadata for SEO
// export async function generateMetadata({ params }: PageProps) {
//   const [categorySlug, productSlug] = params.slug;
  
//   return {
//     title: `${productSlug.replace('-', ' ')} - Aesop`,
//     description: `Explore ${productSlug.replace('-', ' ')} from Aesop's ${categorySlug.replace('-', ' ')} collection.`,
//   };
// }



// import ProductDetailPage from '@/components/ProductDetailPage';

// interface PageProps {
//   params: {
//     slug: string[];
//   };
// }

// export default function Page({ params }: PageProps) {
//   // For folder structure: app/skin/[slug]/[slug]/
//   // URL: /skin/cleansers-and-exfoliants/amazing-care-for-oily-skin
//   // params.slug will be: ["cleansers-and-exfoliants", "amazing-care-for-oily-skin"]
  
//   const [categorySlug, productSlug] = params.slug;

//   return (
//     <ProductDetailPage 
//       categorySlug={categorySlug} 
//       productSlug={productSlug} 
//     />
//   );
// }

// // Optional: Generate metadata for SEO
// export async function generateMetadata({ params }: PageProps) {
//   const [categorySlug, productSlug] = params.slug;
  
//   return {
//     title: `${productSlug?.replace(/-/g, ' ') || 'Product'} - Aesop`,
//     description: `Explore ${productSlug?.replace(/-/g, ' ')} from Aesop's ${categorySlug?.replace(/-/g, ' ')} collection.`,
//   };
// }


//----------------------------------


// import ProductDetailPage from '@/components/ProductDetailPage';


// // Updated type definition to handle both slug and product parameters
// type ProductPageProps = {
//   params: Promise<{
//     slug: string;
//     product: string;
//   }>;
// };

// export default async function ProductPage({ params }: ProductPageProps) {
//   // Await the params since they're now a Promise in newer Next.js versions
//   const { slug, product } = await params;
  
//   // Simply render the client component with the slugs as props
//   return <ProductDetailPage params={{
//     slug: '{slug},
//         products: {product}
//       }}  />;
// }

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold text-center">Fourth Page</h1>
        <p className="text-center text-gray-500 mt-4">The 4th page is under construction.</p>
      </div>
    </div>
  );
}