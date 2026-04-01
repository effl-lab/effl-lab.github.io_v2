import type { PersonEntry } from "./_types.mts";
import hyeonjunPhoto from "./photo/hyeonjun.jpg";

const hyeonjun: PersonEntry = {
  group: "phd",
  order: 7,
  name: "Hyeonjun Kim",
  role: "Learning Vision Language Models with Many Applications 🤖",
  bio: "M.S.+Ph.D. @ POSTECH AI (25.02--).",
  avatar: hyeonjunPhoto,
  status: "M.S.+Ph.D.",
  tags: ["Multimodal Learning", "Model Efficiency", "Vision-Language-Action"],
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
