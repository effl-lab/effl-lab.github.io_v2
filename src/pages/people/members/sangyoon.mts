import type { PersonEntry } from "./_types.mts";
import sangyoonPhoto from "./photo/sangyoon.jpg";

const sangyoon: PersonEntry = {
  group: "phd",
  order: 1,
  name: "Sangyoon Lee",
  role: "Exploiting Discrete Vision Tokenization for MLLMs",
  bio: "Unifying modality-specific features to enable more efficient and deeper multimodal intelligence.",
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
