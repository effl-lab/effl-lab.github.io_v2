import type { PaperEntry } from "./_types.mts";

// 사용 방법
// 1. 이 파일을 복사해서 원하는 섹션 폴더(예: `2025/`, `preprints/`) 안으로 옮겨주세요.
// 2. 파일 이름은 `your-paper.paper.mts` 형태로 바꿔주세요.
// 3. 섹션 폴더 안에 넣기만 하면 `src/pages/publications.astro`에서 자동으로 불러옵니다.

const examplePaper: PaperEntry = {
  // 논문 제목
  title: "Example Paper Title",

  // 저자 목록
  // 예: ["Alice Kim", "Bob Lee", "Jaeho Lee"]
  authors: ["First Author", "Second Author", "Third Author"],

  // 학회 / 저널 / 아카이브 정보
  // 예: "ICLR 2026", "arXiv 2601.12345", "ICML 2025"
  venue: "Conference 2026",

  // 연도
  year: "2026",

  // 카드 상단 왼쪽의 분류 배지
  // 보통 "Conference", "Journal", "Preprint", "Workshop", "Poster" 등을 사용합니다.
  badge: "Conference",

  // 제목 클릭 시 이동할 링크
  // 보통 arXiv, OpenReview, ACM, IEEE, project page 등을 넣습니다.
  link: "https://example.com/paper",

  // 추가 강조 정보
  // 예: ["Oral"], ["Spotlight"], ["Outstanding paper award"]
  highlights: [],

  // 카드 하단 리소스 링크
  // label은 화면에 표시되는 이름이고, href는 실제 이동 링크입니다.
  // icon은 비워도 자동으로 어느 정도 맞춰집니다.
  resources: [
    {
      label: "Project page",
      href: "https://example.com/project",
    },
    {
      label: "Code",
      href: "https://github.com/example/repo",
    },
    {
      label: "Dataset",
      href: "https://example.com/dataset",
    },
  ],
};

export default examplePaper;
