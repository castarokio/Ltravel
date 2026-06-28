"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { shouldReduceMotion } from "@/components/home/animation";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !footerRef.current || shouldReduceMotion()) return;
    
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.18,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 98%",
            toggleActions: "play none none none"
          }
        }
      );
    }, footerRef);

    return () => context.revert();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="container footer-grid">
        <div className="footer-brand footer-brand-hover">
          <Logo />
          <p>
            {"Nos étudiants et parents apprécient notre connaissance approfondie des systèmes éducatifs et d'immigration mondiaux."}
          </p>
        </div>

        <div className="footer-col-hover">
          <h3>Entreprise</h3>
          <Link href="/about">À Propos</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-col-hover">
          <h3>Contenu</h3>
          <Link href="/universities">Universités</Link>
          <Link href="/tourism/local">Tourisme Local</Link>
          <Link href="/tourism/international">Tourisme International</Link>
        </div>

        <div className="footer-col-hover">
          <h3>Nous Contacter</h3>
          <p className="contact-line">
            <Phone size={14} /> 07856342788
          </p>
          <p className="contact-line">
            <Mail size={14} /> study@gmail.com
          </p>
          <p>Park Street, Londres</p>
        </div>
      </div>
    </footer>
  );
}
