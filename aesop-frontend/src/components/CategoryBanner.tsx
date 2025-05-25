import { getCategories } from "@/lib/api";

interface CategoryBannerProps {
  slug: string;
}

export default async function CategoryBanner({ slug }: CategoryBannerProps) {
  const categories = await getCategories();
  const category = categories.find(cat => cat.slug === slug);
  
  if (!category) {
    return null;
  }
  return (
    
    <div className=" w-full h-130 bg-cover bg-center bg-stone-200 flex items-center justify-between px-12" >
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-[256px_3fr] gap-x-1 max-w-4xl w-full text-black">
          {/* Left Column - Aesop Branding */}
          
          <div className="flex justify-center">
            <h1 className="text-5xl font-serif">
              Aēsop.
            </h1>
          </div>
          
          {/* Right Column - Category Info */}
          <div className="">
            <h2 className="text-3xl font-serif mb-4">
              {category.Name}
            </h2>
            <br/>
            <div className="text-base md:text-md text-stone-700 leading-relaxed max-w-md">
              {category.Description}
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    </div>
    
  );
};

