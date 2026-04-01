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
  badge?: string;
  highlights?: string[];
  notes?: string[];
  resources?: PaperResource[];
}
