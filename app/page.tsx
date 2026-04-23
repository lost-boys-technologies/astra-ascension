import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import FeaturedRacer from "@/components/sections/FeaturedRacer";
import CoreSystems from "@/components/sections/CoreSystems";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedRacer />
        <CoreSystems />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
