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

  // 카드 상단 왼쪽 배지에 표시할 venue 이름
  // 예: "ICLR", "arXiv", "ICML", "TMLR"
  venue: "ICLR",

  // 연도
  year: "2026",

  // 제목 클릭 시 이동할 링크
  // 보통 arXiv, OpenReview, ACM, IEEE, project page 등을 넣습니다.
  link: "https://example.com/paper",

  // 카드 상단 오른쪽 배지들
  // 예: ["Spotlight"], ["Oral", "Best Paper"], ["Workshop: UniReps"]
  hashtags: [],

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
