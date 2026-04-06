import type { PersonEntry } from "./_types.mts";
import jiyunPhoto from "./photo/jiyun.jpg";

const jiyun: PersonEntry = {
  group: "phd",
  order: 4,
  name: "Jiyun Bae",
  role: "Robustness of Reasoning Vision-Language Models 🕶️",
  bio: "Aspiring to build AI systems that perceive the visual world as faithfully as they reason about it.",
  avatar: jiyunPhoto,
  status: "Ph.D.",
  tags: ["Vision-Language Models", "Trustworthiness", "Robustness"],
  links: [
    {
      label: "Mail",
      href: "mailto:jiyun.bae@postech.ac.kr",
      icon: "mdi:email-outline",
    },
  ],
};

export default jiyun;
