import type { PersonEntry } from "./_types.mts";
import minjaePhoto from "./photo/minjae.jpg";

const minjae: PersonEntry = {
  group: "phd",
  order: 2,
  name: "Minjae Park",
  role: "Accelerating Large-Scale Models ⚙️",
  bio: "M.S.+Ph.D. @ POSTECH EE (24.02--).",
  avatar: minjaePhoto,
  status: "M.S.+Ph.D.",
  tags: ["Data Pruning", "Efficient Models", "Knowledge Distillation"],
  links: [
    {
      label: "Mail",
      href: "mailto:minjae0047@postech.ac.kr",
      icon: "mdi:email-outline",
    },
  ],
};

export default minjae;
