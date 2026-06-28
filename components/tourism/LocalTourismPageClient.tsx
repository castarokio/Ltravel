"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, Award, Check, Compass, Phone, Star } from "lucide-react";
import { MotionPageShell } from "@/components/MotionPageShell";
import { asset, localTours } from "@/lib/site-data";
import { InquiryForm } from "./InquiryForm";

export default function LocalTourismPageClient() {
  const [selectedTour, setSelectedTour] = useState(localTours[0].id);

  const handleSelectTour = (tourId: string) => {
    setSelectedTour(tourId);
    const formSection = document.getElementById("inquiry-form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const formOptions = localTours.map((t) => ({ id: t.id, title: t.title }));

  return (
    <MotionPageShell className="service-page-shell local-tourism-page-shell">
      {/* Hero Header */}
      <section className="service-hero" style={{ backgroundImage: `url(${asset("local-desert-sunset.webp")})` }}>
        <div className="container">
          <Link className="back-link" href="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--yellow)", fontSize: "12px", fontWeight: "700", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            <ArrowLeft size={14} /> Retour à l&apos;accueil
          </Link>
          <p className="section-label" style={{ color: "var(--yellow)" }}>Régional & Authentique</p>
          <h1>Tourisme Local & Circuits d&apos;Aventure</h1>
          <p style={{ maxWidth: "600px", margin: "0 auto" }}>
            Partez à la rencontre des paysages grandioses de notre terroir. Désert saharien, cités impériales chargées d&apos;histoire et randonnées sauvages vous attendent.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="container" style={{ marginTop: "64px" }}>
        <div className="packages-grid">
          {localTours.map((tour) => (
            <article className="package-card" key={tour.id}>
              <div className="package-image-wrap">
                <Image src={tour.image} alt={tour.title} width={560} height={340} />
                <span className="package-badge-overlay" style={{ background: "var(--orange)", color: "#fff" }}>Local</span>
                <span className="package-duration-overlay">{tour.duration}</span>
              </div>
              <div className="package-content">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <span style={{ fontSize: "11px", color: "var(--orange)", fontWeight: "800", textTransform: "uppercase" }}>Circuit Découverte</span>
                  <div style={{ display: "flex", gap: "2px", color: "var(--yellow)" }}><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                </div>
                <h3>{tour.title}</h3>
                <p className="package-description">{tour.description}</p>
                
                <h4 style={{ fontSize: "11px", textTransform: "uppercase", color: "var(--text)", marginBottom: "12px", fontWeight: "700", letterSpacing: "0.04em" }}>Prestations Incluses :</h4>
                <ul className="package-features">
                  {tour.details.map((detail, idx) => (
                    <li key={idx}><Check size={14} /> <span>{detail}</span></li>
                  ))}
                </ul>

                <div className="package-footer">
                  <div className="package-price-wrap">
                    <span className="package-price-label">Tarif indicatif</span>
                    <span className="package-price-value">{tour.price}</span>
                  </div>
                  <button className="button button-small" onClick={() => handleSelectTour(tour.id)}>
                    Réserver / Se renseigner
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Inquiry Form Section */}
      <section className="inquiry-section" id="inquiry-form-section">
        <div className="container">
          <div className="inquiry-grid">
            {/* Left Col - Benefits */}
            <div className="inquiry-info">
              <span className="section-label">Devis Gratuit</span>
              <h2>Planifiez votre expédition</h2>
              <p>
                Remplissez ce formulaire et notre conseiller local vous recontactera sous 24h ouvrées pour finaliser les détails de votre voyage sur mesure.
              </p>

              <div className="inquiry-benefits">
                <div className="inquiry-benefit-item">
                  <div className="inquiry-benefit-icon"><Compass size={18} /></div>
                  <div className="inquiry-benefit-text">
                    <h4>Itinéraires Flexibles</h4>
                    <p>Modifiez le rythme, l&apos;hébergement et les activités selon vos envies.</p>
                  </div>
                </div>

                <div className="inquiry-benefit-item">
                  <div className="inquiry-benefit-icon"><Award size={18} /></div>
                  <div className="inquiry-benefit-text">
                    <h4>Accompagnement Expert</h4>
                    <p>Des chauffeurs et guides professionnels agréés pour votre confort et sécurité.</p>
                  </div>
                </div>

                <div className="inquiry-benefit-item">
                  <div className="inquiry-benefit-icon"><Phone size={18} /></div>
                  <div className="inquiry-benefit-text">
                    <h4>Assistance Locale H24</h4>
                    <p>Une ligne téléphonique directe disponible pendant toute la durée de votre séjour.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col - Shared Form */}
            <InquiryForm
              options={formOptions}
              selectedOption={selectedTour}
              setSelectedOption={setSelectedTour}
              optionLabel="Circuit Sélectionné"
              notesLabel="Demandes spéciales / Remarques"
              notesPlaceholder="Ex: lit bébé nécessaire, allergies alimentaires, vol de nuit..."
              submitBtnText="Envoyer ma demande"
              successMessage={(formData, activeTitle) => (
                <p style={{ marginBottom: "20px" }}>
                  Merci <strong>{formData.name}</strong>. Votre demande de renseignements pour le circuit <strong>&quot;{activeTitle}&quot;</strong> a été enregistrée.
                  <span style={{ display: "block", background: "#f8fafc", border: "1px dashed var(--border)", borderRadius: "12px", padding: "16px", marginTop: "16px", fontSize: "12px", textAlign: "left", color: "var(--text)" }}>
                    <span style={{ display: "block", marginBottom: "6px" }}><strong>Voyageurs :</strong> {formData.travelers === "1" ? "1 Voyageur" : formData.travelers === "2" ? "2 Voyageurs" : formData.travelers}</span>
                    {formData.date && <span style={{ display: "block", marginBottom: "6px" }}><strong>Départ estimé :</strong> {formData.date}</span>}
                    <span style={{ display: "block" }}><strong>Statut :</strong> Un conseiller vous contactera par email ({formData.email}) ou par téléphone ({formData.phone}) sous 24h.</span>
                  </span>
                </p>
              )}
            />
          </div>
        </div>
      </section>
    </MotionPageShell>
  );
}
