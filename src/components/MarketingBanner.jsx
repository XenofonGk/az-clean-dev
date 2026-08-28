import Rv from "./Rv.jsx";
import marketingBanner from "../assets/marketing-banner.jpg";

// Promotional/branding banner (client-supplied artwork, not a photo of an
// actual job) — shown purely as decorative storefront branding under the
// hero. Swap the image in src/assets/marketing-banner.jpg to update it.
export default function MarketingBanner() {
  return (
    <Rv tag="div" className="marketing-banner">
      <img
        src={marketingBanner}
        alt="AZ Clean — Επαγγελματικός καθαρισμός με συνέπεια και φροντίδα"
        loading="lazy"
      />
    </Rv>
  );
}
