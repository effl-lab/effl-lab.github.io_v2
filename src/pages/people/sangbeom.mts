import type { PersonEntry } from "./_types.mts";
import sangbeomPhoto from "./photo/sangbeom.jpg";

const sangbeom: PersonEntry = {
  group: "phd",
  order: 8,
  name: "Sangbeom Ha",
  role: "Efficient Vision-Language-Action Models for Robotic Intelligence 🤖",
  bio: "M.S.+Ph.D. @ POSTECH EE (26.02--).",
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
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sangbeom-ha-81658b1a2/",
      icon: "mdi:linkedin",
    },
  ],
};

export default sangbeom;
