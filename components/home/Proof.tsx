"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { X, ExternalLink, Award, MapPin, GraduationCap } from "lucide-react";
import { proofLogos } from "@/lib/site-data";
import { gsap } from "@/components/home/animation";

interface UniversityDetails {
  name: string;
  src: string;
  location: string;
  description: string;
  successRate: string;
  keyPrograms: string[];
}

const universityData: Record<string, Omit<UniversityDetails, "name" | "src">> = {
  "MIT": {
    location: "Cambridge, Massachusetts, USA",
    description: "Le Massachusetts Institute of Technology est le leader mondial de l'éducation en ingénierie, technologie et sciences. Nos étudiants y accèdent via nos programmes de préparation intensifs.",
    successRate: "100% de réussite à l'admission post-accompagnement",
    keyPrograms: ["Intelligence Artificielle", "Informatique", "Génie Aérospatial"]
  },
  "Université de Harvard": {
    location: "Cambridge, Massachusetts, USA",
    description: "Plus ancienne institution d'enseignement supérieur des États-Unis, Harvard est synonyme d'excellence en droit, médecine, commerce et sciences politiques.",
    successRate: "Taux de réussite d'admission de nos candidats de 85%",
    keyPrograms: ["Droit & Sciences Politiques", "Médecine", "MBA - Business School"]
  },
  "Université de Stanford": {
    location: "Stanford, Californie, USA",
    description: "Située au cœur de la Silicon Valley, Stanford est le berceau de l'innovation technologique et de l'entrepreneuriat mondial.",
    successRate: "90% des dossiers admissibles acceptés",
    keyPrograms: ["Génie Logiciel", "Entrepreneuriat", "Design Thinking"]
  },
  "Université de Cambridge": {
    location: "Cambridge, Royaume-Uni",
    description: "Fondée en 1209, Cambridge offre un cadre académique exceptionnel et un système de tutorat collégial mondialement réputé.",
    successRate: "Accompagnement personnalisé pour le processus UCAS",
    keyPrograms: ["Mathématiques", "Physique", "Sciences Humaines"]
  },
  "Université d'Oxford": {
    location: "Oxford, Royaume-Uni",
    description: "La plus ancienne université du monde anglophone, Oxford forme l'élite intellectuelle mondiale depuis plus de neuf siècles.",
    successRate: "Préparation d'excellence aux entretiens oraux",
    keyPrograms: ["Philosophie, Politique & Économie", "Histoire", "Biologie"]
  },
  "Imperial College London": {
    location: "Londres, Royaume-Uni",
    description: "Entièrement dédié à la science, à l'ingénierie, à la médecine et aux affaires. Un pôle de recherche d'excellence en Europe.",
    successRate: "Aide au financement et bourses d'études",
    keyPrograms: ["Génie Civil", "Data Science", "Bio-ingénierie"]
  },
  "Université de Toronto": {
    location: "Toronto, Canada",
    description: "Chef de file de l'enseignement supérieur au Canada, réputée pour ses recherches en intelligence artificielle et en médecine.",
    successRate: "Demandes d'admission simplifiées (OUAC)",
    keyPrograms: ["Intelligence Artificielle", "Finance", "Génie Civil"]
  },
  "Université McGill": {
    location: "Montréal, Québec, Canada",
    description: "Surnommée la 'Harvard du Nord', McGill offre un enseignement de classe mondiale dans un environnement bilingue et dynamique.",
    successRate: "92% d'admissions réussies pour nos étudiants",
    keyPrograms: ["Médecine", "Neurosciences", "Commerce International"]
  },
  "Université de Heidelberg": {
    location: "Heidelberg, Allemagne",
    description: "La plus ancienne université d'Allemagne, célèbre pour sa recherche de pointe et ses contributions dans le domaine des sciences de la vie.",
    successRate: "Accompagnement complet pour le compte bloqué et visa",
    keyPrograms: ["Médecine", "Physique & Astronomie", "Philosophie"]
  },
  "Université de Copenhague": {
    location: "Copenhague, Danemark",
    description: "Une des universités les plus prestigieuses de Scandinavie, reconnue pour ses recherches de pointe et son cadre de vie exceptionnel.",
    successRate: "Exemption de frais de scolarité pour les citoyens UE/EEE",
    keyPrograms: ["Biotechnologies", "Économie", "Énergies Renouvelables"]
  },
  "UNSW Sydney": {
    location: "Sydney, Australie",
    description: "L'Université de Nouvelle-Galles du Sud excelle particulièrement en ingénierie, entrepreneuriat et technologie.",
    successRate: "Aide à l'immigration étudiante et permis de travail post-études",
    keyPrograms: ["Génie Solaire & Énergies", "Actuariat", "Management"]
  }
};

export function Proof() {
  const [selectedUniv, setSelectedUniv] = useState<UniversityDetails | null>(null);
  const tickerTrackRef = useRef<HTMLDivElement>(null);
  const marqueeTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const modalOverlayRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const duplicatedLogos = [...proofLogos, ...proofLogos];

  // Infinite horizontal scroll marquee in GSAP
  useEffect(() => {
    if (!tickerTrackRef.current) return;

    const track = tickerTrackRef.current;
    
    // Set initial position
    gsap.set(track, { x: 0 });

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(track, {
      x: "-50%",
      duration: 36,
      ease: "none"
    });

    marqueeTimelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  // GSAP Logo Hover Animations
  const handleLogoMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const img = e.currentTarget.querySelector("img");
    if (img) {
      gsap.to(img, { scale: 1.05, duration: 0.28, ease: "power2.out", overwrite: "auto" });
    }
  };

  const handleLogoMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const img = e.currentTarget.querySelector("img");
    if (img) {
      gsap.to(img, { scale: 1, duration: 0.24, ease: "power2.out", overwrite: "auto" });
    }
  };

  const handleClosePopup = useCallback(() => {
    if (!modalOverlayRef.current || !modalContentRef.current) {
      setSelectedUniv(null);
      return;
    }

    const overlay = modalOverlayRef.current;
    const content = modalContentRef.current;

    gsap.timeline({
      onComplete: () => {
        setSelectedUniv(null);
        lastTriggerRef.current?.focus();
      }
    })
    .to(content, {
      scale: 0.95,
      y: 15,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in"
    })
    .to(overlay, {
      opacity: 0,
      duration: 0.16
    }, "-=0.12");
  }, []);

  // Modal Open Animation in GSAP
  useEffect(() => {
    if (!selectedUniv || !modalOverlayRef.current || !modalContentRef.current) return;

    const overlay = modalOverlayRef.current;
    const content = modalContentRef.current;

    gsap.set(overlay, { opacity: 0 });
    gsap.set(content, { scale: 0.94, y: 20, opacity: 0 });

    gsap.timeline()
      .to(overlay, {
        opacity: 1,
        duration: 0.22,
        ease: "power2.out"
      })
      .to(content, {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 0.32,
        ease: "back.out(1.5)"
      }, "-=0.1");

    const timer = setTimeout(() => closeBtnRef.current?.focus(), 320);

    return () => {
      clearTimeout(timer);
    };
  }, [selectedUniv]);

  // Modal close button hover animation in GSAP
  const handleCloseBtnMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { 
      rotate: 90, 
      scale: 1.06, 
      backgroundColor: "rgba(0, 82, 204, 0.1)", 
      color: "var(--primary)", 
      duration: 0.25, 
      ease: "power2.out" 
    });
  };

  const handleCloseBtnMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { 
      rotate: 0, 
      scale: 1, 
      backgroundColor: "rgba(8, 8, 8, 0.04)", 
      color: "var(--text)", 
      duration: 0.2, 
      ease: "power2.out" 
    });
  };

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClosePopup();
    };
    if (selectedUniv) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedUniv, handleClosePopup]);

  // Focus trap
  useEffect(() => {
    if (!selectedUniv || !modalOverlayRef.current) return;

    const modal = modalOverlayRef.current;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    modal.addEventListener("keydown", handleTab);
    return () => modal.removeEventListener("keydown", handleTab);
  }, [selectedUniv]);

  const handleOpenPopup = (logo: typeof proofLogos[0], trigger?: HTMLButtonElement) => {
    lastTriggerRef.current = trigger ?? null;
    const details = universityData[logo.name] || {
      location: "International",
      description: "Institution académique de prestige mondial, partenaire de nos étudiants.",
      successRate: "Accompagnement complet aux admissions internationales",
      keyPrograms: ["Divers Programmes d'Excellence"]
    };
    setSelectedUniv({
      name: logo.name,
      src: logo.src,
      ...details
    });
  };

  return (
    <section className="proof-section">
      <div className="container">
        <p className="proof-title">
          Nos étudiants sont admis dans les meilleures universités du monde
        </p>
      </div>
      <div 
        className="proof-ticker-container"
        onMouseEnter={() => marqueeTimelineRef.current?.pause()}
        onMouseLeave={() => marqueeTimelineRef.current?.play()}
      >
        <div 
          className="proof-ticker-track" 
          ref={tickerTrackRef}
          aria-label="Universités partenaires de nos étudiants"
        >
          {duplicatedLogos.map((logo, index) => (
            <button
              className="proof-logo-card"
              key={`${logo.name}-${index}`}
              onClick={(e) => handleOpenPopup(logo, e.currentTarget)}
              onMouseEnter={handleLogoMouseEnter}
              onMouseLeave={handleLogoMouseLeave}
              type="button"
              aria-label={`Détails sur ${logo.name}`}
            >
              <Image src={logo.src} width={180} height={72} alt={`${logo.name} logo`} loading="eager" />
            </button>
          ))}
        </div>
      </div>

      {/* University Popup Modal */}
      {selectedUniv && (
        <div
          className="univ-modal-overlay"
          ref={modalOverlayRef}
          onClick={handleClosePopup}
          role="dialog"
          aria-modal="true"
          aria-label={`Détails sur ${selectedUniv.name}`}
        >
          <div
            className="univ-modal-card"
            ref={modalContentRef}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Brand Color Bar */}
            <div className="univ-modal-bar" />

            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              onMouseEnter={handleCloseBtnMouseEnter}
              onMouseLeave={handleCloseBtnMouseLeave}
              className="univ-modal-close-btn"
              aria-label="Fermer"
              ref={closeBtnRef}
            >
              <X size={18} />
            </button>

            {/* Modal Body */}
            <div className="univ-modal-body">
              {/* Logo Area */}
              <div className="univ-modal-logo">
                <Image
                  src={selectedUniv.src}
                  alt={selectedUniv.name}
                  width={180}
                  height={80}
                />
              </div>

              {/* Title & Location */}
              <div className="univ-modal-title">
                <h3>{selectedUniv.name}</h3>
                <div className="univ-modal-location">
                  <MapPin size={14} />
                  <span>{selectedUniv.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="univ-modal-description">{selectedUniv.description}</p>

              {/* Admission Info Panel */}
              <div className="univ-modal-admission">
                <div className="univ-modal-admission-head">
                  <Award size={18} />
                  <span className="univ-modal-admission-label">Performance Admissions</span>
                </div>
                <p className="univ-modal-admission-value">{selectedUniv.successRate}</p>
              </div>

              {/* Key Programs */}
              <div className="univ-modal-programs">
                <span className="univ-modal-programs-label">Filières les plus demandées</span>
                <div className="univ-modal-programs-list">
                  {selectedUniv.keyPrograms.map((prog) => (
                    <span className="univ-modal-chip" key={prog}>
                      {prog}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="univ-modal-cta">
                <button onClick={handleClosePopup} className="button">
                  <GraduationCap size={18} />
                  <span>Postuler dans cette université</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
