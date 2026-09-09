import type { PersonEntry } from "./_types.mts";
import jiyunPhoto from "./photo/jiyun.jpg";

const jiyun: PersonEntry = {
  group: "phd",
  order: 2,
  name: "Jiyun Bae",
  role: "Robustness of Reasoning Vision-Language Models 🕶️",
  bio: "Aspiring to build AI systems that perceive the visual world as faithfully as they reason about it.",
  avatar: jiyunPhoto,
  status: "Ph.D.",
  tags: ["Vision-Language Models", "Trustworthiness", "Robustness"],
  links: [
    {
      label: "Webpage",
      href: "https://jiyunbae007.github.io",
      icon: "mdi:web",
    },
    {
      label: "Mail",
      href: "mailto:jiyun.bae@postech.ac.kr",
      icon: "mdi:email-outline",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jiyun-bae-33568221a/",
      icon: "mdi:linkedin",
    },
    {
      label: "Scholar",
      href: "https://scholar.google.com/citations?user=aKgDxOkAAAAJ&hl=ko",
      icon: "mdi:school-outline",
    },
  ],
};

export default jiyun;
