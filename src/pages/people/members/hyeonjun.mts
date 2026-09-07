import type { PersonEntry } from "./_types.mts";
import hyeonjunPhoto from "./photo/hyeonjun.jpg";

const hyeonjun: PersonEntry = {
  group: "phd",
  order: 6,
  name: "Hyeonjun Kim",
  role: "Image Compression For Vision-Language-Action Models 🤖",
  bio: "A highly self-motivated researcher investigating how to integrate different modalities.",
  avatar: hyeonjunPhoto,
  status: "M.S.+Ph.D.",
  tags: ["Multimodal Learning", "Model Efficiency", "Vision-Language-Action Model"],
  links: [
    {
      label: "Mail",
      href: "mailto:kim.hyeonjun@postech.ac.kr",
      icon: "mdi:email-outline",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/%ED%98%84%EC%A4%80-%EA%B9%80-6443a0311/",
      icon: "mdi:linkedin",
    },
  ],
};

export default hyeonjun;
