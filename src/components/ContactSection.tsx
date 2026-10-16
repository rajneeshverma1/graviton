"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mascot } from "./Mascot";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" style={{ marginTop: "3.5rem" }}>
      {/* Hook with me */}
      <div style={{ marginBottom: "2.75rem" }}>
        <h2 className="section-title">Hook with me</h2>
        <p
          className="prose"
          style={{
            fontSize: "0.875rem",
            marginBottom: "1rem",
            lineHeight: 1.65,
            fontWeight: 300,
          }}
        >
          Let&apos;s connect and build something cool together. Feel free to reach
          out to me. I&apos;m always open to new opportunities, collaborations, and
          interesting technical problems.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.625rem",
            marginTop: "1rem",
          }}
        >
          {/* Copy Email Button */}
          <button
            type="button"
            onClick={copyEmail}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.38rem 0.8rem",
              borderRadius: "var(--radius-full)",
              backgroundColor: copied ? "var(--green)" : "var(--fg-strong)",
              color: copied ? "#ffffff" : "var(--bg)",
              fontSize: "0.78125rem",
              fontWeight: 400,
              transition: "var(--transition)",
            }}
          >
            {copied ? (
              <>
                <span>✓</span>
                <span>Copied Email!</span>
              </>
            ) : (
              <>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>{portfolioData.email}</span>
              </>
            )}
          </button>

          {/* Twitter / X */}
          <a
            href={portfolioData.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.38rem 0.8rem",
              borderRadius: "var(--radius-full)",
              backgroundColor: "var(--pill-bg)",
              border: "1px solid var(--pill-border)",
              color: "var(--fg-strong)",
              fontSize: "0.78125rem",
              fontWeight: 400,
            }}
          >
            <span>Twitter / X ↗</span>
          </a>

          {/* LinkedIn */}
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.38rem 0.8rem",
              borderRadius: "var(--radius-full)",
              backgroundColor: "var(--pill-bg)",
              border: "1px solid var(--pill-border)",
              color: "var(--fg-strong)",
              fontSize: "0.78125rem",
              fontWeight: 400,
            }}
          >
            <span>LinkedIn ↗</span>
          </a>
        </div>
      </div>

      {/* Gita Quote Card styled with Caveat handwritten font */}
      <div
        style={{
          margin: "2.5rem 0 1.5rem",
          padding: "1.25rem 1.5rem",
          borderRadius: "var(--radius-md)",
          backgroundColor: "var(--bg-subtle)",
          borderLeft: "3px solid var(--accent)",
        }}
      >
        <blockquote
          className="font-caveat"
          style={{
            fontSize: "1.1875rem",
            lineHeight: 1.5,
            color: "var(--fg-strong)",
            marginBottom: "0.5rem",
          }}
        >
          &ldquo;{portfolioData.gitaQuote.text}&rdquo;
        </blockquote>
        <div
          className="font-silkscreen"
          style={{
            fontSize: "0.6875rem",
            color: "var(--fg-subtle)",
          }}
        >
          — {portfolioData.gitaQuote.verse}
        </div>
      </div>

      {/* Brand Signature: Mascot Logo + rajneesh verma covering the full Bhagavad Gita section width */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(1.1rem, 2.8vw, 1.6rem)",
          width: "100%",
          marginTop: "1.85rem",
          marginBottom: "2.15rem",
        }}
      >
        <Mascot size={58} />
        <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center" }}>
          <svg
            viewBox="0 0 506 70"
            width="100%"
            height="100%"
            style={{ display: "block", overflow: "visible" }}
            aria-label="rajneesh verma"
          >
            <text
              x="0"
              y="54"
              className="font-pixelify"
              style={{
                fontFamily: "var(--font-pixelify), sans-serif",
                fontWeight: 700,
                fontSize: "60px",
                fill: "var(--fg-strong)",
                userSelect: "none",
              }}
            >
              rajneesh verma
            </text>
          </svg>
        </div>
      </div>

      {/* Footer info & Links */}
      <div
        style={{
          borderTop: "1px solid var(--border-subtle)",
          paddingTop: "1.5rem",
          paddingBottom: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          fontSize: "0.75rem",
          color: "var(--fg-subtle)",
          fontWeight: 300,
        }}
      >
        <div>
          <span>Design & Developed by </span>
          <strong style={{ color: "var(--fg-strong)", fontWeight: 500 }}>
            {portfolioData.name}
          </strong>
          <span className="font-silkscreen" style={{ marginLeft: "0.5rem", fontSize: "0.6875rem" }}>
            © 2026
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href={portfolioData.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            X
          </a>
          <a
            href={portfolioData.socials.reddit}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Reddit
          </a>
        </div>
      </div>
    </footer>
  );
}
