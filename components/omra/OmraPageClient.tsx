"use client";

import { useState } from "react";
import { MotionPageShell } from "@/components/MotionPageShell";
import { asset, omraPackages } from "@/lib/site-data";
import { OmraHero } from "./OmraHero";
import { OmraComparison } from "./OmraComparison";
import { ZiyaratSection } from "./ZiyaratSection";
import { OmraInquiryForm } from "./OmraInquiryForm";

export default function OmraPageClient() {
  const [selectedFormula, setSelectedFormula] = useState(omraPackages[0].id);

  const ziyaratSites = [
    {
      name: "Mont Uhud",
      image: asset("omra-ziyarat-uhud.webp"),
      description: "Le site historique de la bataille de Uhud, lieu de recueillement et d'histoire spirituelle près de Madinah."
    },
    {
      name: "Grotte de Hira",
      image: asset("omra-ziyarat-hira.webp"),
      description: "Située sur le mont Jabal al-Noor à Makkah, le lieu de la première révélation coranique à notre Prophète (SWS)."
    },
    {
      name: "Mosquée de Quba",
      image: asset("omra-quba-mosque.webp"),
      description: "La toute première mosquée de l'Islam construite par le Prophète (SWS) à son arrivée à Madinah."
    },
    {
      name: "Masjid an-Nabawi",
      image: asset("omra-masjid-nabawi.webp"),
      description: "La mosquée sacrée du Prophète (SWS) à Madinah, abritant sa sainte tombe et le Rawdah béni."
    }
  ];

  const handleSelectFormula = (formulaId: string) => {
    setSelectedFormula(formulaId);
    const formSection = document.getElementById("omra-inquiry-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MotionPageShell className="service-page-shell omra-page-shell omra-emerald">
      {/* Spiritual Hero */}
      <OmraHero />

      {/* Package Comparison Grid */}
      <OmraComparison packages={omraPackages} onSelectFormula={handleSelectFormula} />

      {/* Ziyarat Section */}
      <ZiyaratSection sites={ziyaratSites} />

      {/* Inquiry Form */}
      <OmraInquiryForm
        packages={omraPackages}
        selectedFormula={selectedFormula}
        setSelectedFormula={setSelectedFormula}
      />
    </MotionPageShell>
  );
}
