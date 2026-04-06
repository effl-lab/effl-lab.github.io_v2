import type { PersonEntry } from "./_types.mts";
import sangyoonPhoto from "./photo/sangyoon.jpg";

const sangyoon: PersonEntry = {
  group: "phd",
  order: 1,
  name: "Sangyoon Lee",
  role: "Exploiting Discrete Vision Tokenization for MLLMs",
  bio: "Aligning modality-specific features into a unified space to empower AI with a deeper and more efficient multimodal understanding.",
  avatar: sangyoonPhoto,
  status: "M.S.+Ph.D.",
  tags: ["Discrete Tokenization", "Unified Multimodal LLMs", "Fast Neural Fields"],
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
