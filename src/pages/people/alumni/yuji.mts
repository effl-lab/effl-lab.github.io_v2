import type { AlumniEntry } from "./_types.mts";
import avatar from "../photo/yuji.jpg";

const yuji: AlumniEntry = {
  order: 3,
  name: "Yu Ji Byun",
  avatar,
  summary:
    'POSTECH Defense Science (23.03--25.02): "Towards Federated Low-Rank Adaptation with Rank-Heterogeneous Communication"',
  expertise: "Federated Learning, High-res Videos",
  nextStep: "ROKMC",
  links: [
    { label: "Webpage", href: "/docs/people/member/yuji/" },
    { label: "Mail", href: "mailto:yujibyun@postech.ac.kr" },
  ],
};

export default yuji;
