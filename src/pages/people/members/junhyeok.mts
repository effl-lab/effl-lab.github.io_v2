import type { PersonEntry } from "./_types.mts";
import junhyeokPhoto from "./photo/junhyeok.jpg";

const junhyeok: PersonEntry = {
  group: "ms",
  order: 7,
  name: "Junhyeok Lee",
  role: "Efficient Long-Term Visual Memory for Video Understanding 🎥",
  bio: "Exploring how video LLMs can retain and utilize visual information over long contexts.",
  avatar: junhyeokPhoto,
  status: "M.S.",
  tags: ["Video LLMs", "Streaming & Offline Video Understanding", "Long-Term Memory"],
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
