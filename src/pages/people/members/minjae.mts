import type { PersonEntry } from "./_types.mts";
import minjaePhoto from "./photo/minjae.jpg";

const minjae: PersonEntry = {
  group: "phd",
  order: 2,
  name: "Minjae Park",
  role: "ML Efficiency: data & inference",
  bio: "Making AI cheaper to run — so more people and teams can actually afford to use it",
  avatar: minjaePhoto,
  status: "M.S.+Ph.D.",
  tags: ["Data Pruning", "Efficient Models", "Knowledge Distillation", "LLMs"],
  links: [
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
      label: "CV",
      href: "https://drive.google.com/file/d/1OylgtwXrm1nMq_CtlxS6tb35BP9aypJZ/view?usp=sharing",
      icon: "mdi:cv",
    },
  ],
};

export default minjae;
