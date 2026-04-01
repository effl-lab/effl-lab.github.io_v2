import type { AlumniEntry } from "./_types.mts";
import avatar from "../photo/seungwoo.jpg";

const seungwoo: AlumniEntry = {
  order: 4,
  name: "Seungwoo Son",
  avatar,
  summary:
    'M.S. @ POSTECH EE (22.03--24.08): "The role of masking for efficient supervised knowledge distillation of vision transformers"',
  expertise:
    "Model compression of large transformers, using quantization and distillation",
  nextStep: "Samsung Research, and then to Qualcomm",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/seungwoo-son-057511323",
    },
    { label: "Mail", href: "mailto:swson32@gmail.com" },
  ],
};

export default seungwoo;
