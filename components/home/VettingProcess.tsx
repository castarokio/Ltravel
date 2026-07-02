"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, shouldReduceMotion } from "@/components/home/animation";
import { Compass, Map, FileText, Send, FileCheck, Home, Plane } from "lucide-react";

const steps = [
  {
    num: "1",
    title: "Consultation Initiale",
    desc: "Nous analysons votre profil, vos ambitions académiques ou vos envies d'évasion pour dresser un bilan sur-mesure.",
    Icon: Compass
  },
  {
    num: "2",
    title: "Orientation Stratégique",
    desc: "Sélection rigoureuse des universités partenaires, des programmes d'études ou des séjours touristiques adaptés.",
    Icon: Map
  },
  {
    num: "3",
    title: "Constitution du Dossier",
    desc: "Aide à la rédaction des lettres de motivation, formulaires administratifs et rassemblement des pièces clés.",
    Icon: FileText
  },
  {
    num: "4",
    title: "Soumission & Admission",
    desc: "Dépôt officiel des candidatures auprès des établissements ou traitement des réservations hôtelières et vols.",
    Icon: Send
  },
  {
    num: "5",
    title: "Préparation Consulaire",
    desc: "Simulations d'entretiens individuels et vérification minutieuse des justificatifs financiers requis pour l'ambassade.",
    Icon: FileCheck
  },
  {
    num: "6",
    title: "Logistique & Hébergement",
    desc: "Recherche de logements étudiants sécurisés, assurances voyage et accueil personnalisé à l'arrivée.",
    Icon: Home
  },
  {
    num: "7",
    title: "Départ & Assistance 24/7",
    desc: "Séance d'orientation prédépart et suivi continu une fois sur place pour garantir votre intégration et sérénité.",
    Icon: Plane
  }
];

export function VettingProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Helper to split text into words wrapped in spans for premium skew/slide animations
  const renderSplitText = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="vetting-word-wrap">
        <span className="vetting-word-inner">{word}</span>
      </span>
    ));
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!sectionRef.current || !track || shouldReduceMotion()) return;

    const context = gsap.context(() => {
      const scrollWidth = track.scrollWidth;
      const windowWidth = window.innerWidth;
      const xTranslation = -(scrollWidth - windowWidth);

      // 1. Pinned Horizontal Scroll Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollWidth - windowWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true
        }
      });

      tl.to(track, {
        x: xTranslation,
        ease: "none"
      });

      // 2. Word-by-Word Title Reveal with Rotation & Skew
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
            trigger: ".vetting-title-slide",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // 3. Title Description Reveal
      gsap.fromTo(
        ".vetting-desc-horizontal",
        { opacity: 0, y: 25 },
        {
          opacity: 0.8,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vetting-title-slide",
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );

      // 4. Scroll Progress bar filling connected to horizontal track scroll length
      gsap.to(".vetting-progress-fill-horizontal", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollWidth - windowWidth}`,
          scrub: 1
        }
      });

      gsap.to(".vetting-progress-dot-horizontal", {
        top: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollWidth - windowWidth}`,
          scrub: 1
        }
      });

      // 5. 3D Parallax Tilt effect & Cursor-tracking glow spotlights
      const cards = gsap.utils.toArray<HTMLElement>(".vetting-card-wrapper-horizontal");
      cards.forEach((wrapper) => {
        const card = wrapper.querySelector(".vetting-card-horizontal") as HTMLElement;
        const glow = wrapper.querySelector(".vetting-glow-horizontal") as HTMLElement;
        const num = wrapper.querySelector(".vetting-card-number-horizontal") as HTMLElement;
        const icon = wrapper.querySelector(".vetting-card-icon") as HTMLElement;
        const desc = wrapper.querySelector(".vetting-card-desc-horizontal") as HTMLElement;

        if (!card) return;

        const onPointerMove = (e: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const xc = x / rect.width - 0.5;
          const yc = y / rect.height - 0.5;

          const rotateX = -yc * 16;
          const rotateY = xc * 16;

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
            scale: 1.045,
            z: 20,
            borderColor: "rgba(0, 82, 204, 0.35)",
            boxShadow: "0 28px 56px rgba(0, 82, 204, 0.08)",
            duration: 0.3,
            ease: "power2.out"
          });

          if (glow) {
            gsap.to(glow, {
              opacity: 1,
              scale: 1.15,
              duration: 0.3,
              ease: "power2.out"
            });
          }

          if (num) {
            gsap.to(num, {
              color: "var(--primary)",
              scale: 1.08,
              duration: 0.3,
              ease: "power2.out"
            });
          }

          if (icon) {
            gsap.to(icon, {
              scale: 1.1,
              rotate: 8,
              color: "var(--primary)",
              duration: 0.3,
              ease: "power2.out"
            });
          }

          if (desc) {
            gsap.to(desc, {
              opacity: 0.9,
              duration: 0.3
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

          if (num) {
            gsap.to(num, {
              color: "#dcdcdc",
              scale: 1,
              duration: 0.3,
              ease: "power3.out"
            });
          }

          if (icon) {
            gsap.to(icon, {
              scale: 1,
              rotate: 0,
              color: "var(--muted)",
              duration: 0.3,
              ease: "power3.out"
            });
          }

          if (desc) {
            gsap.to(desc, {
              opacity: 0.7,
              duration: 0.3
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
    <section className="vetting-section-horizontal" id="vetting" ref={sectionRef}>
      <div className="vetting-sticky-wrapper">
        
        {/* Horizontal scrollable track */}
        <div className="vetting-track" ref={trackRef}>
          
          {/* Slide 1: Massive Title Block */}
          <div className="vetting-slide vetting-title-slide">
            <div className="vetting-title-content">
              <span className="section-label">Notre Processus</span>
              
              <h2 className="vetting-massive-title">
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

              <p className="vetting-desc-horizontal">
                {"De la première consultation au suivi sur place, notre équipe d'experts prend tout en charge. Faites défiler pour découvrir notre accompagnement en 7 étapes."}
              </p>
            </div>

            <div className="vetting-decor-blob-horizontal"></div>
          </div>

          {/* Slide 2: The 7 steps cards inline */}
          <div className="vetting-cards-wrapper-horizontal" style={{ perspective: "1500px", transformStyle: "preserve-3d" }}>
            <span className="vetting-eyebrow-accent-horizontal">NOTRE ACCOMPAGNEMENT EN 7 ÉTAPES</span>
            
            {steps.map((step) => {
              const IconComponent = step.Icon;
              return (
                <div className="vetting-card-wrapper-horizontal" key={step.num} style={{ transformStyle: "preserve-3d" }}>
                  {/* Glow layer behind card */}
                  <div className="vetting-glow-horizontal"></div>
                  
                  <div className="vetting-card-horizontal" style={{ transformStyle: "preserve-3d" }}>
                    <div className="vetting-card-header-horizontal">
                      <div className="vetting-card-icon-wrap" style={{ transformStyle: "preserve-3d" }}>
                        <IconComponent className="vetting-card-icon" size={32} strokeWidth={1.7} style={{ color: "var(--muted)", transition: "color 0.28s ease" }} />
                      </div>
                      <span className="vetting-card-number-horizontal">{"STEP - " + step.num.padStart(2, "0")}</span>
                    </div>
                    
                    <h3 className="vetting-card-title-horizontal">{step.title}</h3>
                    
                    <div className="vetting-card-desc-horizontal">
                      <p>{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Vertical Scroll Progress Bar (Far Right, static) */}
        <div className="vetting-progress-container-horizontal" aria-hidden="true">
          <div className="vetting-progress-fill-horizontal"></div>
          <div className="vetting-progress-dot-horizontal"></div>
        </div>

      </div>
    </section>
  );
}
