import type { PersonEntry } from "./_types.mts";
import minheePhoto from "./photo/minhee.jpg";

const minhee: PersonEntry = {
  group: "ms",
  order: 3,
  name: "Minhee Lee",
  role: "Video Understanding 🎥",
  bio: "M.S. @ POSTECH AI (25.02--).",
  avatar: minheePhoto,
  status: "M.S.",
  tags: ["Diffusion Transformers", "Diffusion Language Models"],
  links: [
    {
      label: "Webpage",
      href: "https://github.com/MoOo2mini",
      icon: "mdi:web",
    },
    {
      label: "Mail",
      href: "mailto:mhlee02@postech.ac.kr",
      icon: "mdi:email-outline",
    },
  ],
};

export default minhee;
