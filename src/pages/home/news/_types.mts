export interface NewsEntry {
  date: string;
  text: string;
}

export interface PastNewsSection {
  year: string;
  items: NewsEntry[];
}
