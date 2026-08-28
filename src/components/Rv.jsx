import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll wrapper. Fades + slides its children in the first time
 * they scroll into view. Wrap anything in <Rv> to give it that effect;
 * pass `delay` (ms) to stagger a group of them, and `tag` to render as
 * something other than a <div> (e.g. tag="span" or tag="h1").
 */
export default function Rv({ children, delay, className = "", tag = "div", style, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.14 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = tag;
  return (
    <Tag
      ref={ref}
      className={"rv" + (inView ? " in" : "") + (className ? " " + className : "")}
      style={{ ...(delay ? { "--d": delay + "ms" } : null), ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
