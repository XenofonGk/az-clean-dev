import Rv from "./Rv.jsx";
import { TEL, TEL_DISPLAY, WA_LINK } from "../data.js";

export default function FinalCta() {
  return (
    <section style={{ padding: 0 }}>
      <Rv tag="div" className="cta-gold">
        <div className="cta-gold-inner">
          <div>
            <span className="eyebrow">Τιμή</span>
            <h2 className="h2" style={{ margin: "14px 0" }}>Μία φωτογραφία, μία τιμή.</h2>
            <p>
              Δεν δίνουμε τιμή χωρίς να δούμε το ύφασμα — θα ήταν μαντεψιά. Καλέστε μας ή στείλτε μια φωτογραφία και απαντάμε με ακριβή τιμή και ραντεβού. Ό,τι πούμε στο τηλέφωνο, αυτό πληρώνετε.
            </p>
            <div className="acts">
              <a className="btn btn-dark" href={`tel:${TEL}`}>Καλέστε {TEL_DISPLAY}</a>
              <a className="btn btn-ghost" href={WA_LINK} target="_blank" rel="noopener">Στείλτε φωτογραφία</a>
            </div>
          </div>
          <div className="sched">
            <span className="eyebrow">Ωράριο</span>
            <b>Δευτέρα – Παρασκευή<br />08:00 – 21:00</b>
            <b>Σάββατο<br />09:00 – 18:00</b>
          </div>
        </div>
      </Rv>
    </section>
  );
}
