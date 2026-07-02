"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, shouldReduceMotion } from "@/components/home/animation";

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

  // Helper to split text into words wrapped in spans for premium skew/slide animations
  const renderSplitText = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="vetting-word-wrap">
        <span className="vetting-word-inner">{word}</span>
      </span>
    ));
  };

  useEffect(() => {
    if (!sectionRef.current || shouldReduceMotion()) return;

    const context = gsap.context(() => {
      // 1. Fancy Word-by-Word Title Reveal with Rotation & Skew
      gsap.fromTo(
        ".vetting-word-inner",
        { y: "115%", rotate: 8, skewX: 12, opacity: 0 },
        {
          y: "0%",
          rotate: 0,
          skewX: 0,
          opacity: 1,
          duration: 1.15,
          stagger: 0.025,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".vetting-title-vertical",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // 2. Title Description Reveal
      gsap.fromTo(
        ".vetting-desc",
        { opacity: 0, y: 25 },
        {
          opacity: 0.8,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vetting-desc",
            start: "top 88%",
            toggleActions: "play none none none"
          }
        }
      );

      // 3. Scroll Progress line fill and dot tracking (Vertical scroll path)
      gsap.to(".vetting-progress-fill", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".vetting-section",
          start: "top 20%",
          end: "bottom 80%",
          scrub: true
        }
      });

      gsap.to(".vetting-progress-dot", {
        top: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".vetting-section",
          start: "top 20%",
          end: "bottom 80%",
          scrub: true
        }
      });

      // 4. Staggered 3D Perspective Card Entrance
      gsap.fromTo(
        ".vetting-card",
        { 
          opacity: 0, 
          y: 120, 
          rotateX: -25, 
          rotateY: 5,
          scale: 0.85,
          transformPerspective: 1200
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 1.0,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".vetting-cards-list-vertical",
            start: "top 82%",
            toggleActions: "play none none none"
          }
        }
      );

      // 5. 3D Parallax Tilt effect & Cursor-tracking glow spot
      const cards = gsap.utils.toArray<HTMLElement>(".vetting-card-wrapper");
      cards.forEach((wrapper) => {
        const card = wrapper.querySelector(".vetting-card") as HTMLElement;
        const glow = wrapper.querySelector(".vetting-glow") as HTMLElement;
        const desc = wrapper.querySelector(".vetting-card-desc") as HTMLElement;
        const num = wrapper.querySelector(".vetting-card-number") as HTMLElement;

        if (!card) return;

        const onPointerMove = (e: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const xc = x / rect.width - 0.5;
          const yc = y / rect.height - 0.5;

          const rotateX = -yc * 15;
          const rotateY = xc * 15;

          gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            x: xc * 5,
            y: yc * 5,
            duration: 0.2,
            ease: "power2.out"
          });

          if (glow) {
            gsap.to(glow, {
              x: x - rect.width / 2,
              y: y - rect.height / 2,
              duration: 0.25,
              ease: "power2.out"
            });
          }
        };

        const onPointerEnter = () => {
          card.addEventListener("pointermove", onPointerMove);

          gsap.to(card, {
            scale: 1.035,
            z: 20,
            borderColor: "rgba(0, 82, 204, 0.3)",
            boxShadow: "0 24px 52px rgba(0, 82, 204, 0.08)",
            duration: 0.3,
            ease: "power2.out"
          });

          if (glow) {
            gsap.to(glow, {
              opacity: 1,
              scale: 1.12,
              duration: 0.3,
              ease: "power2.out"
            });
          }

          if (desc) {
            gsap.to(desc, {
              height: "auto",
              opacity: 0.8,
              marginTop: "16px",
              duration: 0.32,
              ease: "power2.out"
            });
          }

          if (num) {
            gsap.to(num, {
              color: "var(--primary)",
              scale: 1.06,
              rotate: 4,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        };

        const onPointerLeave = () => {
          card.removeEventListener("pointermove", onPointerMove);

          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            x: 0,
            y: 0,
            z: 0,
            scale: 1,
            borderColor: "rgba(230, 230, 230, 0.6)",
            boxShadow: "0 4px 14px rgba(8, 8, 8, 0.02)",
            duration: 0.35,
            ease: "power3.out"
          });

          if (glow) {
            gsap.to(glow, {
              opacity: 0,
              scale: 0.9,
              x: 0,
              y: 0,
              duration: 0.35,
              ease: "power3.out"
            });
          }

          if (desc) {
            gsap.to(desc, {
              height: 0,
              opacity: 0,
              marginTop: "0px",
              duration: 0.3,
              ease: "power3.out"
            });
          }

          if (num) {
            gsap.to(num, {
              color: "#dcdcdc",
              scale: 1,
              rotate: 0,
              duration: 0.3,
              ease: "power3.out"
            });
          }
        };

        wrapper.addEventListener("pointerenter", onPointerEnter);
        wrapper.addEventListener("pointerleave", onPointerLeave);
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section className="vetting-section section-space" id="vetting" ref={sectionRef}>
      <div className="container vetting-container-vertical">
        
        {/* Header Block (Title and Description stacked) */}
        <div className="vetting-header-vertical">
          <span className="section-label">Notre Processus</span>
          
          <h2 className="vetting-title-vertical">
            <span className="vetting-title-line">
              {renderSplitText("Comment nous réalisons")}
            </span>
            <span className="vetting-title-line">
              {renderSplitText("vos projets de voyage")}
            </span>
            <span className="vetting-title-line">
              {renderSplitText("(sans aucun stress)")}
            </span>
          </h2>

          <p className="vetting-desc">
            {"De la première consultation au suivi sur place, notre équipe d'experts prend tout en charge pour garantir votre succès académique, touristique ou spirituel."}
          </p>
        </div>

        {/* Steps Block (Stacked vertically under the header) */}
        <div className="vetting-steps-vertical-wrapper" style={{ perspective: "1500px", transformStyle: "preserve-3d" }}>
          <span className="vetting-eyebrow-accent">VOTRE ACCOMPAGNEMENT EN 7 ÉTAPES</span>
          
          <div className="vetting-cards-list-vertical" style={{ transformStyle: "preserve-3d" }}>
            {steps.map((step) => (
              <div className="vetting-card-wrapper" key={step.num} style={{ transformStyle: "preserve-3d" }}>
                {/* Glow layer behind card */}
                <div className="vetting-glow"></div>
                
                <div className="vetting-card" style={{ transformStyle: "preserve-3d" }}>
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
