import type { PersonEntry } from "./_types.mts";
import minheePhoto from "./photo/minhee.jpg";

const minhee: PersonEntry = {
  group: "ms",
  order: 3,
  name: "Minhee Lee",
  role: "Understanding Prompt Ignoring in mmDiT 🎨",
  bio: "Aiming to enhance performance by tackling fundamental causes.",
  avatar: minheePhoto,
  status: "M.S.",
  tags: ["Diffusion Transformers", "multi-modal DiT", "Representation"],
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
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/minhee-lee-42b651257/",
      icon: "mdi:linkedin",
    },
    {
      label: "Scholar",
      href: "https://scholar.google.com/citations?user=XoIdQ_AAAAAJ&hl=ko",
      icon: "mdi:school-outline",
    },
  ],
};

export default minhee;
