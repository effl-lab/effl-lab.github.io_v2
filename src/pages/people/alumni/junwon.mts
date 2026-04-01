import type { AlumniEntry } from "./_types.mts";
import avatar from "../photo/junwon.jpg";

const junwon: AlumniEntry = {
  order: 7,
  name: "Junwon Seo",
  avatar,
  summary:
    'M.S. @ POSTECH EE (22.03--24.02): "In search of a data transformation that accelerates neural field training"',
  expertise: "Fast training of neural fields",
  nextStep: "LivsMed (전문연구요원)",
  links: [{ label: "Mail", href: "mailto:junwon.seo@postech.ac.kr" }],
};

export default junwon;
