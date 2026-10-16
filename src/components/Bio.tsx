import React from "react";
import { portfolioData } from "@/data/portfolio";

export function Bio() {
  return (
    <section className="prose" style={{ marginBottom: "2rem" }}>
      <p style={{ marginBottom: "0.875rem" }}>
        I&apos;m a <strong>21-year-old tinkerer</strong> &amp; <strong>Software Engineer</strong> who enjoys{" "}
        <strong>turning ideas into products</strong>, taking ownership from the
        first concept and <strong>user experience</strong> to the{" "}
        <strong>code and backend</strong> that bring it all together. Currently
        building{" "}
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
        </a>{" "}
        go check them out and let me know what you think.
      </p>

      <p style={{ marginBottom: "0.875rem" }}>
        Tech stack isn&apos;t my concern, I&apos;m{" "}
        <strong>flexible with whatever the project needs</strong>. 21 year old tinkerer from{" "}
        <strong>{portfolioData.location}</strong>, currently obsessed shipping/building with{" "}
        <strong>Cursor</strong> and <strong>Claude</strong>, prefer working in an IDE, and I&apos;m also
        hustling to become a <strong>better developer</strong> without relying too heavily on AI.
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
