import Link from "next/link";
import { MotionPageShell } from "@/components/MotionPageShell";

export default function StudyAbroadPage() {
  return (
    <MotionPageShell className="service-page-shell">
      <p className="section-label">Study Abroad</p>
      <h1>{"Start your journey in study abroad"}</h1>
      <p>
        {"Cette page servira bientôt de parcours complet pour les projets d'études à l'étranger : profil, destinations, programmes, admission et visa."}
      </p>
      <Link className="button" href="/services">
        Retour aux services
      </Link>
    </MotionPageShell>
  );
}
