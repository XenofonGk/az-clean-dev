import Rv from "./Rv.jsx";
import { TEL, TEL_DISPLAY, WA_LINK } from "../data.js";

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <Rv tag="span" className="eyebrow">ΓΛΥΦΑΔΑ · ΒΟΥΛΑ · ΒΟΥΛΙΑΓΜΕΝΗ</Rv>
          <Rv tag="h1" className="h1" delay={70}>
            Ο σωστός τρόπος <br />καθαρισμού.
          </Rv>
          <Rv tag="p" className="lede" delay={140}>
            Βιολογικός καθαρισμός καναπέ, στρωμάτων, χαλιών, αυτοκινήτου και σκάφους, στον χώρο σας.
          </Rv>
          <Rv className="acts" delay={200}>
            <a className="btn btn-dark" href={`tel:${TEL}`}>Καλέστε μας</a>
            <a className="btn btn-gold" href={WA_LINK} target="_blank" rel="noopener">Στείλτε φωτογραφία</a>
          </Rv>
          <Rv className="facts" delay={260}>
            <div className="fact">
              <span className="stars">★★★★★</span>
              <b>5,0</b>
              <span>από 77 κριτικές Google</span>
            </div>
            <div className="fact">
              <b>Αυθημερόν</b>
              <span>διαθέσιμο ραντεβού</span>
            </div>
            <div className="fact">
              <b>15 περιοχές</b>
              <span>νότια προάστια &amp; Αττική</span>
            </div>
          </Rv>
        </div>
      </div>
    </div>
  );
}
