import type { PersonEntry } from "./_types.mts";
import minjaePhoto from "./photo/minjae.jpg";

const minjae: PersonEntry = {
  group: "phd",
  order: 3,
  name: "Minjae Park",
  role: "ML Efficiency: data & inference",
  bio: "Making AI cheaper to run — so more people and teams can actually afford to use it",
  avatar: minjaePhoto,
  status: "M.S.+Ph.D.",
  tags: ["Data Pruning", "Efficient Models", "Knowledge Distillation", "LLMs"],
  links: [
    {
      label: "homepage",
      href: "https://mjae-park.github.io/",
      icon: "mdi:web",
    },
    {
      label: "Mail",
      href: "mailto:minjae0047@postech.ac.kr",
      icon: "mdi:email-outline",
    },
    {
      label: "Linkedin",
      href: "https://www.linkedin.com/in/minjae-park-941368284",
      icon: "mdi:linkedin",
    },
    {
      label: "GoogleScholar",
      href: "https://scholar.google.com/citations?user=gnUrmxwAAAAJ&hl=ko",
      icon: "mdi:school-outline",
    },
  ],
};

export default minjae;
