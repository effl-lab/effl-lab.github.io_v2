import type { AlumniEntry } from "./_types.mts";
import avatar from "./photo/seunghyeon.jpg";

const minkyu: AlumniEntry = {
  order: 1,
  name: "Seunghyeon Kim",
  avatar,
  summary:
    'POSTECH EE (24.09--26.08): "Activation Quantization of Vision Encoders Needs Prefixing Registers"',
  expertise: "Fast inference for VLMs",
  nextStep: "TBD",
  links: [
    { label: "Mail", href: "mailto:shkim0418@postech.ac.kr" },
    { label: "Linkedin",href: "www.linkedin.com/in/seunghyeon-kim-34b412244" },
    {label: "Scholar", href: "https://scholar.google.co.kr/citations?user=Y-y3Y0kAAAAJ&hl=ko&oi=sra" },
  ],
};

export default seunghyeon;
