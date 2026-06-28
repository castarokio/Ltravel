import Link from "next/link";
import { MotionPageShell } from "@/components/MotionPageShell";

export default function LoginPage() {
  return (
    <MotionPageShell>
        <h1>{"Connexion"}</h1>
        <p>
          {"L'authentification est pré-configurée sous forme de page afin qu'un véritable portail étudiant ou administrateur puisse être connecté ultérieurement."}
        </p>
        <Link className="button" href="/">
          {"Retour à l'Accueil"}
        </Link>
    </MotionPageShell>
  );
}
