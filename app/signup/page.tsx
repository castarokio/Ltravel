import Link from "next/link";
import { MotionPageShell } from "@/components/MotionPageShell";

export default function SignupPage() {
  return (
    <MotionPageShell>
        <h1>{"Inscription"}</h1>
        <p>
          {"Cette page est prête pour accueillir un futur formulaire de contact, une demande de consultation ou un flux d'inscription pour les comptes étudiants."}
        </p>
        <Link className="button" href="/">
          {"Retour à l'Accueil"}
        </Link>
    </MotionPageShell>
  );
}
