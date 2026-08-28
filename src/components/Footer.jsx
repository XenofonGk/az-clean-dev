import { TEL, TEL_DISPLAY } from "../data.js";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <div className="flabel">AZ Clean</div>
            Βιολογικός καθαρισμός<br />καναπέ και στρωμάτων
          </div>
          <div>
            <div className="flabel">Επικοινωνία</div>
            <a href={`tel:${TEL}`}>{TEL_DISPLAY}</a><br />
            <a href="mailto:info@azclean.gr">info@azclean.gr</a>
          </div>
          <div>
            <div className="flabel">Ωράριο</div>
            Δευ–Παρ 08:00 – 21:00<br />Σάβ 09:00 – 18:00
          </div>
          <div>
            <div className="flabel">Έδρα</div>
            Ταινάρου 5, Γλυφάδα 165 62
          </div>
        </div>
        <div className="fine">
          <span>© 2026 AZ Clean · Βιολογικός καθαρισμός καναπέ και στρωμάτων · Γλυφάδα, Αττική</span>
          <span>Πρόταση ανασχεδιασμού — προεπισκόπηση, όχι το ζωντανό site</span>
        </div>
      </div>
    </footer>
  );
}
