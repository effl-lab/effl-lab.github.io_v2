export interface PaperResource {
  label: string;
  href?: string;
  icon?: string;
}

export interface PaperEntry {
  title: string;
  authors: string[];
  venue: string;
  link?: string;
  year: string;
  hashtags?: string[];
  notes?: string[];
  resources?: PaperResource[];
}
