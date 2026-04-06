import type { PersonEntry } from "./_types.mts";
import jegwangPhoto from "./photo/jegwang.jpg";

const jegwang: PersonEntry = {
  group: "ms",
  order: 1,
  name: "Jegwang Ryu",
  role: "Uncertainty Quantification in Large-Scale Models",
  bio: "Developing efficient and reliable AI sysyem for real-world applications",
  avatar: jegwangPhoto,
  status: "M.S.",
  tags: ["Model compression", "Efficient LLMs", "Accelerated Training"],
  links: [
    {
      label: "Mail",
      href: "mailto:jegwang.ryu@postech.ac.kr",
      icon: "mdi:email-outline",
    },
    {
      label: "LinkedIn",
      href: "www.linkedin.com/in/jegwang-ryu-179b63269",
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
