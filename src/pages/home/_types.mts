export interface HomeHeroCard {
  icon: string;
  label: string;
  value: string;
}

export interface HomeHero {
  greeting: string;
  description: string;
  cards: HomeHeroCard[];
}
