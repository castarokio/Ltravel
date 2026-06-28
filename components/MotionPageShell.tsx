"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { ReactNode } from "react";
import { shouldReduceMotion } from "@/components/home/animation";

type MotionPageShellProps = {
  children: ReactNode;
  className?: string;
};

export function MotionPageShell({ children, className = "" }: MotionPageShellProps) {
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shellRef.current || shouldReduceMotion()) return;
    const context = gsap.context(() => {
      gsap.fromTo(
        shellRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.12, ease: "power2.out" }
      );
      gsap.fromTo(
        ".utility-card",
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.16, ease: "power2.out" }
      );
    }, shellRef);

    return () => context.revert();
  }, []);

  return (
    <section className={`utility-page ${className}`} ref={shellRef}>
      <div className="container utility-card">
        {children}
      </div>
    </section>
  );
}
