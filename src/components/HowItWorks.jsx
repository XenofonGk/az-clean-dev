import { useState } from "react";
import Rv from "./Rv.jsx";
import { STEPS } from "../data.js";

/**
 * Interactive numbered stepper (no photos): click, hover, or focus a step
 * to expand it. A gold rail fills in behind the active step to show progress.
 */
export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const n = STEPS.length;
  const fillPct = n > 1 ? (active / (n - 1)) * (100 - 100 / n) : 0;

  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Rv className="shead">
          <span className="no">03</span>
          <span className="label">Πώς δουλεύει</span>
          <span className="rule" />
        </Rv>
        <Rv tag="p" className="lede" delay={60} style={{ marginBottom: "40px" }}>
          Τρία βήματα. Το πρώτο το κάνετε από τον καναπέ σας, με το κινητό.
        </Rv>

        <Rv className="stepper" delay={100}>
          <div className="stepper-track">
            <div className="rail" />
            <div className="rail-fill" style={{ width: fillPct + "%" }} />
            {STEPS.map((_, i) => (
              <button
                key={i}
                type="button"
                className={"stepper-node" + (active === i ? " active" : "") + (i < active ? " done" : "")}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                aria-label={`Βήμα ${i + 1}`}
              >
                {"0" + (i + 1)}
              </button>
            ))}
          </div>

          <div className="stepper-panels">
            {STEPS.map(([title, desc], i) => (
              <button
                key={title}
                type="button"
                className={"stepper-panel" + (active === i ? " active" : "")}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
              >
                <span className="stepper-panel-num">{"0" + (i + 1)}</span>
                <h3 className="h3">{title}</h3>
                <p className="stepper-desc">{desc}</p>
              </button>
            ))}
          </div>
        </Rv>
      </div>
    </section>
  );
}
