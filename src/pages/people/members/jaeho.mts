import type { PersonEntry } from "./_types.mts";
import jaehoPhoto from "./photo/jaeho.png";

const jaeho: PersonEntry = {
  group: "pi",
  order: 1,
  name: "Jaeho Lee",
  role: "Understanding and harnessing algorithmic bias",
  bio: "Associate Professor @ POSTECH EE, Ex-Googler (2023-2025)",
  avatar: jaehoPhoto,
  status: "P.I.",
  tags: ["Learning theory", "Efficient AI"],
  links: [
    {
      label: "Webpage",
      href: "https://jaeho-lee.github.io",
      icon: "mdi:web",
    },
    {
      label: "Mail",
      href: "mailto:jaeho.lee@postech.ac.kr",
      icon: "mdi:email-outline",
    },
    {
      label: "X",
      href: "https://twitter.com/jaeho_lee_",
      icon: "mdi:twitter",
    },
  ],
};

export default jaeho;
