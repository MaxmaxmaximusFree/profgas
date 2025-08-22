import Hero from "@/components/Hero";
import HeroBackground from "@/components/HeroBackground";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Solutions from "@/components/Solutions";
import Advantages from "@/components/Advantages";
import PopularProducts from "@/components/PopularProducts";
import {
  getPopularProducts,
  getSiteInfo,
  getHeroData,
} from "@/actions/actions";

export default async function Home() {
  const popularProducts = await getPopularProducts();
  const siteInfo = await getSiteInfo();
  const heroData = await getHeroData();

  return (
    <main>
      <Header />
      <HeroBackground
        images={heroData.images}
        slideDuration={heroData.slideDuration}
      />
      <Hero />

      <Advantages />
      <PopularProducts products={popularProducts} />
      <Solutions />
      <Contacts contacts={siteInfo.contacts} />
      <Footer />
    </main>
  );
}
