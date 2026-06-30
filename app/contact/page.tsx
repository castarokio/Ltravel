import type { Metadata } from "next";
import Link from "next/link";
import { MotionPageShell } from "@/components/MotionPageShell";

export const metadata: Metadata = {
  title: "Contact | Land Travel",
  description: "Contactez Land Travel pour une consultation en éducation, tourisme ou Omra : formulaire, prise de rendez-vous, téléphone et e-mail."
};

export default function ContactPage() {
  return (
    <MotionPageShell>
        <h1>{"Contact"}</h1>
        <p>
          {"Utilisez cette page pour accéder au formulaire de contact complet, au plan d'accès de nos bureaux, à la prise de rendez-vous pour une consultation et aux options directes de contact par téléphone ou e-mail lors de la prochaine étape."}
        </p>
        <Link className="button" href="/">
          {"Retour à l'Accueil"}
        </Link>
    </MotionPageShell>
  );
}
