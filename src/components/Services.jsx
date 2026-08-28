import Rv from "./Rv.jsx";
import { SERVICES } from "../data.js";

export default function Services() {
  return (
    <section id="ti">
      <div className="wrap split">
        <div className="sticky-lede">
          <Rv className="shead">
            <span className="no">02</span>
            <span className="label">Τι κάνουμε</span>
            <span className="rule" />
          </Rv>
          <Rv tag="p" className="lede" delay={60}>
            Ένα μηχάνημα, μία μέθοδος, δέκα επιφάνειες. Η δουλειά είναι πάντα η ίδια: το νερό μπαίνει με πίεση και βγαίνει βρώμικο.
          </Rv>
        </div>
        <div className="svcgrid">
          {SERVICES.map(([title, desc], i) => (
            <Rv key={title} className="svc" delay={i * 30}>
              <b>{title}</b>
              <span>{desc}</span>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  );
}
