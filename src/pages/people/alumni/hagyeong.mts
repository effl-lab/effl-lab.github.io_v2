import type { AlumniEntry } from "./_types.mts";
import avatar from "../photo/hagyeong.jpg";

const hagyeong: AlumniEntry = {
  order: 5,
  name: "Hagyeong Lee",
  avatar,
  summary:
    'M.S. @ POSTECH EE (22.09--24.08): "Neural image compression with text-guided encoding for both pixel-level and perceptual fidelity"',
  expertise: "Multimodal data compression",
  nextStep: "KBSI (한국기초과학지원연구원), and then to Samsung AI Center",
  links: [
    { label: "Webpage", href: "https://hagyeonglee.github.io" },
    { label: "Mail", href: "mailto:hagyeonglee@postech.ac.kr" },
    { label: "Twitter", href: "https://twitter.com/ha_gyeong_lee" },
  ],
};

export default hagyeong;
