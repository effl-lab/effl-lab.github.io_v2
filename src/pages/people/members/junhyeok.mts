import type { PersonEntry } from "./_types.mts";
import junhyeokPhoto from "./photo/junhyeok.jpg";

const junhyeok: PersonEntry = {
  group: "ms",
  order: 7,
  name: "Junhyeok Lee",
  role: "Efficient KV Cache Construction for Video Understanding 🎥",
  bio: "Exploring optimized long-term memory for video understanding.",
  avatar: junhyeokPhoto,
  status: "M.S.",
  tags: ["Vision-Language Models", "Video Understanding", "KV Cache Compression"],
  links: [
    {
      label: "Webpage",
      href: "https://wnsx0000.github.io/",
      icon: "mdi:web",
    },
    {
      label: "Mail",
      href: "mailto:jhlee0310@postech.ac.kr",
      icon: "mdi:email-outline",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/junhyeok-lee-a48682385/",
      icon: "mdi:linkedin",
    },
  ],
};

export default junhyeok;
