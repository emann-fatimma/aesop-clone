import Image from 'next/image';
import { ImageData } from '@/lib/types'; // Import your ImageData type

interface ProductImageSectionProps {
  product: {
    Image: ImageData | null; // Match your Product type exactly
    Name: string;
  };
  imageUrl: string;
}

export default function ProductImageSection({ product, imageUrl }: ProductImageSectionProps) {
  return (
    <div className="w-full lg:w-[70%] flex items-center justify-center bg-transparent min-h-[50vh] lg:min-h-0">
      {product.Image ? (
        <div className="relative w-full max-w-sm lg:max-w-xl aspect-square flex items-center justify-center">
          <div className="w-4/5 h-4/5 relative">
            <Image
              src={imageUrl}
              alt={product.Image.alternativeText || product.Name}
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
  );
}