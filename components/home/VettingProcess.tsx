"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, shouldReduceMotion } from "@/components/home/animation";
import { ArrowRight, Sparkles } from "lucide-react";

const steps = [
  {
    num: "1",
    title: "Consultation Initiale",
    desc: "Nous analysons votre profil, vos ambitions académiques ou vos envies d'évasion pour dresser un bilan sur-mesure."
  },
  {
    num: "2",
    title: "Orientation & Choix Stratégique",
    desc: "Sélection rigoureuse des universités partenaires, des programmes d'études ou des séjours touristiques adaptés."
  },
  {
    num: "3",
    title: "Constitution du Dossier",
    desc: "Aide à la rédaction des lettres de motivation, formulaires administratifs et rassemblement des pièces clés."
  },
  {
    num: "4",
    title: "Soumission & Admission",
    desc: "Dépôt officiel des candidatures auprès des établissements ou traitement des réservations hôtelières et vols."
  },
  {
    num: "5",
    title: "Préparation Consulaire (Visa)",
    desc: "Simulations d'entretiens individuels et vérification minutieuse des justificatifs financiers requis pour l'ambassade."
  },
  {
    num: "6",
    title: "Logistique & Hébergement",
    desc: "Recherche de logements étudiants sécurisés, assurances voyage et accueil personnalisé à l'arrivée."
  },
  {
    num: "7",
    title: "Départ & Assistance 24/7",
    desc: "Séance d'orientation prédépart et suivi continu une fois sur place pour garantir votre intégration et sérénité."
  }
];

export function VettingProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || shouldReduceMotion()) return;

    const context = gsap.context(() => {
      // 1. Text Line Reveal (Fades and slides up inside hidden overflow)
      gsap.to(".vetting-title-line span", {
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".vetting-title",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });

      // 2. Title Description Reveal
      gsap.fromTo(
        ".vetting-desc",
        { opacity: 0, y: 15 },
        {
          opacity: 0.8,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".vetting-desc",
            start: "top 88%",
            toggleActions: "play none none none"
          }
        }
      );

      // 3. Scroll Progress line fill and dot tracking
      gsap.to(".vetting-progress-fill", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".vetting-section",
          start: "top 25%",
          end: "bottom 75%",
          scrub: true
        }
      });

      gsap.to(".vetting-progress-dot", {
        top: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".vetting-section",
          start: "top 25%",
          end: "bottom 75%",
          scrub: true
        }
      });

      // 4. Staggered Entrance of Vetting Cards
      gsap.fromTo(
        ".vetting-card",
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.48,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vetting-cards-list",
            start: "top 82%",
            toggleActions: "play none none none"
          }
        }
      );

      // 5. Card Hover expansion & aura glows
      const cards = gsap.utils.toArray<HTMLElement>(".vetting-card");
      cards.forEach((card) => {
        const glow = card.querySelector(".vetting-glow");
        const desc = card.querySelector(".vetting-card-desc");
        const num = card.querySelector(".vetting-card-number");

        const onEnter = () => {
          gsap.to(card, {
            y: -5,
            scale: 1.02,
            borderColor: "rgba(0, 82, 204, 0.25)",
            boxShadow: "0 22px 48px rgba(0, 82, 204, 0.06)",
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto"
          });
          if (glow) {
            gsap.to(glow, {
              opacity: 1,
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out",
              overwrite: "auto"
            });
          }
          if (desc) {
            gsap.to(desc, {
              height: "auto",
              opacity: 0.75,
              marginTop: "12px",
              duration: 0.3,
              ease: "power2.out",
              overwrite: "auto"
            });
          }
          if (num) {
            gsap.to(num, {
              color: "var(--primary)",
              scale: 1.06,
              duration: 0.28,
              ease: "power2.out"
            });
          }
        };

        const onLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            borderColor: "rgba(230, 230, 230, 0.6)",
            boxShadow: "0 4px 14px rgba(8, 8, 8, 0.02)",
            duration: 0.26,
            ease: "power2.out",
            overwrite: "auto"
          });
          if (glow) {
            gsap.to(glow, {
              opacity: 0,
              scale: 0.9,
              duration: 0.26,
              overwrite: "auto"
            });
          }
          if (desc) {
            gsap.to(desc, {
              height: 0,
              opacity: 0,
              marginTop: "0px",
              duration: 0.26,
              overwrite: "auto"
            });
          }
          if (num) {
            gsap.to(num, {
              color: "#dcdcdc",
              scale: 1,
              duration: 0.26,
              ease: "power2.out"
            });
          }
        };

        card.addEventListener("pointerenter", onEnter);
        card.addEventListener("pointerleave", onLeave);
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section className="vetting-section section-space" id="vetting" ref={sectionRef}>
      <div className="container vetting-layout">
        
        {/* Left Column (Sticky info) */}
        <div className="vetting-left-info">
          <div className="vetting-header">
            <span className="section-label">Notre Processus</span>
            
            <h2 className="vetting-title">
              <span className="vetting-title-line">
                <span>Comment nous réalisons</span>
              </span>
              <span className="vetting-title-line">
                <span>vos projets de voyage</span>
              </span>
              <span className="vetting-title-line">
                <span>(sans aucun stress)</span>
              </span>
            </h2>

            <p className="vetting-desc">
              {"De la première consultation au suivi sur place, notre équipe d'experts prend tout en charge pour garantir votre succès académique, touristique ou spirituel."}
            </p>
          </div>

          <div className="vetting-decor-blob"></div>
        </div>

        {/* Right Column (Steps list) */}
        <div className="vetting-right-list">
          <div className="vetting-cards-list">
            <span className="vetting-eyebrow-accent">NOTRE ACCOMPAGNEMENT EN 7 ÉTAPES</span>
            
            {steps.map((step) => (
              <div className="vetting-card-wrapper" key={step.num}>
                {/* Glow layer behind card */}
                <div className="vetting-glow"></div>
                
                <div className="vetting-card">
                  <div className="vetting-card-header">
                    <span className="vetting-card-number">{step.num.padStart(2, "0")}</span>
                    <h3 className="vetting-card-title">{step.title}</h3>
                  </div>
                  
                  {/* Expanded description wrapper */}
                  <div className="vetting-card-desc" style={{ height: 0, opacity: 0, overflow: "hidden" }}>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Scroll Progress Bar (Far Right) */}
        <div className="vetting-progress-container" aria-hidden="true">
          <div className="vetting-progress-fill"></div>
          <div className="vetting-progress-dot"></div>
        </div>

      </div>
    </section>
  );
}
