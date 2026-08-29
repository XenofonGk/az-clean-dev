import logo from "../assets/logo.svg";
import { TEL, TEL_DISPLAY } from "../data.js";

const LINKS = [
  ["#apodeixi", "Η απόδειξη"],
  ["#ti", "Τι κάνουμε"],
  ["#skafi", "Σκάφη"],
  ["#perioxes", "Περιοχές"],
];

export default function Header() {
  return (
    <header>
      <div className="wrap nav">
        <a className="brand" href="#" aria-label="AZ Clean — αρχική">
          {/* Same logo file as the live azclean.gr site (its favicon.svg). */}
          <span className="mark">
            <img src={logo} alt="" width={38} height={38} loading="eager" />
          </span>
          <span className="bn">
            <b>AZ CLEAN</b>
            <small>Βιολογικός Καθαρισμός</small>
          </span>
        </a>
        <nav className="navlinks" aria-label="Κύρια πλοήγηση">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="telbtn" href={`tel:${TEL}`}>{TEL_DISPLAY}</a>
      </div>
    </header>
  );
}
