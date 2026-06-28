import {
  BadgeCheck,
  BookOpenCheck,
  Building2,
  FileCheck2,
  GraduationCap,
  Languages,
  Mail,
  Menu,
  Plane,
  Send,
  ShieldCheck,
  UserRoundCheck
} from "lucide-react";

export const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Universités", href: "/universities" },
  { label: "Services", href: "/services" },
  {
    label: "Tourisme",
    href: "/tourism",
    children: [
      { label: "Tourisme Local", href: "/tourism/local" },
      { label: "Tourisme International", href: "/tourism/international" }
    ]
  },
  { label: "Omra", href: "/omra" },
  { label: "À Propos", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const icons = {
  BadgeCheck,
  BookOpenCheck,
  Building2,
  FileCheck2,
  GraduationCap,
  Languages,
  Mail,
  Menu,
  Plane,
  Send,
  ShieldCheck,
  UserRoundCheck
};
