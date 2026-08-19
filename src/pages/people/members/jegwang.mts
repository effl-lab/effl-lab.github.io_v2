import type { PersonEntry } from "./_types.mts";
import jegwangPhoto from "./photo/jegwang.jpg";

const jegwang: PersonEntry = {
  group: "ms",
  order: 1,
  name: "Jegwang Ryu",
  role: "Efficient Model Training & Inference",
  bio: "Understanding efficient and reliable AI systems through efficient information representation and compression",
  avatar: jegwangPhoto,
  status: "M.S.",
  tags: ["Model Compression", "Efficient Inference", "Knowledge Distillation", "Neural Codecs"],
  links: [
    {
      label: "Mail",
      href: "mailto:jegwang.ryu@postech.ac.kr",
      icon: "mdi:email-outline",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/jegwang-ryu-179b63269",
      icon: "mdi:linkedin",
    },
    {
      label: "Scholar",
      href: "https://scholar.google.co.kr/citations?hl=ko&user=QLsG1YMAAAAJ",
      icon: "mdi:school-outline",
    },

  ],
};

export default jegwang;
