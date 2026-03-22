import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import logo from "../assets/Logo-opt.png";

interface FidgetSpinnerLogoProps {
  className?: string;
}

export function FidgetSpinnerLogo({ className = "" }: FidgetSpinnerLogoProps) {
  const { scrollYProgress } = useScroll();
  const [logoWiggle, setLogoWiggle] = useState(0);
  const [logoScale, setLogoScale] = useState(1);

  const thetaRef = useRef(0);
  const omegaRef = useRef(0);
  const [rotation, setRotation] = useState(0);

  const MAX_OMEGA = 2160;
  const CLICK_IMPULSE = 360;
  const VISCOSITY_K = 0.5;
  const COULOMB_DECEL = 140;
  const OMEGA_EPS = 2;

  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      let ω = omegaRef.current;
      if (Math.abs(ω) > 0) {
        ω *= Math.exp(-VISCOSITY_K * dt);

        const s = Math.sign(ω);
        const d = COULOMB_DECEL * dt;
        ω = Math.abs(ω) > d ? ω - s * d : 0;

        if (Math.abs(ω) < OMEGA_EPS) ω = 0;
        ω = Math.max(-MAX_OMEGA, Math.min(MAX_OMEGA, ω));
        omegaRef.current = ω;

        if (ω !== 0) {
          thetaRef.current += ω * dt;
          if (Math.abs(thetaRef.current) > 1e6) {
            thetaRef.current = thetaRef.current % 360;
          }
        }
      }

      setRotation(thetaRef.current);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleLogoClick = () => {
    const next = Math.min(MAX_OMEGA, omegaRef.current + CLICK_IMPULSE);
    omegaRef.current = next;
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const speed = Math.abs(omegaRef.current);
    const damp = 1 / (1 + speed / 400);

    const wiggle =
      (Math.sin(latest * Math.PI * 8) * 3 +
        Math.sin(latest * Math.PI * 12) * 1.5) *
      damp;
    setLogoWiggle(wiggle);

    const scalePulse =
      1 +
      (Math.sin(latest * Math.PI * 6) * 0.08 +
        Math.sin(latest * Math.PI * 10) * 0.04) *
        damp;

    const speedBulge = Math.min(0.06, speed / 6000);
    setLogoScale(scalePulse + speedBulge);
  });

  return (
    <div
      className={`relative w-full aspect-square max-w-xs mx-auto select-none ${className}`}
    >
      <div className="absolute inset-4 bg-foreground/[0.03] rounded-full blur-2xl" />
      <motion.img
        src={logo}
        alt="WiDev"
        width={256}
        height={256}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        className="relative z-10 w-full h-full object-contain cursor-pointer invert opacity-90"
        style={{
          rotate: rotation + logoWiggle,
          scale: logoScale,
          willChange: "transform",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        onClick={handleLogoClick}
        title="Click to spin!"
      />
    </div>
  );
}
