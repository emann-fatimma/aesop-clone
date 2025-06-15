import { unstable_cache } from 'next/cache';
import { Category, HeroCard, Product, ImageData} from "./types";

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

if (!STRAPI_URL) {
  throw new Error('NEXT_PUBLIC_STRAPI_API_URL environment variable is not set');
}

// Helper function to check if we can use unstable_cache
function canUseCache() {
  return typeof window === 'undefined' && process.env.NODE_ENV !== 'test';
}

// Base fetch function without cache
async function fetchCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/categories?populate=*`, {
      next: { revalidate: 3600 } // Fallback caching
    });
    
    if (!res.ok) {
      console.error(`Failed to fetch categories: ${res.status} ${res.statusText}`);
      return [];
    }
    
    const json = await res.json();
    console.log("Categories fetched:", json);

    return json.data.map((item: Category) => ({
      id: item.id,
      documentId: item.documentId,
      Name: item.Name,
      Description: item.Description,
      slug: item.slug || null,
      Image: item.Image
        ? {
            id: item.Image.id,
            documentId: item.Image.documentId,
            name: item.Image.name,
            alternativeText: item.Image.alternativeText,
            caption: item.Image.caption,
            width: item.Image.width,
            height: item.Image.height,
            url: item.Image.url,
            formats: item.Image.formats,
            hash: item.Image.hash,
            ext: item.Image.ext,
            mime: item.Image.mime,
            size: item.Image.size,
            previewUrl: item.Image.previewUrl,
          }
        : null,
    }));
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// Base fetch function for products
async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/products?populate=*&pagination[limit]=100`, {
      next: { revalidate: 3600 } // Fallback caching
    });
    
    if (!res.ok) {
      console.error(`Failed to fetch products: ${res.status} ${res.statusText}`);
      return [];
    }
    
    const json = await res.json();
    console.log("Products fetched:", json);

    return json.data.map((item: Product) => ({
      id: item.id,
      documentId: item.documentId,
      Name: item.Name,
      slug: item.slug,
      short_description: item.short_description,
      long_description: item.long_description,
      Price: item.Price,
      Image: item.Image
        ? {
            id: item.Image.id,
            documentId: item.Image.documentId,
            name: item.Image.name,
            alternativeText: item.Image.alternativeText,
            caption: item.Image.caption,
            width: item.Image.width,
            height: item.Image.height,
            url: item.Image.url,
            formats: item.Image.formats,
            hash: item.Image.hash,
            ext: item.Image.ext,
            mime: item.Image.mime,
            size: item.Image.size,
            previewUrl: item.Image.previewUrl,
          }
        : null,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// Base fetch function for products by category
async function fetchProductsByCategory(categorySlug: string): Promise<Product[]> {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/products?populate[0]=Image&populate[1]=category&filters[category][slug][$eq]=${categorySlug}`,
      { next: { revalidate: 3600 } } // Fallback caching
    );
    
    if (!res.ok) {
      console.error(`Failed to fetch products for category ${categorySlug}: ${res.status} ${res.statusText}`);
      return [];
    }
    
    const json = await res.json();
    console.log(`Products for category ${categorySlug}:`, json);

    return json.data.map((item: Product) => ({
      id: item.id,
      documentId: item.documentId,
      Name: item.Name,
      slug: item.slug,
      short_description: item.short_description,
      long_description: item.long_description,
      Price: item.Price,
      Image: item.Image
        ? {
            id: item.Image.id,
            documentId: item.Image.documentId,
            name: item.Image.name,
            alternativeText: item.Image.alternativeText,
            caption: item.Image.caption,
            width: item.Image.width,
            height: item.Image.height,
            url: item.Image.url,
            formats: item.Image.formats,
            hash: item.Image.hash,
            ext: item.Image.ext,
            mime: item.Image.mime,
            size: item.Image.size,
            previewUrl: item.Image.previewUrl,
          }
        : null,
    }));
  } catch (error) {
    console.error(`Error fetching products for category ${categorySlug}:`, error);
    return [];
  }
}

// Base fetch function for hero sections
async function fetchHero(): Promise<HeroCard[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/hero-sections?populate=Image`, {
      next: { revalidate: 3600 } // Fallback caching
    });
    
    if (!res.ok) {
      console.error(`Failed to fetch hero sections: ${res.status} ${res.statusText}`);
      return [];
    }
    
    const json = await res.json();
    console.log("Hero sections fetched:", json);

    return json.data.map((item: HeroCard) => ({
      id: item.id,
      documentId: item.documentId,
      Title: item.Title,
      Subtitle: item.Subtitle,
      Category: item.Category,
      Image: item.Image && Array.isArray(item.Image)
        ? item.Image.map((img: ImageData) => ({
            id: img.id,
            documentId: img.documentId,
            name: img.name,
            alternativeText: img.alternativeText,
            caption: img.caption,
            width: img.width,
            height: img.height,
            url: img.url,
            formats: img.formats,
            hash: img.hash,
            ext: img.ext,
            mime: img.mime,
            size: img.size,
            previewUrl: img.previewUrl,
          }))
        : [],
    }));
  } catch (error) {
    console.error("Error fetching hero sections:", error);
    return [];
  }
}

/**
 * Fetches categories from Strapi with conditional caching
 */
export const getCategories = canUseCache() 
  ? unstable_cache(
      fetchCategories,
      ['categories'],
      {
        revalidate: 3600,
        tags: ['categories']
      }
    )
  : fetchCategories;

/**
 * Fetches products from Strapi with conditional caching
 */
export const getProducts = canUseCache()
  ? unstable_cache(
      fetchProducts,
      ['products'],
      {
        revalidate: 3600,
        tags: ['products']
      }
    )
  : fetchProducts;

/**
 * Fetches products by category slug from Strapi with conditional caching
 */
export const getProductsByCategory = canUseCache()
  ? unstable_cache(
      fetchProductsByCategory,
      ['products-by-category'],
      {
        revalidate: 3600,
        tags: ['products', 'categories']
      }
    )
  : fetchProductsByCategory;

/**
 * Fetches hero sections from Strapi with conditional caching
 */
export const getHero = canUseCache()
  ? unstable_cache(
      fetchHero,
      ['hero-sections'],
      {
        revalidate: 3600,
        tags: ['hero']
      }
    )
  : fetchHero;

/**
 * Function to manually revalidate all cache tags
 * Only works when cache is available
 */
export async function revalidateAllMenuData() {
  if (!canUseCache()) {
    console.warn('Cache not available, skipping revalidation');
    return;
  }
  
  const { revalidateTag } = await import('next/cache');
  
  revalidateTag('categories');
  revalidateTag('products');
  revalidateTag('hero');
}