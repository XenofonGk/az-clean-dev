import Rv from "./Rv.jsx";
import Compare from "./Compare.jsx";
import boatBefore from "../assets/boat-cmp-before.jpg";
import boatAfter from "../assets/boat-cmp-after.jpg";
import { BOAT_POINTS, TEL } from "../data.js";

export default function BoatBand() {
  return (
    <section className="band" id="skafi" style={{ padding: 0 }}>
      <div className="wrap">
        <Rv className="shead">
          <span className="no">04</span>
          <span className="label">Η ειδικότητα</span>
          <span className="rule" />
        </Rv>
        <Rv tag="h3" className="h2" delay={60}>Σκάφη και ιστιοπλοϊκά</Rv>

        <div className="band-grid">
          <Rv delay={100}>
            <p className="lede on-dark" style={{ marginBottom: "28px" }}>
              Η υγρασία της θάλασσας δουλεύει σε βάρος κάθε υφάσματος μέσα στο σκάφος. Στρώματα καμπίνας που μυρίζουν κλεισούρα, μαξιλάρια με μούχλα στις ραφές, μοκέτες με αλάτι. Είναι η ίδια δουλειά με τον καναπέ, απλώς με πιο δύσκολη πρόσβαση.
            </p>
            <ul>
              {BOAT_POINTS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="lede on-dark" style={{ fontSize: "16px", margin: "26px 0 20px" }}>
              Κάθε σκάφος είναι διαφορετικό. Η τιμή δίνεται μετά από εκτίμηση — με φωτογραφίες ή επιτόπου.
            </p>
            <a className="btn btn-onDark" href={`tel:${TEL}`}>Ζητήστε εκτίμηση</a>
          </Rv>
          <Rv delay={160} className="band-photo">
            <Compare before={boatBefore} after={boatAfter} tall start={50} />
          </Rv>
        </div>
      </div>
    </section>
  );
}
