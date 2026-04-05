import type { PersonEntry } from "./_types.mts";
import yongjunPhoto from "./photo/yongjun.jpg";

const yongjun: PersonEntry = {
  group: "phd",
  order: 6,
  name: "Yongjun Kim",
  role: "Improving reasoning models with test-time intervention",
  bio: "Interested in improving intelligence in test-time (e.g., test-time scaling, test-time training)",
  avatar: yongjunPhoto,
  status: "M.S.+Ph.D.",
  tags: ["Large Language Models", "Test-Time Scaling"],
  links: [
    {
      label: "Mail",
      href: "mailto:yongjun.kim@postech.ac.kr",
      icon: "mdi:email-outline",
    },
    {
      label: "X",
      href: "https://x.com/kyjhtwt",
      icon: "mdi:twitter",
    },
  ],
};

export default yongjun;
