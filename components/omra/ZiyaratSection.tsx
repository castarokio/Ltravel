"use client";

import Image from "next/image";

interface ZiyaratSite {
  name: string;
  image: string;
  description: string;
}

interface ZiyaratSectionProps {
  sites: ZiyaratSite[];
}

export function ZiyaratSection({ sites }: ZiyaratSectionProps) {
  return (
    <section className="ziyarat-section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span className="section-label" style={{ color: "#047857" }}>Excursions religieuses</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: "800", margin: "0" }}>
            Visites Historiques (Ziyarat) Incluses
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "14px", marginTop: "8px", maxWidth: "560px", margin: "8px auto 0" }}>
            Revivez l&apos;histoire de la révélation lors de nos sorties encadrées par des guides théologiens bilingues.
          </p>
        </div>

        <div className="ziyarat-grid">
          {sites.map((site, idx) => (
            <div className="ziyarat-card" key={idx}>
              <Image src={site.image} alt={site.name} width={280} height={200} />
              <div className="ziyarat-overlay">
                <h4>{site.name}</h4>
                <p>{site.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
