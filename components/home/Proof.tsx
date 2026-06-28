"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
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
  const modalOverlayRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const duplicatedLogos = [...proofLogos, ...proofLogos];

  const handleOpenPopup = (logo: typeof proofLogos[0]) => {
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

  const handleClosePopup = () => {
    if (!modalOverlayRef.current || !modalContentRef.current) {
      setSelectedUniv(null);
      return;
    }

    gsap.timeline({
      onComplete: () => setSelectedUniv(null)
    })
    .to(modalContentRef.current, {
      scale: 0.95,
      y: 15,
      opacity: 0,
      duration: 0.22,
      ease: "power2.in"
    })
    .to(modalOverlayRef.current, {
      opacity: 0,
      duration: 0.18
    }, "-=0.15");
  };

  useEffect(() => {
    if (selectedUniv && modalOverlayRef.current && modalContentRef.current) {
      // Reset before animation
      gsap.set(modalOverlayRef.current, { opacity: 0 });
      gsap.set(modalContentRef.current, { scale: 0.94, y: 20, opacity: 0 });

      gsap.timeline()
        .to(modalOverlayRef.current, {
          opacity: 1,
          duration: 0.24,
          ease: "power2.out"
        })
        .to(modalContentRef.current, {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.36,
          ease: "back.out(1.6)"
        }, "-=0.12");
    }
  }, [selectedUniv]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClosePopup();
    };
    if (selectedUniv) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedUniv]);

  return (
    <section className="proof-section">
      <div className="container">
        <p className="proof-title">
          Nos étudiants sont admis dans les meilleures universités du monde
        </p>
      </div>
      <div className="proof-ticker-container">
        <div className="proof-ticker-track">
          {duplicatedLogos.map((logo, index) => (
            <button
              className="proof-logo-card"
              key={`${logo.name}-${index}`}
              onClick={() => handleOpenPopup(logo)}
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
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(8, 8, 8, 0.45)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
        >
          <div 
            className="univ-modal-card" 
            ref={modalContentRef} 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              width: "100%",
              maxWidth: "520px",
              overflow: "hidden",
              boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.3)",
              border: "1px solid rgba(0, 82, 204, 0.08)",
              position: "relative"
            }}
          >
            {/* Header / Brand Color Bar */}
            <div style={{ height: "6px", background: "linear-gradient(90deg, var(--primary) 0%, var(--pink) 100%)" }} />

            {/* Close Button */}
            <button 
              onClick={handleClosePopup}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                border: "none",
                background: "rgba(8, 8, 8, 0.04)",
                color: "var(--text)",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s, transform 0.2s"
              }}
              className="univ-modal-close-btn"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>

            {/* Modal Body */}
            <div style={{ padding: "40px 32px 32px" }}>
              {/* Logo Area */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "28px", height: "80px", alignItems: "center" }}>
                <Image 
                  src={selectedUniv.src} 
                  alt={selectedUniv.name} 
                  width={180} 
                  height={80} 
                  style={{ objectFit: "contain", maxHeight: "100%", width: "auto" }} 
                />
              </div>

              {/* Title & Location */}
              <div style={{ textAlign: "center", marginBottom: "24px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: "800", color: "var(--text)", margin: "0 0 8px" }}>
                  {selectedUniv.name}
                </h3>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--muted)", fontSize: "13.5px", fontWeight: "500" }}>
                  <MapPin size={14} style={{ color: "var(--primary)" }} />
                  <span>{selectedUniv.location}</span>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: "#333", fontSize: "14.5px", lineHeight: "1.6", margin: "0 0 24px", textAlign: "center" }}>
                {selectedUniv.description}
              </p>

              {/* Admission Info Panel */}
              <div style={{ background: "rgba(0, 82, 204, 0.03)", border: "1px solid rgba(0, 82, 204, 0.08)", borderRadius: "14px", padding: "16px 20px", marginBottom: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <Award size={18} style={{ color: "var(--primary)" }} />
                  <span style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "var(--primary)", letterSpacing: "0.04em" }}>
                    Performance Admissions
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "14px", fontWeight: "600", color: "var(--text)" }}>
                  {selectedUniv.successRate}
                </p>
              </div>

              {/* Key Programs */}
              <div style={{ marginBottom: "32px" }}>
                <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: "12px", letterSpacing: "0.06em", textAlign: "center" }}>
                  Filières les plus demandées
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
                  {selectedUniv.keyPrograms.map((prog, idx) => (
                    <span 
                      key={idx} 
                      style={{ 
                        fontSize: "12px", 
                        background: "#f3f4f6", 
                        color: "var(--text)", 
                        padding: "6px 12px", 
                        borderRadius: "20px", 
                        fontWeight: "500" 
                      }}
                    >
                      {prog}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button 
                  onClick={handleClosePopup}
                  className="button"
                  style={{ 
                    width: "100%", 
                    display: "inline-flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    gap: "8px" 
                  }}
                >
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
