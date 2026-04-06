import type { PersonEntry } from "./_types.mts";
import minsuPhoto from "./photo/minsoo.jpg";

const minsu: PersonEntry = {
  group: "ms",
  order: 4,
  name: "Minsoo Lee",
  role: "Efficient Image Enhancement in Extreme Adverse Conditions 🌌",
  bio: "Adapting efficient machine learning to military field, "Fight tonight"",
  avatar: minsuPhoto,
  status: "M.S.",
  tags: ["Computer Vision", "Denoising"],
  links: [
    {
      label: "Mail",
      href: "mailto:lmslee@postech.ac.kr",
      icon: "mdi:email-outline",
    },
  ],
};

export default minsu;
