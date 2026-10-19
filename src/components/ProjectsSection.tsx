"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";

export function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const projects: Project[] = portfolioData.projects;

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" style={{ marginBottom: "1.25rem" }}>
      <div
        style={{
          borderBottom: "1px solid var(--border)",
          paddingBottom: "0.35rem",
          marginBottom: "0.35rem",
        }}
      >
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          Projects
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.05rem" }}>
        {projects.map((project: Project) => {
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
              {/* Row Header */}
              <div className={`portfolio-row-header ${isExpanded ? "" : "hover-row"}`}>
                <div className="portfolio-row-top">
                  <div className="portfolio-row-main">
                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      aria-expanded={isExpanded}
                      title="Click to view project details"
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        margin: 0,
                        font: "inherit",
                        cursor: "pointer",
                        textAlign: "left",
                        display: "inline",
                        color: "inherit",
                      }}
                    >
                      <strong
                        className="portfolio-row-title-text"
                        style={{
                          color: isExpanded ? "var(--accent)" : "var(--fg-strong)",
                          textDecoration: "underline",
                          textDecorationColor: isExpanded ? "var(--accent)" : "transparent",
                          textUnderlineOffset: "3px",
                          transition: "color 0.15s ease, text-decoration-color 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          if (!isExpanded) {
                            e.currentTarget.style.color = "var(--accent)";
                            e.currentTarget.style.textDecorationColor = "var(--accent)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isExpanded) {
                            e.currentTarget.style.color = "var(--fg-strong)";
                            e.currentTarget.style.textDecorationColor = "transparent";
                          }
                        }}
                      >
                        {project.name}
                      </strong>
                    </button>
                    <span className="portfolio-row-sep">·</span>
                    <span className="portfolio-row-desc-desktop">
                      {project.tagline}
                    </span>
                  </div>

                  {/* Right: Live / Code with timeline silkscreen font */}
                  <div className="portfolio-row-actions font-silkscreen">
                    {project.liveUrl && !project.liveUrl.includes("github.com") && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-hover"
                      >
                        {project.liveUrl.includes("Soon") ? "Soon" : "Live"}
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View GitHub Repository"
                        className="link-hover"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Mobile Tagline (clean, readable, and non-cramped underneath on phone) */}
                <div className="portfolio-row-desc-mobile">
                  {project.tagline}
                </div>
              </div>

              {/* Expandable Project Details - same as Client Work & Exits */}
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
                        backgroundColor: "rgba(59, 130, 246, 0.12)",
                        color: "var(--accent)",
                        padding: "0.125rem 0.45rem",
                        borderRadius: "4px",
                        fontSize: "0.6875rem",
                        textTransform: "uppercase",
                      }}
                    >
                      {project.category} · {project.year}
                    </span>

                    {project.featured && (
                      <span
                        className="font-silkscreen"
                        style={{
                          backgroundColor: "rgba(238, 67, 68, 0.12)",
                          color: "#EE4344",
                          padding: "0.125rem 0.45rem",
                          borderRadius: "4px",
                          fontSize: "0.6875rem",
                        }}
                      >
                        Featured
                      </span>
                    )}

                    <span style={{ color: "var(--fg-subtle)", fontSize: "0.75rem" }}>
                      Full-Stack AI Project
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
                        marginBottom: "0.75rem",
                      }}
                    >
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="skill-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions inside expanded view */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginTop: "0.5rem",
                      paddingTop: "0.5rem",
                      borderTop: "1px solid var(--border-subtle)",
                      flexWrap: "wrap",
                    }}
                  >
                    {project.liveUrl && !project.liveUrl.includes("github.com") && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pill-link"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          padding: "0.25rem 0.65rem",
                          borderRadius: "var(--radius-full)",
                          backgroundColor: "var(--pill-bg)",
                          border: "1px solid var(--pill-border)",
                          color: "var(--fg-strong)",
                          fontSize: "0.75rem",
                          fontWeight: 400,
                        }}
                      >
                        <span>Visit Site ↗</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pill-link"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          padding: "0.25rem 0.65rem",
                          borderRadius: "var(--radius-full)",
                          backgroundColor: "var(--pill-bg)",
                          border: "1px solid var(--pill-border)",
                          color: "var(--fg-strong)",
                          fontSize: "0.75rem",
                          fontWeight: 400,
                        }}
                      >
                        <span>Source Code ↗</span>
                      </a>
                    )}

                    <a
                      href={`/projects/${project.id}`}
                      className="pill-link"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "var(--radius-full)",
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        color: "var(--fg-muted)",
                        fontSize: "0.75rem",
                        fontWeight: 400,
                      }}
                    >
                      <span>Dedicated Page ↗</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
