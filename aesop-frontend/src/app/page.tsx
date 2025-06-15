import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import QuoteSection from '@/components/QouteSection'; 

// Configure revalidation if needed
export const revalidate = 3600;

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Aesop - Premium Products & Collections',
    description: 'Discover our premium collection of products. High-quality items crafted for your needs.',
    // Add more metadata as needed
  };
}

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <QuoteSection />
    
    </div>
  );
}