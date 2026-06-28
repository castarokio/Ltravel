import { asset } from './assets';

export const proofLogos = [
  { name: "MIT", src: asset("mit-logo.png") },
  { name: "Université de Harvard", src: asset("harvard-logo.png") },
  { name: "Université de Stanford", src: asset("statnford-logo.png") },
  { name: "Université de Cambridge", src: asset("combridge.png") },
  { name: "Université d'Oxford", src: asset("oxford.png") },
  { name: "Imperial College London", src: asset("imperial.png") },
  { name: "Université de Toronto", src: asset("toronto.png") },
  { name: "Université McGill", src: asset("mcguill.png") },
  { name: "Université de Heidelberg", src: asset("Heidelberg.png") },
  { name: "Université de Copenhague", src: asset("University of Copenhagen.svg") },
  { name: "UNSW Sydney", src: asset("UNSW Sydney.svg") }
];

export const destinations = [
  { name: "Royaume-Uni", image: asset("destination-united-kingdom.webp") },
  { name: "Canada", image: asset("Canada university campus.webp") },
  { name: "États-Unis", image: asset("destination-united-states.webp") },
  { name: "Danemark", image: asset("destination-denmark.webp") },
  { name: "Australie", image: asset("destination-australia.webp") },
  { name: "Allemagne", image: asset("destination-germany.webp") }
];

export const testimonials = [
  {
    name: "Aleya Kaif",
    place: "Université d'Aarhus, Danemark",
    avatar: asset("testimonial-student-01.webptestimonial-student-01.webp"),
    quote:
      "Mon expérience a été incroyable car j'ai obtenu mon visa en seulement 9 jours. Le personnel était très coopératif, le conseiller était bienveillant et l'équipe m'a beaucoup aidée à gérer mes documents et mes démarches de visa."
  },
  {
    name: "Rayan Mitchell",
    place: "Université McGill, Canada",
    avatar: asset("testimonial-student-02.webp"),
    quote:
      "Le processus est devenu clair dès le premier rendez-vous. Je savais quels documents comptaient, quelles universités me correspondaient et quand chaque candidature devait être soumise."
  },
  {
    name: "Sara Hoffmann",
    place: "Université de Heidelberg, Allemagne",
    avatar: asset("hero-graduate-student.webp"),
    quote:
      "ExploreEdu m'a donné une feuille de route pratique pour l'admission, la préparation du compte bloqué et le rendez-vous pour le visa. Cela m'a évité des semaines de confusion."
  },
  {
    name: "Maya Collins",
    place: "UNSW Sydney, Australie",
    avatar: asset("testimonial-student-01.webptestimonial-student-01.webp"),
    quote:
      "L'équipe a comparé les programmes de manière honnête et m'a aidée à choisir la meilleure option plutôt que la plus évidente. Chaque e-mail et chaque date limite ont été suivis de près."
  },
  {
    name: "Adam Pierce",
    place: "Imperial College London, Royaume-Uni",
    avatar: asset("testimonial-student-02.webp"),
    quote:
      "L'évaluation de mon profil a été détaillée et pratique. J'ai compris quels accomplissements mettre en valeur et comment améliorer ma candidature avant de la soumettre."
  }
];

export const stats = [
  { value: "8500", label: "réussites" },
  { value: "46%", label: "taux de visa" },
  { value: "6+", label: "agences" },
  { value: "8", label: "années d'expérience" }
];
