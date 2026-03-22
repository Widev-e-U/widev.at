import { useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationOptions {
  /** Trigger animation only once (default: true for professional feel) */
  once?: boolean;
  /** Margin around viewport for triggering */
  margin?: `${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`;
  /** Amount of element that must be visible (0-1) */
  amount?: number;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const { 
    once = true, // Changed to true - animations should play once for polish
    margin = "-80px 0px" as const,
    amount = 0.2
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    margin,
    amount
  });

  return { ref, isInView };
}
