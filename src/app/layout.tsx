import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rajneeshportfolio.vercel.app"),
  themeColor: "#08090a",
  title: "Rajneesh — Software Engineer & Tinkerer",
  description:
    "21 y/o tech enthusiast, OS contributor, hobbyist developer and tinkerer from Lucknow, India. Software Engineer at Sidekick (YC P26) and Backend AI Engineer at Flyrank AI.",
  keywords: [
    "Rajneesh",
    "Rajneesh Verma",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Lucknow",
    "Sidekick YC",
    "Flyrank AI",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Rajneesh Verma", url: "https://github.com/rajneeshverma1" }],
  openGraph: {
    title: "Rajneesh — Software Engineer & Tinkerer",
    description:
      "21 y/o tech enthusiast, OS contributor, hobbyist developer and tinkerer from Lucknow, India.",
    type: "website",
    locale: "en_US",
    siteName: "Rajneesh Verma Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajneesh — Software Engineer & Tinkerer",
    description:
      "21 y/o tech enthusiast, OS contributor, hobbyist developer and tinkerer from Lucknow, India.",
    creator: "@Rajneeshvermaa",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload primary fonts */}
        <link
          rel="preload"
          href="/fonts/c875c6f5d3e977ac-s.p.2hvcnh59x4e6z.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/a218039a3287bcfd-s.p.17e3l4txdrufi.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/8e6fa89aa22d24ec-s.p.1bg6trwi21i5q.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  if (storedTheme) {
                    document.documentElement.setAttribute('data-theme', storedTheme);
                  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
