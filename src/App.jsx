import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Proof from "./components/Proof.jsx";
import Services from "./components/Services.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import BoatBand from "./components/BoatBand.jsx";
import Testimonials from "./components/Testimonials.jsx";
import AreasFaq from "./components/AreasFaq.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";
import StickyBar from "./components/StickyBar.jsx";

export default function App() {
  return (
    <>
      {/* Remove this banner (and the noindex meta tag in index.html) the day
          this redesign actually replaces the live azclean.gr site. */}
      <div className="dev-banner">
        ΠΡΟΕΠΙΣΚΟΠΗΣΗ ΑΝΑΣΧΕΔΙΑΣΜΟΥ — <b>δεν είναι το ζωντανό site.</b> Το
        azclean.gr δεν έχει αλλάξει.
      </div>

      <Header />
      <main>
        <Hero />
        <Proof />
        <Services />
        <HowItWorks />
        <BoatBand />
        <Testimonials />
        <AreasFaq />
        <FinalCta />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
