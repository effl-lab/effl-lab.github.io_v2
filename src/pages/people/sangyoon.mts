import type { PersonEntry } from "./_types.mts";
import sangyoonPhoto from "./photo/sangyoon.jpg";

const sangyoon: PersonEntry = {
  group: "phd",
  order: 1,
  name: "Sangyoon Lee",
  role: "Hyperefficient Neural Fields ⚡️",
  bio: "M.S.+Ph.D. @ POSTECH AI (24.02--).",
  avatar: sangyoonPhoto,
  status: "M.S.+Ph.D.",
  tags: ["Fast Neural Fields", "Editable Neural Fields", "Neural Compression"],
  links: [
    {
      label: "Webpage",
      href: "https://sangyoon-lee99.github.io",
      icon: "mdi:web",
    },
    {
      label: "Mail",
      href: "mailto:sangyoon.lee@postech.ac.kr",
      icon: "mdi:email-outline",
    },
  ],
};

export default sangyoon;
