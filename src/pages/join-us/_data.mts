import type { JoinUsEntry } from "./_types.mts";

interface MarkdownModule {
  default: unknown;
}

const itemModules = import.meta.glob<{ default?: JoinUsEntry }>(
  "./items/*.mts",
  { eager: true },
);
const contentModules = import.meta.glob<MarkdownModule>("./*/content.md", {
  eager: true,
});

export function getJoinUsItems() {
  return Object.entries(itemModules)
    .filter(([path, module]) => {
      if (path.endsWith("/example.mts")) {
        return false;
      }

      return Boolean(module.default);
    })
    .sort(
      ([pathA, moduleA], [pathB, moduleB]) =>
        (moduleA.default?.order ?? Number.MAX_SAFE_INTEGER) -
          (moduleB.default?.order ?? Number.MAX_SAFE_INTEGER) ||
        pathA.localeCompare(pathB),
    )
    .map(([, module]) => module.default as JoinUsEntry);
}

export function getJoinUsContent(slug: string) {
  return contentModules[`./${slug}/content.md`]?.default;
}
