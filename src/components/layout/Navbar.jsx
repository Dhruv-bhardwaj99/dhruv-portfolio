import { useTheme } from "../theme/ThemeProvider";
import { FiSun, FiMenu, FiX } from "react-icons/fi";
import { GoMoon } from "react-icons/go";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Education",  href: "#education"  },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Contact",    href: "#contact"    },
];

/* ── Active section via scroll ───────────────────── */
function useActiveSection(ids) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handle = () => {
      const threshold = window.innerHeight * 0.42;

      // Sort by DOM position (offsetTop) so we always walk top → bottom
      const sections = ids
        .map((id) => ({ id, el: document.getElementById(id) }))
        .filter((s) => s.el)
        .sort((a, b) => a.el.offsetTop - b.el.offsetTop);

      let current = "";
      for (const { id, el } of sections) {
        if (el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, [ids]);

  return active;
}

/* ── Logo mark ───────────────────────────────────── */
function LogoMark() {
  return (
    <a href="#top" aria-label="Home" className="group flex items-center gap-2.5 shrink-0">
      <img
        src="/favicon.svg"
        alt="Dhruv Bhardwaj logo"
        className="h-8 w-8 rounded-lg shadow-md transition group-hover:scale-105"
      />
      <span className="hidden sm:inline text-sm font-bold gradient-text tracking-tight">
        Dhruv Bhardwaj
      </span>
    </a>
  );
}

/* ── Mobile drawer ───────────────────────────────── */
function MobileMenu({ open, onClose, active, isDark, setTheme }) {
  const overlayRef = useRef(null);

  // Close on overlay click
  const onOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        ref={overlayRef}
        onClick={onOverlayClick}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 flex flex-col bg-(--background) border-l border-(--border) shadow-2xl transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-(--border)">
          <LogoMark />
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center h-8 w-8 rounded-lg transition hover:bg-foreground/8"
            aria-label="Close menu"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          {navLinks.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-linear-to-r from-(--grad-from)/15 to-(--grad-to)/15 text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-(--grad-from) to-(--grad-to)" />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Drawer footer: theme toggle */}
        <div className="px-6 py-5 border-t border-(--border)">
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="w-full flex items-center justify-center gap-2 rounded-xl border border-(--border) py-2.5 text-sm font-medium transition hover:bg-foreground/5"
          >
            {isDark ? <FiSun className="h-4 w-4" /> : <GoMoon className="h-4 w-4" />}
            {isDark ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </div>
    </>
  );
}

/* ── Main Navbar ─────────────────────────────────── */
export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  const sectionIds = navLinks.map((l) => l.href.slice(1));
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(top > 12);
      setScrollPct(total > 0 ? (top / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-(--border) bg-white/75 dark:bg-black/60 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Scroll progress bar */}
        <div className="absolute inset-x-0 top-0 h-0.5 overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-(--grad-from) to-(--grad-to) transition-[width] duration-150 ease-out"
            style={{ width: `${scrollPct}%` }}
          />
        </div>

        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 gap-4">
          {/* Logo */}
          <LogoMark />

          {/* Desktop nav links — centered pill group */}
          <div className="hidden md:flex items-center gap-1 rounded-full border border-(--border) bg-(--card)/80 backdrop-blur px-2 py-1.5 shadow-sm">
            {navLinks.map((item) => {
              const id = item.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {/* Active pill background */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-linear-to-r from-(--grad-from) to-(--grad-to) shadow-sm" />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right: theme toggle + hamburger */}
          <div className="flex items-center gap-2">
            {/* Theme toggle (desktop) */}
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
              className="hidden md:inline-flex items-center justify-center h-9 w-9 rounded-full border border-(--border) bg-(--card) transition hover:scale-105 hover:border-primary/40 hover:shadow-sm cursor-pointer"
            >
              {isDark ? <FiSun className="h-4 w-4" /> : <GoMoon className="h-4 w-4" />}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-(--border) bg-(--card) transition hover:scale-105"
            >
              <FiMenu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        active={active}
        isDark={isDark}
        setTheme={setTheme}
      />
    </>
  );
}
