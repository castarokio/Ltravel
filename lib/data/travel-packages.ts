import { asset } from './assets';

export interface LocalTour {
  id: string;
  title: string;
  price: string;
  duration: string;
  image: string;
  description: string;
  details: string[];
}

export interface IntlPackage {
  id: string;
  title: string;
  price: string;
  duration: string;
  category: string;
  image: string;
  description: string;
  details: string[];
  inclusions: string[];
}

export interface OmraPackage {
  id: string;
  name: string;
  priceRange: string;
  duration: string;
  hotelMakkah: string;
  hotelMadinah: string;
  image: string;
  features: string[];
}

export const localTours: LocalTour[] = [
  {
    id: "desert-sunset",
    title: "Magie du Sahara & Nuit Étoilée",
    price: "à partir de 180 €",
    duration: "3 Jours / 2 Nuits",
    image: asset("local-desert-sunset.webp"),
    description: "Une immersion complète dans les dunes d'Erg Chebbi. Randonnée à dos de chameau, nuit sous bivouac de luxe et dîner traditionnel au coin du feu sous les étoiles.",
    details: [
      "Transport A/R en 4x4 climatisé",
      "Hébergement en camp nomade de luxe",
      "Pension complète (cuisine locale)",
      "Guide saharien dédié",
      "Activités : sandboard et coucher de soleil"
    ]
  },
  {
    id: "medina-culture",
    title: "Trésors Historiques de Fès & Chefchaouen",
    price: "à partir de 250 €",
    duration: "4 Jours / 3 Nuits",
    image: asset("local-medina-culture.webp"),
    description: "Explorez les ruelles millénaires de Fès, la capitale spirituelle, et laissez-vous charmer par la beauté bleue et paisible de Chefchaouen dans le Rif.",
    details: [
      "Visites guidées historiques privatives",
      "Riad traditionnel de charme (Fès)",
      "Petit-déjeuner inclus",
      "Visite des tanneries et medersas",
      "Temps libre à la Perle Bleue"
    ]
  },
  {
    id: "coastal-resort",
    title: "Échappée Côtière & Surf à Essaouira",
    price: "à partir de 150 €",
    duration: "3 Jours / 2 Nuits",
    image: asset("local-coastal-resort.webp"),
    description: "Combinez la fraîcheur de l'Atlantique et le charme de la médina blanche d'Essaouira. Idéal pour les familles, les couples ou les passionnés de sports nautiques.",
    details: [
      "Hôtel en front de mer avec piscine",
      "Initiation surf ou planche à voile",
      "Visite du port historique et des remparts",
      "Dégustation de poissons frais",
      "Transferts privatifs inclus"
    ]
  },
  {
    id: "mountain-hike",
    title: "Trekking au Toubkal & Randonnée Atlas",
    price: "à partir de 220 €",
    duration: "5 Jours / 4 Nuits",
    image: asset("local-mountain-hike.webp"),
    description: "Destiné aux amoureux de nature et de randonnée. Partez à la conquête des villages berbères de l'Imlil et du plus haut sommet d'Afrique du Nord.",
    details: [
      "Guide de montagne certifié",
      "Gîtes d'étape et refuges inclus",
      "Mules pour le portage des bagages",
      "Tous les repas préparés par un cuisinier",
      "Rencontre culturelle chez l'habitant"
    ]
  }
];

export const intlPackages: IntlPackage[] = [
  {
    id: "maldives-beach",
    title: "Paradis Tropical aux Maldives",
    price: "à partir de 1 890 €",
    duration: "8 Jours / 7 Nuits",
    category: "Tropical",
    image: asset("intl-maldives-resort.webp"),
    description: "Séjournez dans une luxueuse villa sur pilotis entourée d'eaux turquoise et de plages de sable blanc. Une parenthèse de détente absolue sous les tropiques.",
    details: [
      "Vols internationaux inclus",
      "Villa sur pilotis avec piscine privée",
      "Formule tout inclus (All-Inclusive)",
      "Transferts en hydravion ou speedboat",
      "Activités de snorkeling guidées"
    ],
    inclusions: [
      "Billet d'avion A/R",
      "Hébergement 5*",
      "Tous les repas & boissons",
      "Assurance voyage standard"
    ]
  },
  {
    id: "tokyo-lights",
    title: "Lumières & Traditions du Japon",
    price: "à partir de 2 150 €",
    duration: "10 Jours / 9 Nuits",
    category: "Asia",
    image: asset("intl-tokyo-streets.webp"),
    description: "Découvrez le contraste saisissant entre le Tokyo moderne illuminé de néons et les temples paisibles de Kyoto. Une aventure inoubliable au pays du Soleil-Levant.",
    details: [
      "Hôtels 4* idéalement situés",
      "Pass trains JR de 7 jours inclus",
      "Visites guidées privées (Tokyo & Kyoto)",
      "Expérience de cérémonie de thé traditionnelle",
      "Assistance 24h/24 francophone"
    ],
    inclusions: [
      "Billet d'avion A/R",
      "Hébergement & transferts",
      "Train à grande vitesse (Shinkansen)",
      "Guide local multilingue"
    ]
  },
  {
    id: "swiss-alps",
    title: "Évasion Alpine en Suisse",
    price: "à partir de 1 250 €",
    duration: "7 Jours / 6 Nuits",
    category: "Europe",
    image: asset("intl-swiss-alps.webp"),
    description: "Respirez le grand air des Alpes dans un chalet en bois niché face aux montagnes enneigées. Voyagez à bord de trains panoramiques d'exception.",
    details: [
      "Hébergement en chalet typique de montagne",
      "Pass de transport ferroviaire illimité",
      "Accès aux téléphériques et pistes",
      "Randonnées guidées en été ou ski en hiver",
      "Fondue traditionnelle offerte"
    ],
    inclusions: [
      "Vols ou trains régionaux",
      "Hébergement premium",
      "Swiss Travel Pass",
      "Dîner gastronomique"
    ]
  },
  {
    id: "safari-wildlife",
    title: "Grand Safari au Serengeti",
    price: "à partir de 2 450 €",
    duration: "7 Jours / 6 Nuits",
    category: "Adventure",
    image: asset("intl-safari-wildlife.webp"),
    description: "Vivez le spectacle de la faune sauvage en Tanzanie. Observez les 'Big Five' (lions, éléphants, léopards, rhinocéros, buffles) lors de safaris quotidiens en 4x4.",
    details: [
      "Hébergement en lodge de luxe et tentes safari",
      "Chauffeur-guide francophone certifié",
      "Safaris en 4x4 à toit ouvrant",
      "Entrées des parcs nationaux incluses",
      "Pension complète pendant le safari"
    ],
    inclusions: [
      "Vols A/R tanzaniens",
      "Pension complète en safari",
      "Assistance 24/7",
      "Assurance évacuation médicale"
    ]
  },
  {
    id: "rome-colosseum",
    title: "Rome Historique & Saveurs d'Italie",
    price: "à partir de 690 €",
    duration: "5 Jours / 4 Nuits",
    category: "Europe",
    image: asset("intl-rome-colosseum.webp"),
    description: "Parcourez la Ville Éternelle, du Colisée à la Basilique Saint-Pierre, et savourez la légendaire gastronomie italienne à travers nos cours de cuisine privés.",
    details: [
      "Boutique-hôtel de charme au centre-ville",
      "Billets coupe-file pour le Vatican et Colisée",
      "Cours privé de fabrication de pâtes & pizza",
      "Guide historique francophone",
      "Transferts aéroport privés"
    ],
    inclusions: [
      "Billet d'avion A/R",
      "Hôtel + petit-déjeuner",
      "Activités et entrées",
      "Carte de transports locaux"
    ]
  },
  {
    id: "istanbul-bosphorus",
    title: "Magie d'Istanbul & Vol en Cappadoce",
    price: "à partir de 950 €",
    duration: "7 Jours / 6 Nuits",
    category: "Europe",
    image: asset("intl-istanbul-bosphorus.webp"),
    description: "Explorez la métropole à cheval sur deux continents. Naviguez sur le Bosphore et envolez-vous en montgolfière au-dessus des cheminées de fées en Cappadoce.",
    details: [
      "Vols intérieurs Istanbul-Cappadoce inclus",
      "Hôtel troglodytique de luxe (Cappadoce)",
      "Croisière privée sur le Bosphore au coucher du soleil",
      "Visite guidée de la Mosquée Bleue & Sainte-Sophie",
      "Vol en montgolfière au lever du soleil"
    ],
    inclusions: [
      "Tous les vols (internationaux & internes)",
      "Hôtels 4* / 5*",
      "Petit-déjeuner inclus",
      "Guide professionnel francophone"
    ]
  }
];

export const omraPackages: OmraPackage[] = [
  {
    id: "confort",
    name: "Formule Omra Confort",
    priceRange: "1 290 € - 1 590 €",
    duration: "14 Jours (7 Makkah / 7 Madinah)",
    hotelMakkah: "Luluat Al-Bait 4* (ou similaire) - 900m avec navette H24",
    hotelMadinah: "Al-Eiman Nour 4* (ou similaire) - 250m de la mosquée",
    image: asset("collage-omra.jpg"),
    features: [
      "Billet d'avion A/R (compagnie régulière)",
      "Obtention du visa Omra inclus",
      "Navette bus gratuite de l'hôtel vers le Haram 24h/24",
      "Transferts internes en bus de tourisme climatisé",
      "Accompagnateur religieux francophone durant le voyage",
      "Visites guidées historiques (Ziyarat) à Makkah & Madinah"
    ]
  },
  {
    id: "prestige",
    name: "Formule Omra Prestige VIP",
    priceRange: "2 190 € - 2 690 €",
    duration: "14 Jours (7 Makkah / 7 Madinah)",
    hotelMakkah: "Swissôtel Al Maqam 5* (ou similaire) - Direct sur la cour du Haram",
    hotelMadinah: "Pullman Zamzam Madina 5* (ou similaire) - Face à la cour du Haram",
    image: asset("hotel near Kaaba.webp"),
    features: [
      "Billet d'avion A/R (Vol direct sur vol régulier)",
      "Visa Omra express avec assurance médicale complète",
      "Hôtels 5 étoiles situés à quelques mètres du Haram",
      "Petit-déjeuner buffet international haut de gamme inclus",
      "Transferts VIP privatifs en voiture de luxe (GMC)",
      "Accompagnement personnalisé H24 & Ziyarat privatives"
    ]
  },
  {
    id: "sur-mesure",
    name: "Formule Omra Sur Mesure / Famille",
    priceRange: "Sur devis personnalisé",
    duration: "À la carte (selon vos préférences)",
    hotelMakkah: "Hôtels de votre choix (3*, 4* ou 5*)",
    hotelMadinah: "Hôtels de votre choix (3*, 4* ou 5*)",
    image: asset("Kaaba pilgrims umrah.webp"),
    features: [
      "Choix libre de la date de départ et de retour",
      "Combinaison personnalisée vols et nuits d'hôtels",
      "Chambres familiales communicantes ou suites spacieuses",
      "Hébergements adaptés pour personnes âgées ou enfants",
      "Possibilité de prolonger le séjour (ex. Dubaï ou Istanbul)",
      "Flexibilité totale sur les excursions de visites religieuses"
    ]
  }
];
