import { Bootloader }         from "@/components/Bootloader";
import { SiteNav }            from "@/components/SiteNav";
import { HeroSlider }         from "@/components/HeroSlider";
import { EmbeddedVideo }      from "@/components/EmbeddedVideo";
import { FeaturedProducts }   from "@/components/FeaturedProducts";
import { SpinStories }           from "@/components/SpinStories";
import { TransformationSection } from "@/components/TransformationSection";
import { SkateFlicks }           from "@/components/SkateFlicks";
import { NewsletterSection }  from "@/components/NewsletterSection";
import { SiteFooter }         from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <Bootloader />
      <SiteNav />
      <main>
        <HeroSlider />
        <div className="grain-zone">
          <EmbeddedVideo />
          <FeaturedProducts />
          <SpinStories />
          <TransformationSection />
          <SkateFlicks />
          <NewsletterSection />
        </div>
      </main>
      <div className="grain-zone">
        <SiteFooter />
      </div>
    </>
  );
}
