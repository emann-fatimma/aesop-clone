// import { getProductsByCategory } from '@/lib/api';
// import { ProductGrid } from '@/components/ProductGrid';
// import CategoryBanner from '@/components/CategoryBanner';

// export default async function CategoryPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const products = await getProductsByCategory(params.slug);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Category Banner at the top */}
//       <CategoryBanner slug={params.slug} />
      
//       {/* Product Grid Section */}
//       <div className="container mx-auto py-8">
//         {products.length > 0 ? (
//           <ProductGrid products={products} />
//         ) : (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No products found in this category.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import { getProductsByCategory } from '@/lib/api';
import { ProductGrid } from '@/components/ProductGrid';
import CategoryBanner from '@/components/CategoryBanner';

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const products = await getProductsByCategory(params.slug);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Banner at the top */}
      <CategoryBanner slug={params.slug} />

      {/* Product Grid Section */}
      <div className="container mx-auto py-8">
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
