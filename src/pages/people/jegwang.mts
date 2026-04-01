import type { PersonEntry } from "./_types.mts";
import jegwangPhoto from "./photo/jegwang.jpg";

const jegwang: PersonEntry = {
  group: "ms",
  order: 1,
  name: "Jegwang Ryu",
  role: "Compression in the Neural Network Weight Space 💾",
  bio: "M.S. @ POSTECH EE (24.09--).",
  avatar: jegwangPhoto,
  status: "M.S.",
  tags: ["Efficient LLMs", "Accelerated Training"],
  links: [
    {
      label: "Scholar",
      href: "https://scholar.google.co.kr/citations?hl=ko&user=QLsG1YMAAAAJ",
      icon: "mdi:school-outline",
    },
    {
      label: "Mail",
      href: "mailto:jegwang.ryu@postech.ac.kr",
      icon: "mdi:email-outline",
    },
  ],
};

export default jegwang;
