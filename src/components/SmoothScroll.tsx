import { useEffect, useRef, ReactNode } from "react";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";

interface SmoothScrollProps {
  children: ReactNode;
  smoothness?: number; // 0.1 = very smooth, 0.3 = less smooth
}

const SmoothScroll = ({ children, smoothness = 0.15 }: SmoothScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollY = useMotionValue(0);

  // Spring animation for smooth scrolling
  const smoothScrollY = useSpring(scrollY, {
    damping: 40,
    stiffness: 200,
    mass: smoothness * 3,
  });

  // Transform the scroll value
  const y = useTransform(smoothScrollY, (value) => -value);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      // Disable smooth scrolling for accessibility
      return;
    }

    const updateScroll = () => {
      if (scrollRef.current) {
        scrollY.set(window.scrollY);
      }
    };

    // Update scroll position
    window.addEventListener("scroll", updateScroll, { passive: true });

    // Set initial scroll position
    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    // Update document height to match content
    const updateHeight = () => {
      if (scrollRef.current) {
        document.body.style.height = `${scrollRef.current.offsetHeight}px`;
      }
    };

    updateHeight();

    // Update on resize
    window.addEventListener("resize", updateHeight);

    // Use ResizeObserver for content changes
    const resizeObserver = new ResizeObserver(updateHeight);
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateHeight);
      resizeObserver.disconnect();
      document.body.style.height = "";
    };
  }, []);

  // Check if user prefers reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    // Return children without smooth scrolling
    return <>{children}</>;
  }

  return (
    <motion.div
      ref={scrollRef}
      style={{ y }}
      className="fixed top-0 left-0 w-full will-change-transform"
    >
      {children}
    </motion.div>
  );
};

export default SmoothScroll;
