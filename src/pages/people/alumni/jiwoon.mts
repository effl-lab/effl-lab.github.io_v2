import type { AlumniEntry } from "./_types.mts";
import avatar from "../photo/jiwoon.jpg";

const jiwoon: AlumniEntry = {
  order: 6,
  name: "Jiwoon Lee",
  avatar,
  summary:
    'M.S. @ POSTECH EE (22.03--24.02): "Semi-ensemble: A simple approach to over-parameterized model interpolation"',
  expertise: "Model Merging, federated learning, and knowledge distillation",
  nextStep: "Fasoo",
  links: [{ label: "Mail", href: "mailto:jwlee9702@postech.ac.kr" }],
};

export default jiwoon;
