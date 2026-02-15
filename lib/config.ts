import {
  Instagram,
  Mail,
  Globe,
  Building2,
  Linkedin,
  type LucideIcon,
} from "lucide-react";

export interface LinkConfig {
  label: string;
  href: string;
  icon: LucideIcon;
  variant: "primary" | "secondary";
}

export const profileConfig = {
  name: "Alanur Atesoglu",
  title: "Soziologie Studentin & Marketing Enthusiastin",
  description:
    "Fokus auf Gesellschaft, Kommunikation und digitale Markenauftritte.",
  image: "/alanur_bild.jpg",
};

export const socialLinks: LinkConfig[] = [
  {
    label: "GentleGroup",
    href: "https://www.gentlegroup.de",
    icon: Building2,
    variant: "primary",
  },
  {
    label: "Portfolio",
    href: "https://www.berkcanatesoglu.de",
    icon: Globe,
    variant: "primary",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/Alanur-atesoglu/",
    icon: Linkedin,
    variant: "primary",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/berkcandaily/",
    icon: Instagram,
    variant: "secondary",
  },
  {
    label: "E-Mail",
    href: "mailto:alanur@gentlegroup.de",
    icon: Mail,
    variant: "secondary",
  },
];

export const siteConfig = {
  name: "Alanur Atesoglu - Soziologie & Marketing",
  description: "Soziologie Studentin mit Fokus auf Marketing und Kommunikation",
  url: "https://berkcandaily.vercel.app",
};
