import type { PersonEntry } from "./_types.mts";
import wonjunePhoto from "./photo/wonjune.jpg";

const wonjune: PersonEntry = {
  group: "ms",
  order: 6,
  name: "Wonjune Lee",
  role: "Cross-model KV cache transfer for speculative decoding",
  bio: "Efficient cross-model communication for accelerated inference",
  avatar: wonjunePhoto,
  status: "M.S.",
  tags: ["KV Cache Communication", "Speculative Decoding", "Diffusion LLM"],
  links: [
    {
      label: "Webpage",
      href: "https://www.hellowonjune.me/",
      icon: "mdi:web",
    },
    {
      label: "Mail",
      href: "mailto:lwj31558@postech.ac.kr",
      icon: "mdi:email-outline",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/wonjunelee99/",
      icon: "mdi:linkedin",
    },
  ],
};

export default wonjune;
