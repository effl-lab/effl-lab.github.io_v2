import type { AlumniEntry } from "./_types.mts";
import avatar from "../photo/minkyu.jpg";

const minkyu: AlumniEntry = {
  order: 1,
  name: "Minkyu Kim",
  avatar,
  summary:
    'POSTECH AI (23.03--25.08): "Image Coding for Machine with Robustness under Group Shifts"',
  expertise: "Data Compression, Multimodal AI",
  nextStep: "AITRICS",
  links: [
    { label: "Webpage", href: "https://minguinho26.github.io" },
    { label: "Mail", href: "mailto:minkyu.kim@postech.ac.kr" },
    { label: "Blog", href: "https://velog.io/@minkyu4506/posts" },
    { label: "Recent project", href: "https://taco-nic.github.io" },
    { label: "X", href: "https://x.com/minguinho_zeze" },
  ],
};

export default minkyu;
