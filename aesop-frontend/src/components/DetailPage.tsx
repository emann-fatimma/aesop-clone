



// // // // components/DetailPage.tsx
// // // import { Button } from '@/components/ui/button';
// // // import { Heart } from 'lucide-react';
// // // import Image from 'next/image';

// // // interface ProductImage {
// // //   url: string;
// // //   alternativeText?: string;
// // // }

// // // interface Product {
// // //   Name: string;
// // //   long_description: string;
// // //   Price: number;
// // //   Image?: ProductImage;
// // // }

// // // interface Category {
// // //   Name: string;
// // // }

// // // interface DetailPageProps {
// // //   currentProduct: Product;
// // //   currentCategory: Category;
// // // }

// // // export default function DetailPage({ currentProduct, currentCategory }: DetailPageProps) {
// // //   // Fixed image URL construction
// // //   const getImageUrl = (imageUrl: string) => {
// // //     if (!imageUrl) return '/placeholder-image.jpg';
    
// // //     // If the URL is already absolute (starts with http:// or https://), use it as is
// // //     if (imageUrl?.startsWith('http://') || imageUrl?.startsWith('https://')) {
// // //       return imageUrl;
// // //     }
    
// // //     // If it's a relative URL, prepend the Strapi base URL
// // //     return `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageUrl}`;
// // //   };

// // //   const imageUrl = currentProduct.Image?.url 
// // //     ? getImageUrl(currentProduct.Image.url)
// // //     : '/placeholder-image.jpg';

// // //   return (
// // //     <div className="min-h-screen bg-neutral-50">
// // //       {/* Header */}
// // //       {/* <header className="px-8 py-6">
// // //         <h1 className="text-2xl font-light text-black">Aesop.</h1>
// // //       </header> */}

// // //       {/* Main Content */}
// // //       <div className="flex min-h-[calc(100vh-120px)]">
// // //         {/* Left Side - Product Image (70%) */}
// // //         <div className="w-[70%] flex items-center justify-center bg-neutral-100">
// // //           {currentProduct.Image ? (
// // //             <div className="relative w-full max-w-2xl aspect-square">
// // //               <Image
// // //                 src={imageUrl}
// // //                 alt={currentProduct.Image.alternativeText || currentProduct.Name}
// // //                 fill
// // //                 className="object-contain"
// // //                 priority
// // //               />
// // //             </div>
// // //           ) : (
// // //             <div className="w-full max-w-2xl aspect-square bg-neutral-200 flex items-center justify-center">
// // //               <span className="text-neutral-400 text-lg">No image available</span>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Right Side - Product Details (30%) */}
// // //         <div className="  w-[30%] bg-white px-12 py-16 flex flex-col ">
// // //             <div className='h-40 bg-transparent'></div>
// // //             <div className='relative left-4 '>
// // //           {/* Breadcrumb */}
// // //           <div className="mb-8">
// // //             <p className="text-sm text-neutral-600 font-medium">
// // //               Skin • {currentCategory.Name}
// // //             </p>
// // //           </div>

// // //           {/* Product Name */}
// // //           <h1 className="text-4xl font-light text-black mb-8 leading-loose">
// // //             {currentProduct.Name}
// // //           </h1>

// // //           {/* Long Description */}
// // //           <div className="mb-8 flex-grow">
// // //             <p className="text-base text-neutral-700 leading-relaxed">
// // //               {currentProduct.long_description}
// // //             </p>
// // //           </div><br/>

// // //           {/* Price */}
// // //           <div className="mb-8">
// // //             <p className="text-2xl font-semibold text-black">
// // //               ${currentProduct.Price.toFixed(2)}
// // //             </p>
// // //           </div>

// // // <div className='relative top-25'>
// // //           {/* Add to Cart Button */}
// // //           <div className="mb-6 ">
// // //             <Button 
// // //               className="w-full bg-black text-white hover:bg-neutral-800 h-12 text-base font-medium leading-loose"
// // //               size="lg"
// // //             >
// // //               Add to your cart
// // //             </Button>
// // //           </div><br/>

// // //           {/* Save to Cabinet Button */}
// // //           <div className="mb-12">
// // //             <Button 
// // //               variant="ghost" 
// // //               className="w-full justify-start p-0 h-auto text-base font-normal text-neutral-700 hover:text-black hover:bg-transparent leading leading-loose"
// // //             >
// // //               <Heart className="w-4 h-4 mr-2" />
// // //               Save to cabinet
// // //             </Button>
            
// // //           </div><br/><hr/>
// // // </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // components/DetailPage.tsx
// // import { Button } from '@/components/ui/button';
// // import { Heart } from 'lucide-react';
// // import Image from 'next/image';

// // interface ProductImage {
// //   url: string;
// //   alternativeText?: string;
// // }

// // interface Product {
// //   Name: string;
// //   long_description: string;
// //   Price: number;
// //   Image?: ProductImage;
// // }

// // interface Category {
// //   Name: string;
// // }

// // interface DetailPageProps {
// //   currentProduct: Product;
// //   currentCategory: Category;
// // }

// // export default function DetailPage({ currentProduct, currentCategory }: DetailPageProps) {
// //   // Fixed image URL construction
// //   const getImageUrl = (imageUrl: string) => {
// //     if (!imageUrl) return '/placeholder-image.jpg';
    
// //     // If the URL is already absolute (starts with http:// or https://), use it as is
// //     if (imageUrl?.startsWith('http://') || imageUrl?.startsWith('https://')) {
// //       return imageUrl;
// //     }
    
// //     // If it's a relative URL, prepend the Strapi base URL
// //     return `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageUrl}`;
// //   };

// //   const imageUrl = currentProduct.Image?.url 
// //     ? getImageUrl(currentProduct.Image.url)
// //     : '/placeholder-image.jpg';

// //   return (
// //     <div className="bg-neutral-50">
// //       {/* Header */}
// //       {/* <header className="px-8 py-6">
// //         <h1 className="text-2xl font-light text-black">Aesop.</h1>
// //       </header> */}

// //       {/* Main Content */}
// //       <div className="flex min-h-screen">
// //         {/* Left Side - Product Image (70%) */}
// //         <div className="w-[70%] flex items-center justify-center bg-neutral-100">
// //           {currentProduct.Image ? (
// //             <div className="relative w-full max-w-2xl aspect-square">
// //               <Image
// //                 src={imageUrl}
// //                 alt={currentProduct.Image.alternativeText || currentProduct.Name}
// //                 fill
// //                 className="object-contain"
// //                 priority
// //               />
// //             </div>
// //           ) : (
// //             <div className="w-full max-w-2xl aspect-square bg-neutral-200 flex items-center justify-center">
// //               <span className="text-neutral-400 text-lg">No image available</span>
// //             </div>
// //           )}
// //         </div>

// //         {/* Right Side - Product Details (30%) */}
// //         <div className="w-[30%] bg-white px-12 py-16">
// //           <div className='h-40 bg-transparent'></div>
// //           <div className='relative left-4'>
// //             {/* Breadcrumb */}
// //             <div className="mb-8">
// //               <p className="text-sm text-neutral-600 font-medium">
// //                 Skin • {currentCategory.Name}
// //               </p>
// //             </div>

// //             {/* Product Name */}
// //             <h1 className="text-4xl font-light text-black mb-8 leading-loose">
// //               {currentProduct.Name}
// //             </h1>

// //             {/* Long Description */}
// //             <div className="mb-8">
// //               <p className="text-base text-neutral-700 leading-relaxed">
// //                 {currentProduct.long_description}
// //               </p>
// //             </div><br/>

// //             {/* Price */}
// //             <div className="mb-8">
// //               <p className="text-2xl font-semibold text-black">
// //                 ${currentProduct.Price.toFixed(2)}
// //               </p>
// //             </div>

// //             <div className='mt-8'>
// //               {/* Add to Cart Button */}
// //               <div className="mb-6">
// //                 <Button 
// //                   className="w-full bg-black text-white hover:bg-neutral-800 h-12 text-base font-medium leading-loose"
// //                   size="lg"
// //                 >
// //                   Add to your cart
// //                 </Button>
// //               </div><br/>

// //               {/* Save to Cabinet Button */}
// //               <div className="mb-12">
// //                 <Button 
// //                   variant="ghost" 
// //                   className="w-full justify-start p-0 h-auto text-base font-normal text-neutral-700 hover:text-black hover:bg-transparent leading-loose"
// //                 >
// //                   <Heart className="w-4 h-4 mr-2" />
// //                   Save to cabinet
// //                 </Button>
// //               </div><br/><hr/>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // components/DetailPage.tsx
// import { Button } from '@/components/ui/button';
// import { Heart } from 'lucide-react';
// import Image from 'next/image';

// interface ProductImage {
//   url: string;
//   alternativeText?: string;
// }

// interface Product {
//   Name: string;
//   long_description: string;
//   Price: number;
//   Image?: ProductImage;
// }

// interface Category {
//   Name: string;
// }

// interface DetailPageProps {
//   currentProduct: Product;
//   currentCategory: Category;
// }

// export default function DetailPage({ currentProduct, currentCategory }: DetailPageProps) {
//   // Fixed image URL construction
//   const getImageUrl = (imageUrl: string) => {
//     if (!imageUrl) return '/placeholder-image.jpg';
    
//     // If the URL is already absolute (starts with http:// or https://), use it as is
//     if (imageUrl?.startsWith('http://') || imageUrl?.startsWith('https://')) {
//       return imageUrl;
//     }
    
//     // If it's a relative URL, prepend the Strapi base URL
//     return `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageUrl}`;
//   };

//   const imageUrl = currentProduct.Image?.url 
//     ? getImageUrl(currentProduct.Image.url)
//     : '/placeholder-image.jpg';

//   return (
//     <div className="bg-neutral-50">
//       {/* Header */}
//       <header className="px-8 py-6">
//         <h1 className="text-2xl font-light text-black">Aesop.</h1>
//       </header>

//       {/* Main Content */}
//       <div className="flex min-h-screen">
//         {/* Left Side - Product Image (70%) */}
//         <div className="w-[70%] flex items-center justify-center bg-neutral-50 px-16">
//           {currentProduct.Image ? (
//             <div className="relative w-full max-w-lg">
//               <Image
//                 src={imageUrl}
//                 alt={currentProduct.Image.alternativeText || currentProduct.Name}
//                 width={500}
//                 height={500}
//                 className="object-contain w-full h-auto"
//                 priority
//               />
//             </div>
//           ) : (
//             <div className="w-full max-w-lg aspect-square bg-neutral-200 flex items-center justify-center">
//               <span className="text-neutral-400 text-lg">No image available</span>
//             </div>
//           )}
//         </div>

//         {/* Right Side - Product Details (30%) */}
//         <div className="w-[30%] bg-white px-12 py-16">
//           {/* Breadcrumb */}
//           <div className="mb-4">
//             <p className="text-sm text-neutral-600 font-medium">
//               Skin • {currentCategory.Name}
//             </p>
//           </div>
// <br/>
//           {/* Product Name */}
//           <h1 className="text-4xl font-light text-black mb-8 leading-tight">
//             {currentProduct.Name}
//           </h1>

//           {/* Long Description */}
//           <div className="mb-8">
//             <p className="text-base text-neutral-700 leading-relaxed mb-4">
//               {currentProduct.long_description}
//             </p>
            
//             <div className="mb-4">
//               <p className="text-sm text-black font-medium mb-1">Size</p>
//               <p className="text-sm text-neutral-600">60 mL</p>
//             </div>
//           </div>

//           {/* Price */}
//           <div className="mb-8">
//             <p className="text-2xl font-light text-black">
//               ${currentProduct.Price.toFixed(2)}
//             </p>
//           </div>

//           {/* Add to Cart Button */}
//           <div className="mb-4">
//             <Button 
//               className="w-full bg-black text-white hover:bg-neutral-800 h-12 text-base font-medium"
//               size="lg"
//             >
//               Add to your cart
//             </Button>
//           </div>

//           {/* Save to Cabinet Button */}
//           <div className="mb-8">
//             <Button 
//               variant="ghost" 
//               className="w-full justify-start p-0 h-auto text-base font-normal text-neutral-700 hover:text-black hover:bg-transparent"
//             >
//               <Heart className="w-4 h-4 mr-2" />
//               Save to cabinet
//             </Button>
//           </div>

//           {/* Divider */}
//           <hr className="border-neutral-300"/>
//         </div>
//       </div>
//     </div>
//   );
// }