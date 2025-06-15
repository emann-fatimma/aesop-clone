'use client';

import Link from 'next/link';
// import { useCart } from '@/context/CartContext';

export default function MainNavbar() {
  // const { state } = useCart();

  return (
    <nav className="w-full bg-stone-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left side navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors relative left-10">
              New & Notable
            </Link>
            <Link href="/skin" className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors relative left-15">
              Skin Care
            </Link>
            <Link href="/" className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors relative left-20">
              Hand & Body
            </Link>
            <Link href="/" className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors relative left-25">
              Home
            </Link>
            <Link href="/" className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors relative left-30">
              Hair
            </Link>
            <Link href="/" className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors relative left-35">
              Fragrance
            </Link>
            <Link href="/" className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors relative left-40">
              Kits & Travel
            </Link>
            <Link href="/" className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors relative left-45">
              Gifts
            </Link>
            <Link href="/" className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors relative left-50">
              Read
            </Link>
            <Link href="/" className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors relative left-55">
              Stores
            </Link>
        
          </div>

          {/* Right side navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors relative right-20">
              Log in
            </Link>
            <Link href="/" className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors relative right-15">
              Cabinet
            </Link>

{/* <Link href="/cart" className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors relative right-10 flex items-center gap-2">
  Cart
  {state.itemCount > 0 && (
    <span className=" text-gray-900 text-xs h-5 w-5 flex items-center justify-center ">
      {state.itemCount}
    </span>
  )}
</Link> */}

<Link href="/" className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors relative right-10 flex items-center gap-2">
  Cart
</Link>


          </div>
        </div>
      </div>
    </nav>
  );
}