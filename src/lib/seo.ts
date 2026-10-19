// Everything search engines and AI answer engines read about the site lives
// here: titles, descriptions, the share image, and the structured data that
// says who Ayush is. None of it changes what's on screen.

export const SITE_URL = "https://ayshrosine.tech";
export const OG_IMAGE = `${SITE_URL}/og.png`;

export const NAME = "Ayush Bisen";
export const ABOUT_SHORT =
  "Ayush Bisen is a full-stack developer and Computer Science and Business Systems student in Nagpur who builds full-stack products, experiments with AI, and turns messy ideas into usable software.";

export const PROFILES = [
  "https://linkedin.com/in/ayshrosine/",
  "https://github.com/ayshrosine",
  "https://x.com/ayshrosine",
  "https://instagram.com/ayshrosine",
];

export const person = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: NAME,
  alternateName: ["Ayush", "Ayush Satyawan Bisen", "ayshrosine"],
  url: SITE_URL,
  image: OG_IMAGE,
  email: "mailto:ayushsatyawanbisen@gmail.com",
  jobTitle: "Full-stack Developer",
  description: ABOUT_SHORT,
  alumniOf: { "@type": "CollegeOrUniversity", name: "St. Vincent Pallotti College of Engineering & Technology" },
  address: { "@type": "PostalAddress", addressLocality: "Nagpur", addressRegion: "Maharashtra", addressCountry: "IN" },
  knowsAbout: [
    "Full-stack development",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Backend engineering",
    "AI integration",
    "Databases",
    "Product building",
  ],
  sameAs: PROFILES,
};

// Turn a JSON-LD object into a <script> entry for a route's head.
export const jsonLd = (data: Record<string, unknown>) => ({
  type: "application/ld+json",
  children: JSON.stringify({ "@context": "https://schema.org", ...data }),
});

// The standard set of tags for a page: title, description, canonical address
// and the share card.
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "the anatomy of a curious builder — Ayush Bisen" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
