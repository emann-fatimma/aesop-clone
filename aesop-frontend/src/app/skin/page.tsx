import CategoriesGrid from '@/components/CategoriesGrid';
// import ProductSliderBox from '@/components/ProductSliderBox';
import SkinCareBanner from '@/components/SkinCareBanner';
import Slider from '@/components/Slider';
// import { getProducts } from '@/lib/api';


export default async function Home() {
  // const products = await getProducts(); // Placeholder for products, can be fetched os props
  return (
    <main>
      <SkinCareBanner />
      <br/>
      <CategoriesGrid/>
      <br/>
      <Slider/>
          {/* <ProductSliderBox products={products} /> */}
    </main>
  );
}
