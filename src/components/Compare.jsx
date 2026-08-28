import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Draggable before/after image slider. Drag (mouse or touch), or use the
 * invisible <input type="range"> for keyboard/screen-reader access.
 */
export default function Compare({ before, after, tall, start = 58, labelL = "Πριν", labelR = "Μετά" }) {
  const [p, setP] = useState(start);
  const [dragging, setDragging] = useState(false);
  const [touched, setTouched] = useState(false);
  const ref = useRef(null);

  const setFromClientX = useCallback((clientX) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    let pct = ((clientX - r.left) / r.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    setP(pct);
    setTouched(true);
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const move = (e) => setFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
    const up = () => setDragging(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
  }, [dragging, setFromClientX]);

  return (
    <div
      ref={ref}
      className={"cmp" + (tall ? " tall" : "") + (dragging ? " dragging" : "") + (touched ? " touched" : "")}
      style={{ "--p": p + "%" }}
      onMouseDown={(e) => { setDragging(true); setFromClientX(e.clientX); }}
      onTouchStart={(e) => { setDragging(true); setFromClientX(e.touches[0].clientX); }}
    >
      <img src={before} alt={labelL} loading="lazy" />
      <img src={after} alt={labelR} className="after-layer" loading="lazy" />
      <input
        type="range"
        className="rng"
        min={0}
        max={100}
        value={Math.round(p)}
        aria-label="Σύρετε για σύγκριση πριν και μετά"
        onChange={(e) => { setP(Number(e.target.value)); setTouched(true); }}
      />
      <div className="edge">
        <div className="grip">
          <i /><i />
        </div>
      </div>
      <span className="tag l">{labelL}</span>
      <span className="tag r">{labelR}</span>
      <span className="drag-hint">↔ Σύρετε</span>
    </div>
  );
}
