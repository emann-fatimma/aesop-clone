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


import ProductDetailPage from '@/components/ProductDetailPage';

interface PageProps {
  params: {
    slug: string[];
  };
}

export default function Page({ params }: PageProps) {
  // For folder structure: app/skin/[slug]/[slug]/
  // URL: /skin/cleansers-and-exfoliants/amazing-care-for-oily-skin
  // params.slug will be: ["cleansers-and-exfoliants", "amazing-care-for-oily-skin"]
  
  const [categorySlug, productSlug] = params.slug;

  return (
    <ProductDetailPage 
      categorySlug={categorySlug} 
      productSlug={productSlug} 
    />
  );
}

// Optional: Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const [categorySlug, productSlug] = params.slug;
  
  return {
    title: `${productSlug?.replace(/-/g, ' ') || 'Product'} - Aesop`,
    description: `Explore ${productSlug?.replace(/-/g, ' ')} from Aesop's ${categorySlug?.replace(/-/g, ' ')} collection.`,
  };
}