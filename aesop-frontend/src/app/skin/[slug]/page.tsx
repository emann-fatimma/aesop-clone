import { getProductsByCategory } from '@/lib/api';
import { ProductGrid } from '@/components/ProductGrid';
import CategoryBanner from '@/components/CategoryBanner';

// Updated type definition to match Next.js App Router expectations
type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  // Await the params since they're now a Promise in newer Next.js versions
  const { slug } = await params;
  const products = await getProductsByCategory(slug);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Banner at the top */}
      <CategoryBanner slug={slug} />
      
      {/* Product Grid Section */}
      <div className="container mx-auto py-8">
        {products.length > 0 ? (
          <ProductGrid products={products} categorySlug={slug} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}


// import { getProductsByCategory } from '@/lib/api';
// import { ProductGrid } from '@/components/ProductGrid';
// import CategoryBanner from '@/components/CategoryBanner';

// // Updated type definition to match Next.js App Router expectations
// type CategoryPageProps = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// export default async function CategoryPage({ params }: CategoryPageProps) {
//   // Await the params since they're now a Promise in newer Next.js versions
//   const { slug } = await params;
  
//   console.log('=== DEBUG INFO ===');
//   console.log('Category slug from URL:', slug);
  
//   try {
//     const products = await getProductsByCategory(slug);
//     console.log('Products fetched:', products.length);
//     console.log('First few products:', products.slice(0, 2));
    
//     return (
//       <div className="min-h-screen bg-gray-50">
//         {/* Category Banner at the top */}
//         <CategoryBanner slug={slug} />
        
//         {/* Debug Info - Remove this in production */}
//         <div className="bg-yellow-100 p-4 m-4 border border-yellow-300">
//           <h3 className="font-bold">Debug Info:</h3>
//           <p>Category Slug: {slug}</p>
//           <p>Products Found: {products.length}</p>
//           {products.length > 0 && (
//             <details>
//               <summary>First Product Details</summary>
//               <pre className="text-xs mt-2 overflow-auto">
//                 {JSON.stringify(products[0], null, 2)}
//               </pre>
//             </details>
//           )}
//         </div>
        
//         {/* Product Grid Section */}
//         <div className="container mx-auto py-8">
//           {products.length > 0 ? (
//             <ProductGrid products={products} categorySlug={slug} />
//           ) : (
//             <div className="text-center py-12">
//               <p className="text-gray-500 text-lg">No products found in this category.</p>
//               <p className="text-sm text-gray-400 mt-2">Category slug: {slug}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="text-center py-12">
//           <p className="text-red-500 text-lg">Error loading products</p>
//           <p className="text-sm text-gray-400 mt-2">Check console for details</p>
//         </div>
//       </div>
//     );
//   }
// }
