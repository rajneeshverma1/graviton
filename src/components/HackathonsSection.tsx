import React from "react";
import { portfolioData, Hackathon } from "@/data/portfolio";

export function HackathonsSection() {
  return (
    <section id="hackathons" style={{ marginBottom: "1.5rem" }}>
      <div
        style={{
          borderBottom: "1px solid var(--border)",
          paddingBottom: "0.35rem",
          marginBottom: "0.35rem",
        }}
      >
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          Hackathons & Competitions
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
        {portfolioData.hackathons.map((item: Hackathon, idx: number) => {
          return (
            <div
              key={idx}
              className="hover-row"
              style={{
                margin: "0 -0.5rem",
                padding: "0.35rem 0.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                }}
              >
                <div style={{ fontSize: "0.875rem", color: "var(--fg-muted)" }}>
                  <strong style={{ color: "var(--fg-strong)", fontWeight: 600 }}>
                    {item.award}
                  </strong>
                  <span style={{ color: "var(--fg-subtle)", margin: "0 0.35rem" }}>
                    ·
                  </span>
                  <span>{item.title}</span>
                  <span style={{ color: "var(--fg-subtle)", fontSize: "0.78125rem", marginLeft: "0.35rem" }}>
                    ({item.organization})
                  </span>
                </div>

                <span
                  className="font-mono"
                  style={{
                    fontSize: "0.78125rem",
                    color: "var(--fg-subtle)",
                    flexShrink: 0,
                  }}
                >
                  {item.date}
                </span>
              </div>

              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--fg-muted)",
                  lineHeight: 1.55,
                }}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
