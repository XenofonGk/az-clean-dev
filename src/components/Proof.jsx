import Rv from "./Rv.jsx";
import Compare from "./Compare.jsx";
import mattressBefore from "../assets/mattress-cmp-before.jpg";
import mattressAfter from "../assets/mattress-cmp-after.jpg";
import sofaAfter from "../assets/sofa-after.jpg";

export default function Proof() {
  return (
    <section className="dark-section" id="apodeixi">
      <div className="wrap">
        <Rv className="shead">
          <span className="no">01</span>
          <span className="label">Η απόδειξη</span>
          <span className="rule" />
        </Rv>
        <Rv tag="p" className="lede on-dark" delay={60} style={{ marginBottom: "40px" }}>
          Πραγματικές δουλειές από τα νότια προάστια — πριν και μετά τον καθαρισμό. Σύρετε για να δείτε τη διαφορά.
        </Rv>

        <Rv className="proof-main" delay={120}>
          <Compare before={mattressBefore} after={mattressAfter} start={58} />
          <div className="cap">
            <b>Στρώμα</b>
            Σύρετε για να δείτε τη διαφορά — πραγματική δουλειά μας
          </div>
        </Rv>

        <div className="proof-row">
          <Rv delay={0}>
            <div className="shot">
              <img src={sofaAfter} alt="Γωνιακός καναπές μετά τον βιολογικό καθαρισμό" loading="lazy" />
              <span className="tag">Μετά</span>
            </div>
            <div className="cap">
              <b>Γωνιακός καναπές</b>
              Πραγματική δουλειά μας — μετά τον καθαρισμό
            </div>
          </Rv>
          <Rv delay={80}>
            <div className="stat-panel">
              <span className="stars">★★★★★</span>
              <span className="num">5,0</span>
              <p>από 77 πραγματικές κριτικές Google — καμία δεν είναι αγορασμένη.</p>
            </div>
          </Rv>
        </div>

        <Rv tag="p" className="proof-note">
          Όλες οι φωτογραφίες σε αυτή την ενότητα είναι από πραγματικές δουλειές μας — όχι stock εικόνες.
        </Rv>
      </div>
    </section>
  );
}
