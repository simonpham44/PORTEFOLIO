import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const checkHover = (e) => {
      const t = e.target;
      if (!t) return;
      const isInteractive =
        t.closest("a, button, input, textarea, [role='button'], [data-cursor='hover']");
      setHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", checkHover);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", checkHover);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={hovering ? "cursor-hover" : ""}>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
}
