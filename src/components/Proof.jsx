import Rv from "./Rv.jsx";
import Compare from "./Compare.jsx";
import mattressBefore from "../assets/mattress-before.jpg";
import mattressAfter from "../assets/mattress-after.jpg";
import armchairBefore from "../assets/armchair-before.jpg";
import armchairAfter from "../assets/armchair-after.jpg";
import chairBefore from "../assets/chair-before.jpg";
import chairAfter from "../assets/chair-after.jpg";

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

        <div className="proof-grid">
          <Rv delay={0}>
            <Compare before={mattressBefore} after={mattressAfter} tall start={55} />
            <div className="cap">
              <b>Στρώμα</b>
              Πραγματική δουλειά μας — μετά τον καθαρισμό
            </div>
          </Rv>
          <Rv delay={80}>
            <Compare before={armchairBefore} after={armchairAfter} tall start={55} />
            <div className="cap">
              <b>Πολυθρόνα</b>
              Πραγματική δουλειά μας — μετά τον καθαρισμό
            </div>
          </Rv>
          <Rv delay={160}>
            <Compare before={chairBefore} after={chairAfter} tall start={55} />
            <div className="cap">
              <b>Καρέκλα τραπεζαρίας</b>
              Πραγματική δουλειά μας — μετά τον καθαρισμό
            </div>
          </Rv>
        </div>

        <Rv className="proof-stats" delay={220}>
          <span className="stars">★★★★★</span>
          <span className="num">5,0</span>
          <p>από 77 πραγματικές κριτικές Google — καμία δεν είναι αγορασμένη.</p>
        </Rv>

        <Rv tag="p" className="proof-note">
          Όλες οι φωτογραφίες σε αυτή την ενότητα είναι από πραγματικές δουλειές μας — όχι stock εικόνες.
        </Rv>
      </div>
    </section>
  );
}
