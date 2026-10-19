"use client";

import React, { useState } from "react";
import { portfolioData, WorkExperience } from "@/data/portfolio";

export function WorkSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" style={{ marginBottom: "1.25rem" }}>
      <span id="work" style={{ display: "none" }} aria-hidden="true" />
      <div
        style={{
          borderBottom: "1px solid var(--border)",
          paddingBottom: "0.35rem",
          marginBottom: "0.35rem",
        }}
      >
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          Experience
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.05rem" }}>
        {portfolioData.workExperiences.map((item: WorkExperience) => {
          const isExpanded = expandedId === item.id;

          return (
            <div
              key={item.id}
              className="work-row-container"
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
              <button
                type="button"
                onClick={() => toggleExpand(item.id)}
                aria-expanded={isExpanded}
                className={`work-row-header ${isExpanded ? "" : "hover-row"}`}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "0.18rem 0.5rem",
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: "1.25rem",
                  cursor: "pointer",
                }}
              >
                {/* Left: Role at Company */}
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--fg-muted)",
                    flex: "0 1 auto",
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "0.375rem",
                  }}
                >
                  <span>{item.role} at </span>
                  <strong style={{ color: "var(--fg-strong)", fontWeight: 500 }}>
                    {item.company}
                  </strong>
                  {item.promotion && (
                    <span
                      style={{
                        fontSize: "0.625rem",
                        padding: "0.1rem 0.4rem",
                        borderRadius: "4px",
                        backgroundColor: "var(--accent-light)",
                        color: "var(--accent-text)",
                        fontWeight: 400,
                        verticalAlign: "baseline",
                        whiteSpace: "nowrap",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.2rem",
                      }}
                    >
                      <span>⚡</span>
                      <span>{item.promotion}</span>
                    </span>
                  )}
                </div>

                {/* Right: Date Range (font-mono matching Hackathons & Education) */}
                <div style={{ flexShrink: 0 }}>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "0.78125rem",
                      color: "var(--fg-subtle)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.period}
                  </span>
                </div>
              </button>

              {/* Expandable Details Accordion */}
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
                      color: "var(--fg-subtle)",
                      flexWrap: "wrap",
                    }}
                  >
                    <span>📍 {item.location}</span>
                    {item.promotion && (
                      <span
                        style={{
                          backgroundColor: "var(--accent-light)",
                          color: "var(--accent-text)",
                          padding: "0.125rem 0.375rem",
                          borderRadius: "4px",
                          fontSize: "0.6875rem",
                          fontWeight: 500,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <span>⚡</span>
                        <span>{item.promotion}</span>
                      </span>
                    )}
                    {item.current && (
                      <span
                        className="font-silkscreen"
                        style={{
                          backgroundColor: "rgba(16, 185, 129, 0.12)",
                          color: "var(--green)",
                          padding: "0.125rem 0.375rem",
                          borderRadius: "4px",
                          fontSize: "0.6875rem",
                        }}
                      >
                        Active
                      </span>
                    )}
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
                    {item.description}
                  </p>

                  {item.progression && item.progression.length > 0 ? (
                    <div style={{ marginTop: "0.75rem", marginBottom: "0.75rem" }}>
                      <div
                        style={{
                          position: "relative",
                          paddingLeft: "1.25rem",
                          borderLeft: "2px solid var(--border)",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.875rem",
                        }}
                      >
                        {item.progression.map((prog, pIdx) => (
                          <div key={pIdx} style={{ position: "relative" }}>
                            {/* Dot indicator */}
                            <div
                              style={{
                                position: "absolute",
                                left: "-1.5625rem",
                                top: "0.35rem",
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: pIdx === 0 ? "var(--accent)" : "var(--fg-subtle)",
                                border: "2px solid var(--bg)",
                              }}
                            />

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "baseline",
                                gap: "0.5rem",
                                flexWrap: "wrap",
                                marginBottom: "0.25rem",
                              }}
                            >
                              <span style={{ fontSize: "0.8125rem", color: "var(--fg-strong)", fontWeight: 500 }}>
                                {prog.role}
                              </span>
                              <span
                                className="font-mono"
                                style={{ fontSize: "0.72rem", color: "var(--fg-subtle)" }}
                              >
                                {prog.period}
                              </span>
                            </div>

                            {prog.bullets && (
                              <ul
                                style={{
                                  paddingLeft: "1.25rem",
                                  margin: 0,
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.25rem",
                                  fontSize: "0.78125rem",
                                  color: "var(--fg-muted)",
                                  fontWeight: 300,
                                  lineHeight: 1.5,
                                }}
                              >
                                {prog.bullets.map((b, bIdx) => (
                                  <li key={bIdx}>{b}</li>
                                ))}
                              </ul>
                            )}

                            {pIdx === 0 && item.promotion && (
                              <div
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "0.3rem",
                                  marginTop: "0.375rem",
                                  marginBottom: "0.25rem",
                                  padding: "0.15rem 0.45rem",
                                  borderRadius: "4px",
                                  backgroundColor: "var(--accent-light)",
                                  color: "var(--accent-text)",
                                  fontSize: "0.6875rem",
                                  fontWeight: 500,
                                }}
                              >
                                <span>▲</span>
                                <span>{item.promotion}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    item.bullets && item.bullets.length > 0 && (
                      <ul
                        style={{
                          paddingLeft: "1.25rem",
                          marginBottom: "0.75rem",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.375rem",
                          fontSize: "0.75rem",
                          color: "var(--fg-muted)",
                          fontWeight: 300,
                          lineHeight: 1.5,
                        }}
                      >
                        {item.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )
                  )}

                  {item.skills && item.skills.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.375rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      {item.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="skill-tag">
                          {skill}
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
