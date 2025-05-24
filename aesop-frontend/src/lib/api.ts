import { Category, HeroCard, Product } from "./types";

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

if (!STRAPI_URL) {
  throw new Error('NEXT_PUBLIC_STRAPI_API_URL environment variable is not set');
}

// Get categories
export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/categories?populate=Image`);
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

// Get products
export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/products?populate=Image`);
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

// Get hero sections
export async function getHero(): Promise<HeroCard[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/hero-sections?populate=Image`);
    const json = await res.json();
    console.log("Hero sections fetched:", json);

    return json.data.map((item: HeroCard) => ({
      id: item.id,
      documentId: item.documentId,
      Title: item.Title,
      Subtitle: item.Subtitle,
      Category: item.Category,
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
    console.error("Error fetching hero sections:", error);
    return [];
  }
}




