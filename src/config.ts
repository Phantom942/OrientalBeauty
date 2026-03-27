/**
 * Configuration centralisée — Oriental Beauty
 * Modifier les valeurs selon le cabinet.
 */

export const site = {
  name: "Oriental Beauty",
  tagline: "Browlift & Cire Orientale",
  description: "Bienvenue dans un espace dédié à votre bien-être. Browlift et cire orientale pour sublimer votre peau et votre regard.",
} as const;

/** Localisation pour le SEO local — modifier si le cabinet déménage */
export const location = {
  city: "Créteil",
  department: "94",
  departmentName: "Val-de-Marne",
  region: "Île-de-France",
  postalCode: "94000",
  /** Rue et numéro — à compléter pour un meilleur référencement local */
  streetAddress: "" as string,
  /** Coordonnées GPS — ajuster avec l'adresse exacte du cabinet */
  geo: { lat: 48.7761, lng: 2.4556 },
} as const;

/** Descriptions SEO optimisées avec mots-clés géographiques */
export const seo = {
  title: "Oriental Beauty — Browlift & Cire Orientale à Créteil (94)",
  description: "Browlift et cire orientale à Créteil (94). Oriental Beauty, institut d'esthétique dans le Val-de-Marne. Soins sourcils et épilation. Prenez rendez-vous.",
  keywords: [
    "browlift Créteil",
    "cire orientale Créteil",
    "épilation Créteil 94",
    "esthétique Val-de-Marne",
    "soins sourcils Créteil",
    "institut beauté Créteil",
    "gommage avant épilation",
    "bienfaits cire orientale",
  ],
} as const;

export const links = {
  instagram: "https://www.instagram.com/oriental_beauty94",
  calendly: "https://calendly.com/contact-orientalbeauty94/new-meeting",
  whatsapp: "https://wa.me/33650435966",
} as const;

export const contact = {
  phone: "06 50 43 59 66",
  email: "booking@orientalbeauty.fr",
  address: "Créteil, 94000", // À compléter avec l'adresse exacte
} as const;

/** Informations juridiques — à compléter */
export const legal = {
  companyName: "Oriental Beauty",
  legalForm: "Micro-entreprise", // ou "SARL", "SAS", etc.
  siret: "", // À compléter
  rcs: "", // À compléter si société
  publicationDirector: "", // Nom du responsable (propriétaire du cabinet)
  host: {
    name: "GitHub Inc.",
    address: "88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis",
  },
} as const;

export const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#avant-apres", label: "Avant / Après" },
  { href: "/#tarifs", label: "Tarifs" },
  { href: "/articles/", label: "Conseils" },
  { href: "/#contact", label: "Contact" },
] as const;
