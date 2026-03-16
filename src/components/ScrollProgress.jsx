import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const totalScroll = document.body.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;

        const scrolled =
          totalScroll > 0 ? currentScroll / totalScroll : 0;

        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${scrolled})`;
        }
      });
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-[3px] w-full bg-slate-200/40 dark:bg-slate-800/60 backdrop-blur">
      <div
        ref={barRef}
        className="origin-left h-full rounded-r-full bg-black dark:bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] dark:shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-transform duration-200 ease-out"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}