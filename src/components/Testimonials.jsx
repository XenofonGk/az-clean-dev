import Rv from "./Rv.jsx";
import { REVIEWS } from "../data.js";

export default function Testimonials() {
  return (
    <section>
      <div className="wrap">
        <Rv className="shead">
          <span className="no">06</span>
          <span className="label">Τι λένε οι πελάτες</span>
          <span className="rule" />
        </Rv>
        <div className="revs">
          {REVIEWS.map(([quote, who], i) => (
            <Rv key={who} className="rev" delay={i * 80}>
              <div className="st">★★★★★</div>
              <p>“{quote}”</p>
              <div className="who">{who}</div>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  );
}
