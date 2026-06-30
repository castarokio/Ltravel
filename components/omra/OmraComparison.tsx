"use client";

import { Check, Hotel } from "lucide-react";
import type { OmraPackage } from "@/lib/data/travel-packages";

interface OmraComparisonProps {
  packages: OmraPackage[];
  onSelectFormula: (id: string) => void;
}

export function OmraComparison({ packages, onSelectFormula }: OmraComparisonProps) {
  return (
    <section className="omra-comparison">
      <div className="container">
        <div className="omra-comparison-head">
          <span className="section-label">Formules 2026</span>
          <h2>Comparez nos offres de pèlerinage</h2>
        </div>

        <div className="omra-grid">
          {packages.map((pkg) => {
            const isPrestige = pkg.id === "prestige";
            return (
              <article className={`omra-card ${isPrestige ? "featured" : ""}`} key={pkg.id}>
                {isPrestige && <span className="omra-popular-badge">Recommandé VIP</span>}
                <h3>{pkg.name}</h3>
                <span className="omra-card-duration">{pkg.duration}</span>

                <div className="omra-card-price-box">
                  <span className="omra-price-title">Budget indicatif</span>
                  <span className="omra-price-amount">{pkg.priceRange}</span>
                </div>

                <div className="omra-hotel-info">
                  <div className="omra-hotel-line">
                    <Hotel size={16} />
                    <div>
                      <strong>Makkah :</strong> {pkg.hotelMakkah}
                    </div>
                  </div>
                  <div className="omra-hotel-line omra-hotel-line--gap">
                    <Hotel size={16} />
                    <div>
                      <strong>Madinah :</strong> {pkg.hotelMadinah}
                    </div>
                  </div>
                </div>

                <ul className="omra-features-list">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={14} className="omra-features-check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`button omra-card-btn ${isPrestige ? "omra-card-btn--featured" : "button-ghost"}`}
                  onClick={() => onSelectFormula(pkg.id)}
                  type="button"
                >
                  Sélectionner cette formule
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
