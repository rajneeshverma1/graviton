import React from "react";
import { portfolioData } from "@/data/portfolio";

export function EducationSection() {
  return (
    <section id="education" style={{ marginBottom: "1.5rem" }}>
      <div
        style={{
          borderBottom: "1px solid var(--border)",
          paddingBottom: "0.35rem",
          marginBottom: "0.35rem",
        }}
      >
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          Education
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
        {portfolioData.education.map((item) => {
          return (
            <div
              key={item.institution}
              className="hover-row"
              style={{
                margin: "0 -0.5rem",
                padding: "0.25rem 0.5rem",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "1.25rem",
              }}
            >
              <div style={{ flex: "1 1 auto", minWidth: 0 }}>
                <div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-hover"
                    style={{
                      color: "var(--fg-strong)",
                      fontWeight: 500,
                      fontSize: "0.875rem",
                    }}
                  >
                    {item.institution}
                  </a>
                </div>
                <div
                  style={{
                    fontSize: "0.78125rem",
                    color: "var(--fg-muted)",
                    marginTop: "0.15rem",
                    lineHeight: 1.4,
                  }}
                >
                  <span>{item.degree}</span>
                  {item.location && (
                    <>
                      <span style={{ color: "var(--fg-subtle)", margin: "0 0.35rem" }}>
                        ·
                      </span>
                      <span style={{ color: "var(--fg-subtle)" }}>{item.location}</span>
                    </>
                  )}
                </div>
              </div>

              <span
                className="font-mono"
                style={{
                  fontSize: "0.78125rem",
                  color: "var(--fg-subtle)",
                  flexShrink: 0,
                  marginTop: "0.08rem",
                }}
              >
                {item.period}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
