// Helper function to construct image URLs
export const getImageUrl = (imageUrl: string) => {
  if (!imageUrl) return '/placeholder-image.jpg';
  
  // If the URL is already absolute (starts with http:// or https://), use it as is
  if (imageUrl?.startsWith('http://') || imageUrl?.startsWith('https://')) {
    return imageUrl;
  }
  
  // If it's a relative URL, prepend the Strapi base URL
  return `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageUrl}`;
};