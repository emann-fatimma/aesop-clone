import Hero from "@/components/hero";
import { getHero } from "@/lib/api";

export default async function Home(){
  const hero = await getHero();
  return (
    <main className="min-h-screen bg-white">
      <Hero heroData={hero[0]}/>
    </main>

  );
}