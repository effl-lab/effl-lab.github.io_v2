import type { PersonEntry } from "./_types.mts";
import hyunjongPhoto from "./photo/hyunjong.JPG";

const hyunjong: PersonEntry = {
  group: "phd",
  order: 3,
  name: "Hyunjong Ok",
  role: "Advancing Audio Technologies for Multimodal Intelligence 🔈",
  bio: "M.S.+Ph.D. @ POSTECH AI (24.02--).",
  avatar: hyunjongPhoto,
  status: "M.S.+Ph.D.",
  tags: ["Efficient LLMs", "Multimodal Learning", "Audio Technologies"],
  links: [
    {
      label: "Webpage",
      href: "https://hj-ok.github.io",
      icon: "mdi:web",
    },
    {
      label: "Mail",
      href: "mailto:r7play@postech.ac.kr",
      icon: "mdi:email-outline",
    },
  ],
};

export default hyunjong;
