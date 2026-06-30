import type { Metadata } from "next";
import { ServicesTimeline } from "@/components/services/ServicesTimeline";

export const metadata: Metadata = {
  title: "Services | Land Travel",
  description: "Orientation académique, admission universitaire, procédure de visa, hébergement et accompagnement : suivez votre parcours de A à Z avec Land Travel."
};

export default function ServicesPage() {
  return <ServicesTimeline />;
}
