import type { PersonEntry } from "./_types.mts";
import jiyunPhoto from "./photo/jiyun.jpg";

const jiyun: PersonEntry = {
  group: "phd",
  order: 4,
  name: "Jiyun Bae",
  role: "Robustness of Reasoning Vision-Language Models 🕶️",
  bio: "Ph.D. @ POSTECH AI (26.02--). Academic Team Lead @ EffL.",
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
