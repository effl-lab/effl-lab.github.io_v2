import site from "@/config/site";

export interface EditTarget {
  href: string;
  repoPath: string;
}

function getRepositoryBaseUrl() {
  const { owner, name, branch } = site.repository;

  return {
    branch,
    baseUrl: `https://github.com/${owner}/${name}`,
  };
}

function createTreeUrl(repoPath: string) {
  const normalizedPath = repoPath.replace(/^\/+|\/+$/g, "");
  const { baseUrl, branch } = getRepositoryBaseUrl();

  return `${baseUrl}/tree/${branch}/${normalizedPath}`;
}

export function getEditTarget(pathname: string): EditTarget | null {
  const normalizedPath =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  if (normalizedPath === "/" || normalizedPath === "/home") {
    return {
      href: createTreeUrl("src/pages/home"),
      repoPath: "src/pages/home",
    };
  }

  if (normalizedPath === "/home/news") {
    return {
      href: createTreeUrl("src/pages/home/news"),
      repoPath: "src/pages/home/news",
    };
  }

  if (normalizedPath === "/research") {
    return {
      href: createTreeUrl("src/pages/research"),
      repoPath: "src/pages/research",
    };
  }

  if (normalizedPath === "/publications") {
    return {
      href: createTreeUrl("src/pages/publications"),
      repoPath: "src/pages/publications",
    };
  }

  if (normalizedPath === "/people") {
    return {
      href: createTreeUrl("src/pages/people"),
      repoPath: "src/pages/people",
    };
  }

  if (normalizedPath === "/people/alumni") {
    return {
      href: createTreeUrl("src/pages/people/alumni"),
      repoPath: "src/pages/people/alumni",
    };
  }

  if (normalizedPath === "/people/interns") {
    return {
      href: createTreeUrl("src/pages/people/interns"),
      repoPath: "src/pages/people/interns",
    };
  }

  if (normalizedPath === "/join-us") {
    return {
      href: createTreeUrl("src/pages/join-us"),
      repoPath: "src/pages/join-us",
    };
  }

  const joinUsMatch = normalizedPath.match(/^\/join-us\/([^/]+)$/);

  if (joinUsMatch) {
    const slug = joinUsMatch[1];
    const repoPath = `src/pages/join-us/${slug}`;

    return {
      href: createTreeUrl(repoPath),
      repoPath,
    };
  }

  return null;
}
