import type { PersonEntry } from "./_types.mts";

import avatar from "./photo/saeyoun.jpg";

const saeyoun: PersonEntry = {
  group: "ms",
  order: 5,
  name: "Saeyoun Choi",
  role: "Optimizing calibration data for model compression",
  bio: "Advancing efficient AI by establishing data-centric optimization methods through meticulous data analysis.",
  avatar,
  status: "M.S.",
  tags: ["DataCentricOptimization", "EfficientLLMs", "Quantization"],
  links: [
    {
      label: "Mail",
      href: "mailto:saeyounchoi@postech.ac.kr",
      icon: "mdi:email-outline",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/saeyoun-choi-18063221b",
      icon: "mdi:linkedin",
    },
  ],
};

export default saeyoun;
