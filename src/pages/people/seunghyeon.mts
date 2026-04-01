import type { PersonEntry } from "./_types.mts";
import seunghyeonPhoto from "./photo/seunghyeon.jpg";

const seunghyeon: PersonEntry = {
  group: "ms",
  order: 2,
  name: "Seunghyun Kim",
  role: "Efficient Vision Encoder 📸",
  bio: "M.S. @ POSTECH EE (24.09--).",
  avatar: seunghyeonPhoto,
  status: "M.S.",
  tags: ["Quantization", "VLMs", "Vision Encoder"],
  links: [
    {
      label: "Mail",
      href: "mailto:shkim0418@postech.ac.kr",
      icon: "mdi:email-outline",
    },
  ],
};

export default seunghyeon;
