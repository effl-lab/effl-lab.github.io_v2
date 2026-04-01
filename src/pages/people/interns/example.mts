import type { InternEntry } from "./_types.mts";

// 사용 방법
// 1. 이 파일을 복사해서 같은 폴더에 새 파일로 만들어 주세요.
// 2. 파일 이름을 `name.mts`처럼 바꿔 주세요.
// 3. 아래 내용을 수정하면 `interns.astro`에서 자동으로 불러옵니다.

const exampleIntern: InternEntry = {
  // 표시 순서
  order: 999,

  // 이름
  name: "Example Intern",

  // 참여 기간
  period: "Spring '26-",

  // 연구 주제
  focus: "Example Research Topic",
};

export default exampleIntern;
