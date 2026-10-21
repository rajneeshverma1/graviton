import React from "react";
import { portfolioData, OpenSourceItem } from "@/data/portfolio";

export function OpenSourceSection() {
  return (
    <section id="open-source" style={{ marginBottom: "2rem" }}>
      <div
        style={{
          borderBottom: "1px solid var(--border)",
          paddingBottom: "0.35rem",
          marginBottom: "0.5rem",
        }}
      >
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          OS Contributions
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}>
        {portfolioData.openSource.map((item: OpenSourceItem) => {
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${item.name} repository`}
              title={`View ${item.name} contribution`}
              className="hover-row"
              style={{
                margin: "0 -0.5rem",
                padding: "0.28rem 0.5rem",
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: "1.25rem",
              }}
            >
              {/* Left: Name · Description */}
              <div
                style={{
                  fontSize: "0.875rem",
                  color: "var(--fg-muted)",
                  flex: "0 1 auto",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <strong style={{ color: "var(--fg-strong)", fontWeight: 600 }}>
                  {item.name}
                </strong>
                <span style={{ color: "var(--fg-subtle)", margin: "0 0.35rem" }}>
                  ·
                </span>
                <span>{item.description}</span>
              </div>

              {/* Right: Status badge & arrow */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  flexShrink: 0,
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                <span
                  style={{
                    padding: "0.125rem 0.4375rem",
                    borderRadius: "4px",
                    fontWeight: 500,
                    backgroundColor:
                      item.status === "Current"
                        ? "rgba(16, 185, 129, 0.12)"
                        : "var(--pill-bg)",
                    color:
                      item.status === "Current"
                        ? "var(--green)"
                        : "var(--fg-subtle)",
                    border:
                      item.status === "Current"
                        ? "1px solid rgba(16, 185, 129, 0.25)"
                        : "1px solid var(--border)",
                  }}
                >
                  {item.status}
                </span>
                <span style={{ color: "var(--fg-subtle)" }}>↗</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
