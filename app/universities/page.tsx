import Link from "next/link";
import { MotionPageShell } from "@/components/MotionPageShell";

export default function UniversitiesPage() {
  return (
    <MotionPageShell>
        <h1>{"Universités"}</h1>
        <p>
          {"Cette page est prête pour la prochaine phase de développement : listes d'universités, filtres par destination, détails des programmes et appels à l'action pour postuler."}
        </p>
        <Link className="button" href="/">
          {"Retour à l'Accueil"}
        </Link>
    </MotionPageShell>
  );
}
