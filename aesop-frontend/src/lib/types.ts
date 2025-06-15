export interface ImageData {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats?: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
}

export interface ImageFormat {
  url: string;
  width: number;
  height: number;
  size: number;
  mime: string;
}

// Updated HeroCard interface - Image should be single ImageData, not array
export interface HeroCard {
  id: number;
  documentId: string;
  Title: string;
  Subtitle: string;
  Category: string | null;
  // Image: ImageData | null;  // Single image (first image from array)
  Image: ImageData[];      // All images array
}


export interface StrapiResponse {
  data: HeroCard[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface Category {
  id: number;
  documentId: string;
  Name: string;
  slug: string;
  Description: string;
  Image: ImageData | null;
  products: Product[];
}

export interface Product {
  id: number;
  documentId: string;
  Name: string;
  slug: string;
  short_description: string;
  long_description: string;
  Price: number;
  Image: ImageData | null;
  category: Category | null; // Optional category association
}
