"use client";

import { useEffect } from "react";
import {
  animate,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";

export function NavigationEffects() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 32 });

  useEffect(() => {
    let stopScroll: (() => void) | undefined;
    const cancel = () => stopScroll?.();
    const navigate = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const link = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!link || link.hasAttribute("download")) return;
      const id = link.hash.slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      cancel();
      // Measure after React closes the mobile menu, so its height cannot shift the destination.
      requestAnimationFrame(() => {
        const header =
          document.querySelector(".nav-shell")?.getBoundingClientRect()
            .height ?? 86;
        const destination = Math.max(
          0,
          Math.min(
            window.scrollY + target.getBoundingClientRect().top - header - 20,
            document.documentElement.scrollHeight - window.innerHeight,
          ),
        );
        if (window.location.hash !== link.hash)
          window.history.pushState(null, "", link.hash);
        const focusTarget = () => {
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        };
        if (reduced) {
          window.scrollTo({ top: destination, behavior: "instant" });
          focusTarget();
          return;
        }
        const controls = animate(window.scrollY, destination, {
          duration: Math.min(
            1.05,
            0.5 + Math.abs(destination - window.scrollY) / 5500,
          ),
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (top) => window.scrollTo({ top, behavior: "instant" }),
          onComplete: focusTarget,
        });
        stopScroll = () => controls.stop();
      });
    };
    const cancelWithKey = (event: KeyboardEvent) => {
      if (
        [
          "ArrowDown",
          "ArrowUp",
          "PageDown",
          "PageUp",
          "Home",
          "End",
          "Escape",
          " ",
          "Tab",
        ].includes(event.key)
      )
        cancel();
    };
    document.addEventListener("click", navigate);
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    window.addEventListener("keydown", cancelWithKey);
    return () => {
      cancel();
      document.removeEventListener("click", navigate);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
      window.removeEventListener("keydown", cancelWithKey);
    };
  }, [reduced]);

  return (
    <motion.div
      className="reading-progress"
      style={{ scaleX: reduced ? scrollYProgress : progress }}
      aria-hidden="true"
    />
  );
}
