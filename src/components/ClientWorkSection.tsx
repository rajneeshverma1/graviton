"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";

export function ClientWorkSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="client-work" style={{ marginBottom: "1.25rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid var(--border)",
          paddingBottom: "0.35rem",
          marginBottom: "0.35rem",
        }}
      >
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          Client Work & Exits
        </h2>

        <span
          className="font-silkscreen"
          style={{
            fontSize: "0.6875rem",
            color: "var(--green)",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            padding: "0.18rem 0.55rem",
            borderRadius: "var(--radius-full)",
            letterSpacing: "0.02em",
          }}
        >
          3 Delivered & Sold
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.05rem" }}>
        {portfolioData.clientWork.map((project: Project) => {
          const isExpanded = expandedId === project.id;

          return (
            <div
              key={project.id}
              className="portfolio-row-container"
              style={{
                borderRadius: "var(--radius-sm)",
                transition: "var(--transition)",
                backgroundColor: isExpanded ? "var(--bg-subtle)" : "transparent",
                border: isExpanded ? "1px solid var(--border)" : "1px solid transparent",
                overflow: "hidden",
                margin: "0 -0.5rem",
              }}
            >
              {/* Row Header Button */}
              <button
                type="button"
                onClick={() => toggleExpand(project.id)}
                aria-expanded={isExpanded}
                className={`portfolio-row-header ${isExpanded ? "" : "hover-row"}`}
                style={{
                  width: "100%",
                  textAlign: "left",
                  cursor: "pointer",
                  border: "none",
                  background: "transparent",
                  color: "inherit",
                }}
              >
                <div className="portfolio-row-top">
                  {/* Left: Project Name · Description */}
                  <div className="portfolio-row-main">
                    <strong className="portfolio-row-title-text">
                      {project.name}
                    </strong>
                    <span className="portfolio-row-sep">
                      ·
                    </span>
                    <span className="portfolio-row-desc-desktop">
                      {project.tagline}
                    </span>
                  </div>

                  {/* Right: Sold Price Pill */}
                  <div className="portfolio-row-actions">
                    {project.soldPrice && (
                      <span
                        className="font-silkscreen"
                        style={{
                          fontSize: "0.6875rem",
                          color: "var(--green)",
                          backgroundColor: "rgba(16, 185, 129, 0.12)",
                          padding: "0.15rem 0.5rem",
                          borderRadius: "4px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Sold for {project.soldPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Mobile Tagline (clean, readable underneath on mobile) */}
                <div className="portfolio-row-desc-mobile">
                  {project.tagline}
                </div>
              </button>

              {/* Expandable Project Details */}
              {isExpanded && (
                <div
                  style={{
                    padding: "0 0.75rem 0.875rem 0.75rem",
                    borderTop: "1px dashed var(--border-subtle)",
                    marginTop: "0.25rem",
                    paddingTop: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                      fontSize: "0.75rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      className="font-silkscreen"
                      style={{
                        backgroundColor: "rgba(16, 185, 129, 0.12)",
                        color: "var(--green)",
                        padding: "0.125rem 0.4rem",
                        borderRadius: "4px",
                        fontSize: "0.6875rem",
                      }}
                    >
                      Acquired · {project.soldPrice}
                    </span>
                    <span style={{ color: "var(--fg-subtle)" }}>
                      Private commercial contract
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "0.8125rem",
                      lineHeight: 1.6,
                      color: "var(--fg)",
                      fontWeight: 300,
                      marginBottom: "0.625rem",
                    }}
                  >
                    {project.description}
                  </p>

                  {project.tech && project.tech.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.375rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="skill-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
