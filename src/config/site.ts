const site = {
  // --- Site Metadata ---
  meta: {
    title: "Efficient Learning Lab",
    description: "Make AI accessible to everyone with Efficient ML!",
    author: "Efficient Learning Lab",
    logo: "/effl_logo.png",
    ogImage: "/effl_logo.png",
    // HTML lang attribute, affects page language and date formatting
    // Options: "zh-CN", "en", "ja", etc.
    lang: "en",
  },

  // Update `name` if the final GitHub repository name is different.
  repository: {
    owner: "effl-lab",
    name: "effl-lab.github.io_v2",
    branch: "main",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
  navigation: [
    { name: "Home", href: "/home" },
    { name: "Research", href: "/research" },
    { name: "Publications", href: "/publications" },
    { name: "People", href: "/people" },
    { name: "Join Us", href: "/join-us" },
  ],

  // --- Social Links ---
  social: [
    // { name: "GitHub", href: "https://github.com/your-username", icon: "mdi:github" },
    // { name: "Email", href: "mailto:hello@example.com", icon: "mdi:email" },
  ],
  // --- UI Labels ---
  labels: {
    goHome: "Go Home",
    notFoundTitle: "Page not found",
    notFoundDescription:
      "The page you're looking for may have been removed or the link is broken.",
  },

  ogImage: "/effl_logo.png",
} as const;

export default site;
