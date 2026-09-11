import type { PersonEntry } from "./_types.mts";

// 사용 방법
// 1. 이 파일을 복사해서 같은 폴더에 새 파일로 만들어 주세요.
// 2. 파일 이름을 `name.mts`처럼 바꿔 주세요.
// 3. 아래 내용을 수정하면 `people.astro`에서 자동으로 불러옵니다.
// 4. 사진을 쓰려면 `./photo/파일명.jpg`를 import해서 `avatar`에 넣으면 됩니다.

// 예시:
// import avatar from "./photo/example.jpg";

const examplePerson: PersonEntry = {
  // 그룹: "pi" | "phd" | "ms" | "staff"
  group: "phd",

  // 같은 그룹 안에서 표시 순서
  order: 999,

  // 이름
  name: "Example Name",

  // 카드 상단 역할/한 줄 소개
  role: "Example Research Topic",

  // 카드 본문 설명
  bio: "M.S.+Ph.D. @ POSTECH AI (26.03--).",

  // 사진이 없으면 이 줄은 지워도 됩니다.
  // avatar,

  // 상태 배지
  status: "M.S.+Ph.D.",

  // 해시태그 목록
  tags: ["Keyword 1", "Keyword 2", "Keyword 3"],

  // 링크 아이콘 목록
  // icon 예시: "mdi:web", "mdi:email-outline", "mdi:twitter", "mdi:linkedin"
  links: [
    {
      label: "Webpage",
      href: "https://example.com",
      icon: "mdi:web",
    },
    {
      label: "Mail",
      href: "mailto:example@postech.ac.kr",
      icon: "mdi:email-outline",
    },
  ],
};

export default examplePerson;
