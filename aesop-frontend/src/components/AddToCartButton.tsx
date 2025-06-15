import React from 'react';

interface AddToCartButtonProps {
  className?: string;
}

export default function AddToCartButton({ className = '' }: AddToCartButtonProps) {
  return (
    <button
      className={`group/btn w-full bg-stone-700 text-stone-200 py-3 px-4 text-xs lg:text-sm font-light transition-all duration-300 group-hover:bg-stone-800 group-hover:text-white border border-transparent group-hover:border-black relative overflow-hidden h-14 ${className}`}
      aria-label="Add to cart"
    >
      <span className="relative z-10 group-hover:opacity-100 transition-opacity duration-300">
        Add to your cart
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
    </button>
  );
}










// 'use client';

// import { useCart } from '@/context/CartContext';
// import { useToast } from '@/context/ToastContext';
// import { Product } from '@/lib/types';

// interface AddToCartButtonProps {
//   product: Product;
//   size?: string;
//   quantity?: number;
//   className?: string;
// }

// export default function AddToCartButton({ 
//   product, 
//   size = '60 mL', 
//   quantity = 1,
//   className = ''
// }: AddToCartButtonProps) {
//   const { dispatch } = useCart();
//   const { addToast } = useToast();
  
//   const handleAddToCart = () => {
//     dispatch({
//       type: 'ADD_ITEM',
//       payload: {
//         product,
//         quantity,
//         size
//       }
//     });

//     // Show success toast
//     addToast(`${product.Name} added to the cart`, 'success', 3000);
//   };

//   return (
//     <button
//       onClick={handleAddToCart}
//       className={`group/btn w-full bg-stone-200 text-stone-200 py-3 px-4 text-xs lg:text-sm font-light transition-all duration-300 group-hover:bg-stone-800 group-hover:text-white border border-transparent group-hover:border-black relative overflow-hidden h-14 ${className}`}
//       aria-label={`Add ${product.Name} to cart`}
//     >
//       <span className="relative z-10  group-hover:opacity-100 transition-opacity duration-300">
//         Add to your cart
//       </span>
//       {/* Subtle hover effect */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
//     </button>
//   );
// }