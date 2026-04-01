import type { PersonEntry } from "./_types.mts";
import jaehoPhoto from "./photo/jaeho.png";

const jaeho: PersonEntry = {
  group: "pi",
  order: 1,
  name: "Jaeho Lee",
  role: "Assistant Professor @ POSTECH EE",
  bio: "Principal Investigator @ EffL (22.03--). Visiting Researcher @ Google (23.09--).",
  avatar: jaehoPhoto,
  status: "P.I.",
  tags: [],
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
