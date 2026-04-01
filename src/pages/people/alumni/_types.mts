import type { ImageMetadata } from "astro";

export interface AlumniLink {
  label: string;
  href: string;
}

export interface AlumniEntry {
  order?: number;
  name: string;
  avatar?: ImageMetadata;
  summary: string;
  expertise: string;
  nextStep: string;
  links: AlumniLink[];
}
