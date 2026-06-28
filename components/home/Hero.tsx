"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap, shouldReduceMotion } from "@/components/home/animation";
import { SplitLine } from "@/components/home/SplitLine";
import collageTravel from "../../public/assets/collage-travel.jpg";
import collageUniversity from "../../public/assets/collage-university.jpg";
import collageStudent from "../../public/assets/collage-student.jpg";
import collageOmra from "../../public/assets/collage-omra.jpg";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!heroRef.current || shouldReduceMotion()) return;

    const context = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power2.out" } })
        .from(".hero-eyebrow", {
          opacity: 0,
          y: -8,
          duration: 0.18
        })
        .from(".split-line-inner", {
          yPercent: 32,
          duration: 0.22
        }, "-=0.08")
        .from(".hero-copy p", { opacity: 0, y: 8, duration: 0.18 }, "-=0.12")
        .from(".hero-buttons > *", { opacity: 0, y: 6, duration: 0.16 }, "-=0.08")
        .fromTo(".collage",
          { opacity: 0 },
          { opacity: 1, duration: 0.16 },
          "-=0.12"
        )
        .fromTo(".col-img",
          { opacity: 0, scale: 0.97, y: 8 },
          { opacity: 1, scale: 1, y: 0, duration: 0.2, ease: "power2.out" },
          "-=0.08"
        )
        .fromTo(".chip",
          { opacity: 0, scale: 0.97, y: 6 },
          { opacity: 1, scale: 1, y: 0, duration: 0.16, ease: "power2.out" },
          "-=0.06"
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">{"Études • Voyages • Omra"}</p>
          <h1 className="split-heading">
            <SplitLine text="Études, voyages" />
            <SplitLine text="et Omra" className="accent-line" />
            <SplitLine text="— avancez avec" />
            <SplitLine text="confiance" />
          </h1>
          <p>
            {"Un accompagnement complet pour vos projets d’études à l’étranger, vos voyages touristiques et vos séjours Omra, de la première question jusqu’au départ."}
          </p>
          <div className="hero-buttons">
            <Link className="button hero-button" href="#services">
              {"Découvrir nos services"}
            </Link>
            <Link className="button button-ghost hero-button-secondary" href="/contact">
              {"Parler à un conseiller"}
            </Link>
          </div>
        </div>
        <div className="collage" aria-label="Collage des services d'études, de tourisme et d'Omra">
          <div className="col-img a">
            <Image src={collageTravel} width={400} height={450} alt="Étudiant à l'aéroport" priority />
          </div>
          <div className="col-img b">
            <Image src={collageUniversity} width={300} height={220} alt="Campus universitaire" />
          </div>
          <div className="col-img c">
            <Image src={collageStudent} width={320} height={320} alt="Voyage méditerranéen" />
          </div>
          <div className="col-img d">
            <Image src={collageOmra} width={360} height={270} alt="Omra à La Mecque" />
          </div>

          <div className="chip etudes">
            <span className="chip-ico">🎓</span>
            <span>{"Études à l'étranger"}</span>
          </div>
          <div className="chip tourisme">
            <span className="chip-ico">🌴</span>
            <span>Tourisme</span>
          </div>
          <div className="chip omra">
            <span className="chip-ico">🕌</span>
            <span>Omra</span>
          </div>

          <svg className="plane-path" viewBox="0 0 400 200" fill="none" aria-hidden="true">
            <path d="M10 180 Q 150 40 380 80" stroke="#1e40af" strokeWidth="2" strokeDasharray="4 6" fill="none" />
            <text x="370" y="78" fontSize="18">✈️</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
