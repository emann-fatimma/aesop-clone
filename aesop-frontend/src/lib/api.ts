// import { Category, HeroCard, Product, } from "./types";

// export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://willing-frogs-a150e1bcb1.strapiapp.com/admin' ;

// if (!STRAPI_URL) {
//   throw new Error('NEXT_PUBLIC_STRAPI_API_URL environment variable is not set');
// }

// // Get categories
// export async function getCategories(): Promise<Category[]> {
//   try {
//     const res = await fetch(`${STRAPI_URL}/api/categories?populate=*`);
//     const json = await res.json();
//     console.log("Categories fetched:", json);

//     return json.data.map((item: Category) => ({
//       id: item.id,
//       documentId: item.documentId,
//       Name: item.Name,
//       Description: item.Description,
//       slug: item.slug || null,
//       Image: item.Image
//         ? {
//             id: item.Image.id,
//             documentId: item.Image.documentId,
//             name: item.Image.name,
//             alternativeText: item.Image.alternativeText,
//             caption: item.Image.caption,
//             width: item.Image.width,
//             height: item.Image.height,
//             url: item.Image.url,
//             formats: item.Image.formats,
//             hash: item.Image.hash,
//             ext: item.Image.ext,
//             mime: item.Image.mime,
//             size: item.Image.size,
//             previewUrl: item.Image.previewUrl,
//           }
//         : null,
//         products: item.products
//     }
//   )
  
//   );
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// }

// // Get products
// export async function getProducts(): Promise<Product[]> {
//   try {
//     const res = await fetch(`${STRAPI_URL}/api/products?populate=*`);
//     const json = await res.json();
//     console.log("Products fetched:", json);

//     return json.data.map((item: Product) => ({
//       id: item.id,
//       documentId: item.documentId,
//       Name: item.Name,
//       slug: item.slug,
//       short_description: item.short_description,
//       long_description: item.long_description,
//       Price: item.Price,
//       Image: item.Image
//         ? {
//             id: item.Image.id,
//             documentId: item.Image.documentId,
//             name: item.Image.name,
//             alternativeText: item.Image.alternativeText,
//             caption: item.Image.caption,
//             width: item.Image.width,
//             height: item.Image.height,
//             url: item.Image.url,
//             formats: item.Image.formats,
//             hash: item.Image.hash,
//             ext: item.Image.ext,
//             mime: item.Image.mime,
//             size: item.Image.size,
//             previewUrl: item.Image.previewUrl,
//           }
//         : null,
//       category: item.category 
//     }));
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// }




// // // Get hero sections
// // export async function getHero(): Promise<HeroCard[]> {
// //   try {
// //     const res = await fetch(`${STRAPI_URL}/api/hero-sections?populate=Image`);
    
// //     if (!res.ok) {
// //       throw new Error(`HTTP error! status: ${res.status}`);
// //     }
    
// //     const json: StrapiResponse = await res.json();
// //     console.log("Hero sections fetched:", json);

// //     if (!json.data || !Array.isArray(json.data)) {
// //       console.warn("Invalid data structure received from API");
// //       return [];
// //     }

// //     return json.data.map((item: HeroCard) => {
// //       // Handle the Image field - could be array, single object, or null
// //       const imageData = item.Image;
// //       let images: ImageData[] = [];
      
// //       if (imageData) {
// //         if (Array.isArray(imageData)) {
// //           // Multiple images - they're already ImageData type from Strapi
// //           images = imageData;
// //         } else {
// //           // Single image object - already ImageData type from Strapi
// //           images = [imageData];
// //         }
// //       }

// //       return {
// //         id: item.id,
// //         documentId: item.documentId,
// //         Title: item.Title,
// //         Subtitle: item.Subtitle,
// //         Category: item.Category,
// //         Images: images,
// //         Image: images.length > 0 ? images[0] : null,
// //       };
// //     });
// //   } catch (error) {
// //     console.error("Error fetching hero sections:", error);
// //     return [];
// //   }
// // }

// // Get hero sections 
// export async function getHero(): Promise<HeroCard[]> { 
//   try { 
//     const res = await fetch(`${STRAPI_URL}/api/hero-sections?populate=Image`); 
//     const json = await res.json(); 
//     console.log("Hero sections fetched:", json);

//     return json.data.map((item: HeroCard) => ({
//       id: item.id,
//       documentId: item.documentId,
//       Title: item.Title,
//       Subtitle: item.Subtitle,
//       Category: item.Category,
//       Image: item.Image
//         ? {
//             id: item.Image.id,
//             documentId: item.Image.documentId,
//             name: item.Image.name,
//             alternativeText: item.Image.alternativeText,
//             caption: item.Image.caption,
//             width: item.Image.width,
//             height: item.Image.height,
//             url: item.Image.url,
//             formats: item.Image.formats,
//             hash: item.Image.hash,
//             ext: item.Image.ext,
//             mime: item.Image.mime,
//             size: item.Image.size,
//             previewUrl: item.Image.previewUrl,
//           }
//         : null,
//     }));
//   } catch (error) {
//     console.error("Error fetching hero sections:", error);
//     return [];
//   }
// }

// export async function getProductsByCategory(categorySlug: string) {
//   try {
//     const res = await fetch(`${STRAPI_URL}/api/products?filters[category][slug][$eq]=${categorySlug}&populate=Image`);
//     const json = await res.json();
    
//     console.log('API URL:', `${STRAPI_URL}/api/products?filters[category][slug][$eq]=${categorySlug}&populate=Image`);
//     console.log('Response:', json);
    
//     return json.data.map((item: Product) => ({
//       id: item.id,
//       documentId: item.documentId,
//       Name: item.Name,
//       slug: item.slug,
//       short_description: item.short_description,
//       long_description: item.long_description,
//       Price: item.Price,
//       Image: item.Image
//         ? {
//             id: item.Image.id,
//             documentId: item.Image.documentId,
//             name: item.Image.name,
//             alternativeText: item.Image.alternativeText,
//             caption: item.Image.caption,
//             width: item.Image.width,
//             height: item.Image.height,
//             url: item.Image.url,
//             formats: item.Image.formats,
//             hash: item.Image.hash,
//             ext: item.Image.ext,
//             mime: item.Image.mime,
//             size: item.Image.size,
//             previewUrl: item.Image.previewUrl,
//           }
//         : null,
//     }));
//   } catch (error) {
//     console.error("Error fetching products by category:", error);
//     return [];
//   }
// }

// // Add this function to your lib/api.ts file

// export async function getProductBySlug(productSlug: string) {
//   try {
//     const res = await fetch(`${STRAPI_URL}/api/products?filters[slug][$eq]=${productSlug}&populate=*`);
//     const json = await res.json();
    
//     console.log('Product API URL:', `${STRAPI_URL}/api/products?filters[slug][$eq]=${productSlug}&populate=*`);
//     console.log('Product Response:', json);
    
//     if (!json.data || json.data.length === 0) {
//       return null;
//     }
    
//     const item = json.data[0];
//     return {
//       id: item.id,
//       documentId: item.documentId,
//       Name: item.Name,
//       slug: item.slug,
//       short_description: item.short_description,
//       long_description: item.long_description,
//       Price: item.Price,
//       Size: item.Size || '60 mL', // Default size if not provided
//       Image: item.Image
//         ? {
//             id: item.Image.id,
//             documentId: item.Image.documentId,
//             name: item.Image.name,
//             alternativeText: item.Image.alternativeText,
//             caption: item.Image.caption,
//             width: item.Image.width,
//             height: item.Image.height,
//             url: item.Image.url,
//             formats: item.Image.formats,
//             hash: item.Image.hash,
//             ext: item.Image.ext,
//             mime: item.Image.mime,
//             size: item.Image.size,
//             previewUrl: item.Image.previewUrl,
//           }
//         : null,
//       category: item.category || null,
//     };
//   } catch (error) {
//     console.error("Error fetching product by slug:", error);
//     return null;
//   }
// }



import { Category, HeroCard, Product} from "./types";

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

if (!STRAPI_URL) {
  throw new Error('NEXT_PUBLIC_STRAPI_API_URL environment variable is not set');
}

// Get categories
export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/categories?populate=*`);
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
    const res = await fetch(`${STRAPI_URL}/api/products?populate=*&pagination[limit]=100`);
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

// Get products by category slug
export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  try {
    // This assumes you have a relationship between products and categories in Strapi
    // Adjust the populate and filters based on your Strapi content type structure
    const res = await fetch(
      `${STRAPI_URL}/api/products?populate[0]=Image&populate[1]=category&filters[category][slug][$eq]=${categorySlug}`
    );
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


// // Get hero sections
// export async function getHero(): Promise<HeroCard[]> {
//   try {
//     const res = await fetch(`${STRAPI_URL}/api/hero-sections?populate=Image`);
//     const json = await res.json();
//     console.log("Hero sections fetched:", json);

//     return json.data.map((item: HeroCard) => ({
//       id: item.id,
//       documentId: item.documentId,
//       Title: item.Title,
//       Subtitle: item.Subtitle,
//       Category: item.Category,
//       Image: item.Image && Array.isArray(item.Image)
//         ? item.Image.map((img: ImageData) => ({
//             id: img.id,
//             documentId: img.documentId,
//             name: img.name,
//             alternativeText: img.alternativeText,
//             caption: img.caption,
//             width: img.width,
//             height: img.height,
//             url: img.url,
//             formats: img.formats,
//             hash: img.hash,
//             ext: img.ext,
//             mime: img.mime,
//             size: img.size,
//             previewUrl: img.previewUrl,
//           }))
//         : [],
//     }));
//   } catch (error) {
//     console.error("Error fetching hero sections:", error);
//     return [];
//   }
// }


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