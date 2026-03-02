export const projects = [
  {
    title: "ezSCM — Supply Chain Management Platform",
    type: "Production",
    description:
      "Supply chain platform supporting purchasing automation, real-time inventory tracking, workflow visualization, and multilingual experiences across web + mobile.",
    tech: [
      "React",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "React Query",
      "Stripe",
      "Google Maps API",
    ],
    highlights: [
      "Delivered production features used by internal business teams.",
      "Improved REST API performance via query optimization/indexing and backend refactoring.",
      "Built workflow visualization using React Flow as a production-critical feature.",
    ],
    links: { github: "", demo: "https://ezscm.ai/" },
  },
  {
    title: "BreatheWatch — Air Quality Visualization",
    type: "Academic",
    description:
      "NYC neighborhood air-quality visualization using NYC Open Data with interactive maps, search, comparisons, and secure server-rendered views.",
    tech: ["Node.js", "Express", "MongoDB", "Handlebars", "Leaflet", "NYC Open Data"],
    highlights: [
      "Built SSR views with Handlebars and session-based authentication.",
      "Added input validation and XSS protection for safer data access.",
    ],
    links: { github: "https://github.com/Johan0214/BreatheWatch", demo: "" },
  },
  {
    title: "Singidi Collective",
    type: "Client Work",
    description:
      "Frontend customization and integrations for Shopify-based e-commerce sites: UI enhancements, theme customization, and client-facing features.",
    tech: ["Shopify", "JavaScript", "HTML", "CSS"],
    highlights: ["UI customization", "Client-facing storefront improvements"],
    links: { github: "", demo: "https://singidicollective.com/" },
  },
];