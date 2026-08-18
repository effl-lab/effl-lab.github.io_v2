import type { AlumniEntry } from "./_types.mts";
import avatar from "./photo/taesun.jpeg";

const taesun: AlumniEntry = {
  order: 2,
  name: "Taesun Yeom",
  avatar,
  summary:
    'POSTECH AI (24.09--26.08): "The role of feature learning strength in generalization"',
  expertise: "Deep learning theory, learning dynamics",
  nextStep: "TBD",
  links: [
    {label: "Webpage", href: "https://taesunyeom.github.io/" },
    {label: "Mail", href: "mailto:tsyeom@postech.ac.kr" },
    {label: "Scholar", href: "https://scholar.google.com/citations?user=JobmaFQAAAAJ&hl=en" },
  ],
};

export default taesun;
