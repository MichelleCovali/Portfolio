"use client";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import { Check, Copy, Download, Menu, Moon, Sun, X } from "lucide-react";
import { navigation, profile } from "@/data/portfolio";
export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const trigger = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const sections = navigation
      .map((name) => document.getElementById(name.toLowerCase()))
      .filter((section): section is HTMLElement => Boolean(section));
    let frame = 0;
    const update = () => {
      const threshold = window.innerHeight * 0.3;
      const current = sections
        .filter((section) => section.getBoundingClientRect().top <= threshold)
        .at(-1);
      setActive(current?.id ?? "home");
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
  useEffect(() => {
    const sync = () => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem("theme");
      } catch {
        // Theme switching still works when browser storage is unavailable.
      }
      const value = saved !== "light";
      document.documentElement.classList.toggle("dark", value);
      setDark(value);
    };
    sync();
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Keep the selected theme for this page even if it cannot be persisted.
    }
  };
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a href="#home" className="wordmark" aria-label="Mihaela Covali home">
          mc<span>.</span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              aria-current={active === n.toLowerCase() ? "location" : undefined}
            >
              {n}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            onClick={toggle}
            className="icon-button"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            className="cv-link"
            href="/cv.pdf"
            download="Mihaela-Covali-CV.pdf"
          >
            Download CV <Download size={15} />
          </a>
          <button
            ref={trigger}
            className="icon-button menu-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mobile-nav"
        >
          {navigation.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              aria-current={active === n.toLowerCase() ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {n}
            </a>
          ))}
          <a href="/cv.pdf" download>
            Download CV <Download size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}
const subscribeToHydration = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "0px 0px -24px 0px", amount: 0.06 });
  const reduced = useReducedMotion();
  const ready = useSyncExternalStore(
    subscribeToHydration,
    clientSnapshot,
    serverSnapshot,
  );
  return (
    <motion.div
      ref={ref}
      className={`reveal-content ${className}`}
      initial={false}
      animate={
        reduced || !ready
          ? { opacity: 1, y: 0 }
          : { opacity: inView ? 1 : 0, y: inView ? 0 : 14 }
      }
      transition={{
        duration: reduced ? 0 : inView ? 0.65 : 0.3,
        delay: inView ? delay : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
export function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 3500);
    return () => clearTimeout(timer);
  }, [status]);
  return (
    <>
      <button
        className="copy-button"
        aria-label="Copy email address"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(profile.email);
            setStatus("copied");
          } catch {
            setStatus("error");
          }
        }}
      >
        {status === "copied" ? <Check size={18} /> : <Copy size={18} />}
      </button>
      <AnimatePresence>
        {status !== "idle" && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="copy-status"
            role="status"
          >
            {status === "copied"
              ? "Email copied"
              : "Please select and copy the email address."}
          </motion.span>
        )}
      </AnimatePresence>
    </>
  );
}
