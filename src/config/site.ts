const site = {
  meta: {
    title: "Efficient Learning Lab",
    description: "Make AI accessible to everyone with Efficient ML!",
    author: "Efficient Learning Lab",
    logo: "/effl_logo.png",
    ogImage: "/effl_logo.png",
    lang: "en",
  },

  repository: {
    owner: "effl-lab",
    name: "effl-lab.github.io_v2",
    branch: "main",
  },

  navigation: [
    { name: "Research", href: "/research" },
    { name: "Publications", href: "/publications" },
    { name: "People", href: "/people" },
    { name: "Join Us", href: "/join-us" },
  ],

  social: [],
  labels: {
    goHome: "Go Home",
    notFoundTitle: "Page not found",
    notFoundDescription:
      "The page you're looking for may have been removed or the link is broken.",
  },

  ogImage: "/effl_logo.png",
} as const;

export default site;
