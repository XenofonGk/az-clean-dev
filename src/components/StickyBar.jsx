import { TEL, WA_LINK } from "../data.js";

export default function StickyBar() {
  return (
    <div className="stickybar">
      <a className="btn btn-dark" href={`tel:${TEL}`}>Κλήση</a>
      <a className="btn btn-gold" href={WA_LINK} target="_blank" rel="noopener">WhatsApp</a>
      <a className="btn btn-ghost" href="#kratisi">Κράτηση</a>
    </div>
  );
}
