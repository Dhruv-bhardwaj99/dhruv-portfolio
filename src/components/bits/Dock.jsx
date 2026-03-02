import React, { useMemo, useState } from "react";

export default function Dock({ items = [], className = "" }) {
  const [activeIndex, setActiveIndex] = useState(null);

  // Simple “dock magnification” based on distance from hovered item
  const scales = useMemo(() => {
    return items.map((_, i) => {
      if (activeIndex === null) return 1;
      const d = Math.abs(i - activeIndex);
      if (d === 0) return 1.25;
      if (d === 1) return 1.12;
      if (d === 2) return 1.05;
      return 1;
    });
  }, [activeIndex, items]);

  return (
    <div
      className={[
        "inline-flex items-end gap-2 rounded-xl px-1 py-1",
        "text-base text-muted-foreground hover:text-foreground",
        "bg-background/60 backdrop-blur",
        "dark:bg-black/30",
        className,
      ].join(" ")}
      onMouseLeave={() => setActiveIndex(null)}
    >
      {items.map((item, i) => (
        <a
          key={item.href + item.label}
          href={item.href}
          onMouseEnter={() => setActiveIndex(i)}
          className={[
            "relative flex flex-col items-center justify-center",
            "rounded-xl px-3 py-2",
            "text-sm text-muted-foreground hover:text-foreground",
            "transition",
            "hover:bg-foreground/5 dark:hover:bg-white/10",
          ].join(" ")}
          style={{
            transform: `translateY(${activeIndex === i ? "-4px" : "0px"}) scale(${scales[i]})`,
          }}
        >
          {/* icon placeholder (we’ll add later) */}
          <span className="hidden text-xs opacity-70 sm:block">{item.label}</span>
          <span className="block sm:hidden">{item.short || item.label[0]}</span>

          {/* glow */}
          <span
            className={[
              "pointer-events-none absolute inset-0 rounded-xl opacity-0",
              "transition-opacity",
              activeIndex === i ? "opacity-100" : "",
              "dark:shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_10px_30px_rgba(0,0,0,0.35)]",
            ].join(" ")}
          />
        </a>
      ))}
    </div>
  );
}
