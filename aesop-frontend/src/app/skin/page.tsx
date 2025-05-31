import BottomBanner from '@/components/BottomBanner';
import CategoriesGrid from '@/components/CategoriesGrid';
import GridContinuation from '@/components/GridContinuation';
// import ProductSliderBox from '@/components/ProductSliderBox';
import SkinCareBanner from '@/components/SkinCareBanner';
import SkinTypesFormulations from '@/components/SkinTypesFormulations';
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
      <br/>
      <GridContinuation />
      <br/>
      <SkinTypesFormulations/>
      <BottomBanner />

          {/* <ProductSliderBox products={products} /> */}
    </main>
  );
}
