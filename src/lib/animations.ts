import type { Variants, Transition } from "framer-motion";

// Professional spring configs for natural motion
export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 1,
};

export const snappySpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 25,
};

export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 50,
  damping: 20,
};

// Fade up animation - the workhorse (optimized for CLS)
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

// Fade in without movement
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Scale up animation for cards/highlights (optimized for CLS)
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
};

// Stagger container for parent elements
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Fast stagger for tighter animations
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

// Stagger item (child of stagger container) - optimized for CLS
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
    },
  },
};

// Hero-specific animations - optimized for fast LCP/FCP
export const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    },
  },
};

export const heroItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

// Logo entrance animation - reduced delay for faster LCP
export const logoReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      delay: 0.1,
    },
  },
};

// Card hover animation
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 0 0 rgba(0,0,0,0)",
  },
  hover: {
    scale: 1.02,
    y: -4,
    boxShadow: "0 10px 40px -10px rgba(0,0,0,0.2)",
    transition: snappySpring,
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

// Slide in from sides
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: springTransition,
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: springTransition,
  },
};

// Section title animation
export const sectionTitle: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

// Viewport config for scroll animations
export const viewportOnce = {
  once: true,
  margin: "-80px 0px",
  amount: 0.3,
} as const;

export const viewportConfig = {
  once: true,
  margin: "-50px 0px",
} as const;
