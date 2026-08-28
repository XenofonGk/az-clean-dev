import Rv from "./Rv.jsx";
import { CORE_AREAS, MORE_AREAS, FAQS } from "../data.js";

export default function AreasFaq() {
  return (
    <section id="perioxes" style={{ paddingTop: 0 }}>
      <div className="wrap two">
        <div>
          <Rv className="shead">
            <span className="no">07</span>
            <span className="label">Περιοχές</span>
            <span className="rule" />
          </Rv>
          <Rv tag="p" delay={60} style={{ color: "var(--text-70)", marginBottom: "22px" }}>
            Έδρα η Γλυφάδα. Καθημερινά στα νότια προάστια, κατόπιν συνεννόησης σε όλη την Αττική.
          </Rv>
          <Rv className="chips" delay={100}>
            {CORE_AREAS.map((a) => (
              <span key={a} className="chip core">{a}</span>
            ))}
          </Rv>
          <Rv className="chips" delay={140} style={{ marginTop: "10px" }}>
            {MORE_AREAS.map((a) => (
              <span key={a} className="chip">{a}</span>
            ))}
          </Rv>
        </div>

        <div>
          <Rv className="shead">
            <span className="label">Ερωτήσεις</span>
            <span className="rule" />
          </Rv>
          <Rv delay={60}>
            {FAQS.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </Rv>
        </div>
      </div>
    </section>
  );
}
