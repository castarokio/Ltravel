"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { asset } from "@/lib/site-data";

export function OmraHero() {
  return (
    <section className="service-hero omra-hero" style={{ backgroundImage: `url(${asset("omra-masjid-nabawi-sunset.webp")})` }}>
      <div className="container">
        <Link className="back-link" href="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--yellow)", fontSize: "12px", fontWeight: "700", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          <ArrowLeft size={14} /> Retour à l&apos;accueil
        </Link>
        <p className="section-label" style={{ color: "var(--yellow)" }}>Pèlerinages Spirituels</p>
        <h1>Formules Omra Complètes & Encadrées</h1>
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>
          Vivez le voyage de votre vie avec sérénité spirituelle. Nos équipes s&apos;occupent de toute la logistique, des démarches de visa aux cours de préparation et visites guidées.
        </p>
      </div>
    </section>
  );
}
