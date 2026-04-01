import type { AlumniEntry } from "./_types.mts";

// 사용 방법
// 1. 이 파일을 복사해서 같은 폴더에 새 파일로 만들어 주세요.
// 2. 파일 이름을 `name.mts`처럼 바꿔 주세요.
// 3. 아래 내용을 수정하면 `alumni.astro`에서 자동으로 불러옵니다.
// 4. 사진을 쓰려면 `../photo/파일명.jpg`를 import해서 `avatar`에 넣으면 됩니다.

// 예시:
// import avatar from "../photo/example.jpg";

const exampleAlumni: AlumniEntry = {
  // 표시 순서
  order: 999,

  // 이름
  name: "Example Alumni",

  // 사진이 없으면 이 줄은 지워도 됩니다.
  // avatar,

  // 소속/기간/대표 주제
  summary: 'M.S. @ POSTECH EE (24.03--26.02): "Example thesis title"',

  // 전문 분야
  expertise: "Example Expertise 1, Example Expertise 2",

  // 다음 진로
  nextStep: "Example Company / Lab",

  // 링크 목록
  links: [
    { label: "Webpage", href: "https://example.com" },
    { label: "Mail", href: "mailto:example@postech.ac.kr" },
  ],
};

export default exampleAlumni;
