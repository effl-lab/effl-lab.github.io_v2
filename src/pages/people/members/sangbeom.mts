import type { PersonEntry } from "./_types.mts";
import sangbeomPhoto from "./photo/sangbeom.jpg";

const sangbeom: PersonEntry = {
  group: "phd",
  order: 8,
  name: "Sangbeom Ha",
  role: "Efficient Vision-Language-Action Models for Robotic Intelligence 🤖",
  bio: "Bridge mathematical optimization and EE principles to architect ultra-efficient Physical AI",
  avatar: sangbeomPhoto,
  status: "M.S.+Ph.D.",
  tags: ["Vision-Language-Action", "Model Efficiency", "On-device Robotics"],
  links: [
    {
      label: "Webpage",
      href: "https://darwin406.github.io/",
      icon: "mdi:web",
    },
    {
      label: "Mail",
      href: "mailto:sangbeomha@postech.ac.kr",
      icon: "mdi:email-outline",
    },
  ],
};

export default sangbeom;
