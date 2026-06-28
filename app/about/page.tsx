import Link from "next/link";
import { MotionPageShell } from "@/components/MotionPageShell";

export default function AboutPage() {
  return (
    <MotionPageShell>
        <h1>{"À Propos"}</h1>
        <p>
          {"ExploreEdu aide les étudiants et les familles à choisir leurs destinations, préparer leurs dossiers d'admission et effectuer leurs démarches de visa avec un accompagnement plus clair."}
        </p>
        <Link className="button" href="/">
          {"Retour à l'Accueil"}
        </Link>
    </MotionPageShell>
  );
}
