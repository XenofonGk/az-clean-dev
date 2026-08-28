import { useState } from "react";
import Rv from "./Rv.jsx";
import { BK_SERVICES, TEL, TEL_DISPLAY, WA_LINK, nextDays, slotsFor } from "../data.js";

export default function Booking() {
  const days = nextDays(7);
  const [service, setService] = useState(null);
  const [day, setDay] = useState(null);
  const [slot, setSlot] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const ready = service && day && slot;

  return (
    <section id="kratisi">
      <div className="wrap">
        <Rv className="shead">
          <span className="no">05</span>
          <span className="label">Κράτηση online</span>
          <span className="rule" />
        </Rv>

        <div className="booking-wrap">
          <Rv className="booking-card" delay={60}>
            <span className="demo-flag">
              <i /> DEMO — δεν είναι συνδεδεμένο ακόμα
            </span>

            <div className="bk-row">
              <label>Τι θέλετε να καθαρίσουμε;</label>
              <div className="bk-pills">
                {BK_SERVICES.map((s) => (
                  <button
                    key={s}
                    className={"bk-pill" + (service === s ? " active" : "")}
                    onClick={() => { setService(s); setConfirmed(false); }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="bk-row">
              <label>Ημέρα</label>
              <div className="bk-days">
                {days.map((d, i) => (
                  <button
                    key={i}
                    disabled={d.closed}
                    className={"bk-day" + (day === d ? " active" : "")}
                    onClick={() => { setDay(d); setSlot(null); setConfirmed(false); }}
                  >
                    {d.label}
                    <span>{d.num}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bk-row">
              <label>Ώρα</label>
              <div className="bk-slots">
                {(day ? slotsFor(day) : []).slice(0, 12).map((s) => (
                  <button
                    key={s}
                    className={"bk-slot" + (slot === s ? " active" : "")}
                    onClick={() => { setSlot(s); setConfirmed(false); }}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {!day && (
                <p style={{ fontSize: "13px", color: "var(--text-45)", marginTop: "8px" }}>
                  Διαλέξτε πρώτα ημέρα.
                </p>
              )}
            </div>

            <div className="bk-summary">
              <div className="bk-summary-row"><span>Υπηρεσία</span><b>{service || "—"}</b></div>
              <div className="bk-summary-row"><span>Ημερομηνία</span><b>{day ? `${day.label} ${day.num}` : "—"}</b></div>
              <div className="bk-summary-row"><span>Ώρα</span><b>{slot || "—"}</b></div>
              <button
                className="btn btn-dark btn-block"
                style={{ marginTop: "18px" }}
                disabled={!ready}
                onClick={() => setConfirmed(true)}
              >
                Προεπισκόπηση κράτησης
              </button>
              {confirmed && (
                <div className="bk-confirm-msg">
                  Αυτό είναι preview — καμία κράτηση δεν έχει σταλεί πουθενά. Για να λειτουργήσει πραγματικά, χρειάζεται να συνδεθεί με πραγματικό λογαριασμό Setmore (ή αντίστοιχο). Μέχρι τότε, επιβεβαιώστε το ραντεβού σας τηλεφωνικά ή στο WhatsApp.
                </div>
              )}
            </div>
          </Rv>

          <Rv className="bk-side" delay={120}>
            <h3 className="h3">Ή, όπως πάντα — τηλέφωνο και WhatsApp</h3>
            <p>
              Η online κράτηση είναι νέα δυνατότητα υπό δοκιμή. Το τηλέφωνο και το WhatsApp παραμένουν ο κύριος τρόπος επικοινωνίας — καμία αλλαγή εκεί.
            </p>
            <div className="bk-side-card">
              <div>
                <b>Καλέστε</b>
                <span>{TEL_DISPLAY} — Δευ–Παρ 08:00–21:00, Σαβ 09:00–18:00</span>
              </div>
            </div>
            <div className="bk-side-card">
              <div>
                <b>WhatsApp</b>
                <span>Στείλτε φωτογραφία του χώρου και σας απαντάμε με τιμή</span>
              </div>
            </div>
            <div className="bk-side-card">
              <div>
                <b>Η τιμή στο τηλέφωνο</b>
                <span>είναι η τιμή που πληρώνετε — καμία έκπληξη</span>
              </div>
            </div>
            <div className="acts" style={{ display: "flex", gap: "10px", marginTop: "22px", flexWrap: "wrap" }}>
              <a className="btn btn-dark" href={`tel:${TEL}`}>Καλέστε {TEL_DISPLAY}</a>
              <a className="btn btn-ghost" href={WA_LINK} target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </Rv>
        </div>
      </div>
    </section>
  );
}
