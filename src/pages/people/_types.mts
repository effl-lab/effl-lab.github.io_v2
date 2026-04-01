import type { ImageMetadata } from "astro";

export type PersonGroup = "pi" | "staff" | "phd" | "ms";

export interface PersonLink {
  label: string;
  href: string;
  icon: string;
}

export interface PersonEntry {
  group: PersonGroup;
  order?: number;
  name: string;
  role?: string;
  bio: string;
  avatar?: string | ImageMetadata;
  status?: string;
  tags: string[];
  links: PersonLink[];
}
