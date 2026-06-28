"use client";

import Link from "next/link";
import Image from "next/image";
import { Plane, ChevronRight } from "lucide-react";
import { asset } from "@/lib/site-data";

export function OmraSection() {
  return (
    <section className="omra-section section-space" id="omra-services" style={{ background: "rgba(4, 120, 87, 0.02)" }}>
      <div className="container placeholder-grid placeholder-grid-compact">
        <div className="placeholder-intro">
          <p className="section-label" style={{ color: "#047857" }}>Omra Hajj</p>
          <h2>Voyages Spirituels Omra</h2>
          <p style={{ color: "var(--muted)", fontSize: "14px", marginTop: "8px", maxWidth: "480px" }}>
            Accomplissez votre pèlerinage en toute sérénité grâce à nos formules encadrées, de l&apos;obtention du visa au retour à la maison.
          </p>
        </div>
        <Link className="placeholder-card media-card wide scroll-trigger-item" href="/omra" style={{ minHeight: "380px" }}>
          <Image src={asset("omra-masjid-nabawi-sunset.webp")} width={760} height={430} alt="Masjid Nabawi Madinah - Omra" />
          <span className="home-pkg-badge" style={{ background: "#047857" }}>Formules 2026</span>
          <span className="placeholder-icon" style={{ background: "#047857" }}>
            <Plane size={28} />
          </span>
          <div className="media-card-details" style={{ position: "absolute", bottom: "28px", left: "28px", right: "28px", zIndex: 3, color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <h3 style={{ margin: "0 0 6px", fontSize: "24px", fontWeight: "700" }}>Formules Omra sur Mesure & VIP</h3>
              <p style={{ margin: 0, fontSize: "13px", opacity: 0.9, maxWidth: "440px" }}>
                Hôtels à proximité du Haram à Makkah & Madinah, vols directs réguliers, guides religieux et transferts VIP privatifs.
              </p>
            </div>
            <span className="button button-small" style={{ background: "#047857", color: "#fff", border: "none", boxShadow: "0 6px 15px rgba(4, 120, 87, 0.3)" }}>
              Découvrir nos packages <ChevronRight size={14} />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
