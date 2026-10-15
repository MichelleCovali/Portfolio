import type { Metadata, Viewport } from "next";
import "./globals.css";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mihaela Covali — Aspiring Software Developer",
  description:
    "Fourth-year Information Technology student with frontend development experience at MetaChef. Open to graduation internships in the Netherlands, Italy and Spain.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Mihaela Covali — Aspiring Software Developer",
    description:
      "Curious mind. Thoughtful code. Explore my experience, skills, and graduation internship availability.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihaela Covali — Aspiring Software Developer",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches)}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
