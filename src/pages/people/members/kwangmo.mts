import type { PersonEntry } from "./_types.mts";
import kwangmoPhoto from "./photo/kwangmo.jpg";

const kwangmo: PersonEntry = {
  group: "ms",
  order: 4,
  name: "Kwangmo Yang",

  role: "Memory-Efficient Continual Learning 🌱",

  bio: "Toward deployed models that keep learning new skills without forgetting, ultimately for robots.",
  avatar: kwangmoPhoto,
  status: "M.S.",
  tags: ["Continual Learning", "On-Device AI", "Robot Learning"],

  // icon 예시: "mdi:web", "mdi:email-outline", "mdi:twitter", "mdi:linkedin"
  links: [
    {
      label: "WebPage",
      href: "https://kmyxng.github.io/",
      icon: "mdi:web",
    },
      label: "Mail",
      href: "mailto:kwangmo24@postech.ac.kr",
      icon: "mdi:email-outline",
    },
    {
      label: "LinkedIn",
      href: "www.linkedin.com/in/kwangmo-yang-706509306",
      icon: "mdi:linkedin",
    }
  ],
};

export default kwangmo;
