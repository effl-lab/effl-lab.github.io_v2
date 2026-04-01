import type { AlumniEntry } from "./_types.mts";
import avatar from "../photo/juyun.jpg";

const juyun: AlumniEntry = {
  order: 2,
  name: "Juyun Wee",
  avatar,
  summary:
    'POSTECH EE (23.09--25.08): "Prompt-based depth pruning of large language models"',
  expertise: "Model Compression, LLM",
  nextStep: "SKT",
  links: [
    { label: "Webpage", href: "/docs/people/member/juyun/" },
    { label: "Mail", href: "mailto:jywee@postech.ac.kr" },
  ],
};

export default juyun;
