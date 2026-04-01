import type { PersonEntry } from "./_types.mts";
import taesunPhoto from "./photo/taesun.jpeg";

const taesun: PersonEntry = {
  group: "phd",
  order: 5,
  name: "Taesun Yeom",
  role: "Theoretical Understanding of Deep Learning 📝",
  bio: "M.S.+Ph.D. @ POSTECH AI (24.09--).",
  avatar: taesunPhoto,
  status: "M.S.+Ph.D.",
  tags: ["Implicit Bias", "Learning Dynamics", "Generalization"],
  links: [
    {
      label: "Scholar",
      href: "https://scholar.google.co.kr/citations?hl=ko&user=JobmaFQAAAAJ",
      icon: "mdi:school-outline",
    },
  ],
};

export default taesun;
