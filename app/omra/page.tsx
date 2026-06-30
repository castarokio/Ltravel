import type { Metadata } from "next";
import OmraPageClient from "@/components/omra/OmraPageClient";

export const metadata: Metadata = {
  title: "Omra & Pèlerinage | Land Travel",
  description: "Formules Omra 2026 : visa, vols, hôtels proches du Haram, transferts VIP et accompagnement spirituel. Comparez nos offres Confort, Prestige et Sur Mesure."
};

export default function OmraPage() {
  return <OmraPageClient />;
}
