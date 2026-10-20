import React from "react";
import { portfolioData } from "@/data/portfolio";

export function Bio() {
  return (
    <section className="prose" style={{ marginBottom: "2rem" }}>
      <p style={{ marginBottom: "0.875rem" }}>
        I&apos;m a <strong>21-year-old Software Engineer &amp; tinkerer</strong> from{" "}
        <strong>{portfolioData.location}</strong> who loves turning ideas into products—from concept and UX to backend code.
        Currently building{" "}
        <a
          href="https://maticstudio.site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Matic AI
        </a>{" "}
        and{" "}
        <a
          href="https://collectly-kappa.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Collectly AI
        </a>
        . Flexible with any tech stack, obsessed with shipping fast using{" "}
        <strong>Cursor</strong> &amp; <strong>Claude</strong>, and constantly hustling to become a better developer.
      </p>

      <p>
        Find my code on{" "}
        <a
          href={portfolioData.socials.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        , reach out on{" "}
        <a
          href={portfolioData.socials.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        , drop me on <a href={`mailto:${portfolioData.email}`}>email</a>, or view
        my{" "}
        <a
          href={portfolioData.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Rajneesh Verma Resume"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.2rem",
            fontWeight: 500,
          }}
        >
          Resume ↗
        </a>
        .
      </p>
    </section>
  );
}