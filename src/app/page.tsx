import FAQ from "./components/FAQ";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { MarqueeLogos } from "./components/heros/marqueeProjects";
import { SpotlightPreview } from "./components/heros/sparklesBanner";
import PricingCards from "./components/pricingCards";
import ProcessCards from "./components/processCards";
import { StartProjectCTA } from "./components/startProjectCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <SpotlightPreview />
      <MarqueeLogos />
      <ProcessCards />
      <PricingCards />
      <FAQ />
      <AboutMe />
      <Contact />
      <StartProjectCTA />
      <Footer />
    </div>
  );
}
