import type { Metadata } from "next";
import Link from "next/link";
import { MotionPageShell } from "@/components/MotionPageShell";

export const metadata: Metadata = {
  title: "À Propos | Land Travel",
  description: "Découvrez ExploreEdu / Land Travel : notre mission d'accompagner les étudiants et familles dans le choix de destinations, l'admission et les démarches de visa."
};

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
