import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import AddToCartButton from '@/components/AddToCartButton';
import { Product } from '@/lib/types'; // Import the Product type

interface ProductDetailsSectionProps {
  product: Product; // Use the full Product type
  category: {
    Name: string;
  };
}

export default function ProductDetailsSection({ product, category }: ProductDetailsSectionProps) {
  return (
    <div className="w-full lg:w-[30%] text-neutral-400 bg-transparent relative p-5 lg:px-8 lg:py-12 flex flex-col justify-center lg:overflow-y-auto lg:right-15">
      {/* Breadcrumb */}
      <div className="mb-6">
        <p className="text-sm text-neutral-600 font-medium">
          Skin • {category.Name}
        </p>
      </div>
      
      <br className="hidden lg:block"/>
      
      {/* Product Name */}
      <h1 className="text-2xl lg:text-3xl font-aria text-black mb-6 lg:mb-8 leading-tight">
        {product.Name}
      </h1>
      
      <br className="hidden lg:block"/>
      
      {/* Long Description */}
      <div className="mb-6">
        <p className="text-sm text-neutral-700 leading-relaxed">
          {product.long_description}
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
          ${product.Price.toFixed(2)}
        </p>
      </div>
      
      <br className="hidden lg:block"/>
      
      {/* Add to Cart Button - Replaced with your custom component */}
      <div className="mb-4">
        <AddToCartButton/>
      </div>
      
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
  );
}




// import { Button } from '@/components/ui/button';
// import { Heart } from 'lucide-react';
// import AddToCartButton from '@/components/AddToCartButton';
// import { Product } from '@/lib/types'; // Import the Product type

// interface ProductDetailsSectionProps {
//   product: Product; // Use the full Product type
//   category: {
//     Name: string;
//   };
// }

// export default function ProductDetailsSection({ product, category }: ProductDetailsSectionProps) {
//   return (
//     <div className="w-full lg:w-[30%] text-neutral-400 bg-transparent relative p-5 lg:px-8 lg:py-12 flex flex-col justify-center lg:overflow-y-auto lg:right-15">
//       {/* Breadcrumb */}
//       <div className="mb-6">
//         <p className="text-sm text-neutral-600 font-medium">
//           Skin • {category.Name}
//         </p>
//       </div>
      
//       <br className="hidden lg:block"/>
      
//       {/* Product Name */}
//       <h1 className="text-2xl lg:text-3xl font-aria text-black mb-6 lg:mb-8 leading-tight">
//         {product.Name}
//       </h1>
      
//       <br className="hidden lg:block"/>
      
//       {/* Long Description */}
//       <div className="mb-6">
//         <p className="text-sm text-neutral-700 leading-relaxed">
//           {product.long_description}
//         </p>
//       </div>
      
//       <br className="hidden lg:block"/>
      
//       {/* Size */}
//       <div className="mb-6 lg:mb-8">
//         <p className="text-sm text-neutral-600 mb-1">Size</p>
//         <p className="text-sm text-black">60 mL</p>
//       </div>
      
//       <br className="hidden lg:block"/>
      
//       {/* Price */}
//       <div className="mb-6 lg:mb-8">
//         <p className="text-2xl font-semibold text-black">
//           ${product.Price.toFixed(2)}
//         </p>
//       </div>
      
//       <br className="hidden lg:block"/>
      
//       {/* Add to Cart Button - Replaced with your custom component */}
//       <div className="mb-4">
//         <AddToCartButton 
//           product={product}
//           size="60 mL"
//           quantity={1}
//           className="h-12 lg:h-17 bg-stone-700 hover:bg-neutral-800"
//         />
//       </div>
      
//       <br className="hidden lg:block"/>
  
      
//       {/* Save to Cabinet Button */}
//       <div className="mb-6 lg:mb-8">
//         <Button
//           variant="ghost"
//           className="w-full justify-start p-0 h-auto text-sm font-normal text-neutral-700 hover:text-black hover:bg-transparent"
//         >
//           <Heart className="w-4 h-4 mr-2" />
//           Save to cabinet
//         </Button>
//       </div>
      
//       <hr className="border-black" />
//     </div>
//   );
// }




